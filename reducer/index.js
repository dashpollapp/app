import { combineReducers } from "redux";
import user from "./user";
import user_search from "./user_search";
import polls from "./polls";
import create_poll from "./create_poll";
import other_users from "./other_users";
import change_modal from "./change_modal";
import friends from "./friends";
import register from "./register";
import image from "./image";
import cache from "./cache";
import post_stats from "./post_stats";

export default combineReducers({
    user,
    user_search,
    create_poll,
    polls,
    other_users,
    change_modal,
    friends,
    register,
    image,
    cache,
    post_stats
});