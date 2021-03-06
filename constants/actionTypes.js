import Enum from "../utils/enumProxy";

export default new Enum({

    //RootApp.js
    //reducer/user.js
    SET_CURRENT_USER: "SET_CURRENT_USER",

    //container/Login/SignIn.js
    //reducer/user_search.js
    USER_SEARCH: "USER_SEARCH",
    USER_SEARCH_SUCCESS: "USER_SEARCH_SUCCESS",
    USER_SEARCH_FAIL: "USER_SEARCH_FAIL",

    //container/Login/SignIn.js
    //reducer/user.js
    AUTH_LOGIN: "AUTH_LOGIN",
    AUTH_LOGIN_SUCCESS: "AUTH_LOGIN_SUCCESS",
    AUTH_LOGIN_FAIL: "AUTH_LOGIN_FAIL",

    //container/Settings/SettingsOverview.js
    //reducer/user.js
    AUTH_LOGOUT: "AUTH_LOGOUT",
    AUTH_LOGOUT_ALL: "AUTH_LOGOUT_ALL",
    AUTH_LOGOUT_ALL_SUCCESS: "AUTH_LOGOUT_ALL_SUCCESS",
    AUTH_LOGOUT_ALL_FAIL: "AUTH_LOGOUT_ALL_FAIL",

    //container/Login/SignUp.js
    //reducer/user.js
    AUTH_REGISTER: "AUTH_REGISTER",
    AUTH_REGISTER_SUCCESS: "AUTH_REGISTER_SUCCESS",
    AUTH_REGISTER_FAIL: "AUTH_REGISTER_FAIL",

    //container/Create/*
    //reducer/create_poll.js & reducer/polls.js
    CREATE_POLL_CHANGE_POLLTYPE: "CREATE_POLL_CHANGE_POLLTYPE",
    CREATE_POLL: "CREATE_POLL",
    CREATE_POLL_SUCCESS: "CREATE_POLL_SUCCESS",
    CREATE_POLL_FAIL: "CREATE_POLL_FAIL",
    CREATE_POLL_INITIALSTATE: "CREATE_POLL_INITIALSTATE",

    //container/Polls/*
    //reducer/reducer/polls.js
    LOAD_POLLS_HOME: "LOAD_POLLS_HOME",
    LOAD_POLLS_HOME_SUCCESS: "LOAD_POLLS_HOME_SUCCESS",
    LOAD_POLLS_HOME_FAIL: "LOAD_POLLS_HOME_FAIL",

    //container/Polls/*
    //reducer/polls.js
    VOTE_FROM_HOME: "VOTE_FROM_HOME",
    VOTE_FROM_HOME_SUCCESS: "VOTE_FROM_HOME_SUCCESS",
    VOTE_FROM_HOME_FAIL: "VOTE_FROM_HOME_FAIL",
    VOTE_FROM_USER: "VOTE_FROM_USER",

    //reducer/other_users.js
    SAVE_USER_PROFILE: "SAVE_USER_PROFILE",
    CLEAR_USER_PROFILES: "CLEAR_USER_PROFILES",
    LOAD_USER_PROFILE: "LOAD_USER_PROFILE",
    SAVE_USER_PROFILE_FAIL: "SAVE_USER_PROFILE_FAIL",

    FOLLOW_USER: "FOLLOW_USER",
    FOLLOW_USER_SUCCESS: "FOLLOW_USER_SUCCESS",
    FOLLOW_USER_FAIL: "FOLLOW_USER_FAIL",

    UPLOAD_PB: "UPLOAD_PB",
    UPLOAD_PB_SUCCESS: "UPLOAD_PB_SUCCESS",
    UPLOAD_PB_FAIL: "UPLOAD_PB_FAIL",

    UPDATE_USER_FROM_API: "UPDATE_USER_FROM_API",
    UPDATE_USER_FROM_API_SUCCESS: "UPDATE_USER_FROM_API_SUCCESS",
    UPDATE_USER_FROM_API_FAIL: "UPDATE_USER_FROM_API_FAIL",

    CHANGE_MODAL: "CHANGE_MODAL",

    IMAGE_CACHE: "IMAGE_CACHE",
    IMAGE_CACHE_SUCCESS: "IMAGE_CACHE_SUCCESS"

})







