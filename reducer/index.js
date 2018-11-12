import { combineReducers } from "redux";
import user from "./user";
import user_search from "./user_search";

export default combineReducers({
    user,
    user_search,
});