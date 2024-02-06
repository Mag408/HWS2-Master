const initState: initStateType = {
  isLoading: false,
};

export const loadingReducer = (
  state = initState,
  action: LoadingActionType
): initStateType => {
  switch (action.type) {
    case "CHANGE_LOADING": {
      const copyState = { ...state };
      copyState.isLoading = !state.isLoading;
      return copyState;
    }
    default:
      return state;
  }
};

type initStateType = {
  isLoading: boolean;
};

type LoadingActionType = {
  type: "CHANGE_LOADING";
  isLoading: boolean;
};

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
  type: "CHANGE_LOADING",
  isLoading,
});
