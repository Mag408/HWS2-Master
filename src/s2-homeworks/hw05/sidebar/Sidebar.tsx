import React, { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import s from "./Sidebar.module.css";
import { PATH } from "../Pages";
import closeIcon from "./closeOutline.svg";

type PropsType = {
  open: boolean;
  handleClose: () => void;
};

export const Sidebar: FC<PropsType> = ({ open, handleClose }) => {
  const sidebarClass = s.sidebar + (open ? " " + s.open : "");
  const location = useLocation();
  return (
    <>
      {/*затемнение справа от открытого меню*/}
      {open && <div className={s.background} onClick={handleClose} />}

      {open && (
        <aside className={sidebarClass}>
          <button className={s.close} onClick={handleClose}>
            <img src={closeIcon} alt="close sidebar" id={"hw5-menu-close"} />
          </button>

          <nav id={"hw5-menu"} className={s.nav}>
            <NavLink
              id={"hw5-pre-junior-link"}
              to="pre-junior"
              onClick={handleClose}
              className={location.pathname === "/pre-junior" ? s.active : ""}
            >
              Pre-junior
            </NavLink>
            <NavLink
              id={"hw5-junior-link"}
              to={PATH.JUNIOR}
              onClick={handleClose}
              className={location.pathname === "/junior" ? s.active : ""}
            >
              Junior
            </NavLink>
            <NavLink
              id={"hw5-junior-plus-link"}
              to={PATH.JUNIOR_PLUS}
              onClick={handleClose}
              className={location.pathname === "/junior-plus" ? s.active : ""}
            >
              Junior Plus
            </NavLink>
          </nav>
        </aside>
      )}
    </>
  );
};
