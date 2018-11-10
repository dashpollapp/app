import { combineReducers } from "redux";
import user from "./user";
import user_search from "./user_search";
import auth_login from "./auth_login";

export default combineReducers({
    user,
    user_search,
    auth_login
});