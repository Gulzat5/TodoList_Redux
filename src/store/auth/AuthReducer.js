export const ActionType = {
  LOGIN: "LOGIN",
  LOGOUT: "lOGOUT",
};

const initialState = {
  email: "",
  LogOut: false,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      console.log(action.payload, "asaa");
      return {
        email: action.payload,
        LogOut: true,
      };

    case ActionType.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
