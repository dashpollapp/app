import { combineReducers } from "redux";
import user from "./user";
import user_search from "./user_search";
import create_poll from "./create_poll";

export default combineReducers({
    user,
    user_search,
    create_poll
});