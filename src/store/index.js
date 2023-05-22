import { combineReducers, createStore } from "redux";
import { AuthReducer } from "./auth/AuthReducer";
import { todoReducer } from "../store/todoReducer/Todo_reducer";
const rootReducer = combineReducers({
  todo: todoReducer,
  auth: AuthReducer,
});
export const store = createStore(rootReducer);
