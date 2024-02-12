import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{ width: " 200px", margin: "0 10px" }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
