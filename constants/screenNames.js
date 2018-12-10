import Enum from "../utils/enumProxy";

export default new Enum({

    //LoginNavigator
    SIGN_IN: "SIGN_IN",
    SIGN_UP: "SIGN_UP",

    //HomeNavigator
    CHAT: "CHAT",
    POLLS: "POLLS",

    //RootNavigator
    HOME: "HOME",
    USER: "USER",
    CREATE: "CREATE",
    SETTINGS: "SETTINGS",
    SEARCH: "SEARCH",
    PROFILE: "PROFILE",

    //CreatePollNavigator
    CREATEPOLL: "CREATEPOLL",
    POLLTYPES: "POLLTYPES",
    POLLSTATS: "POLLSTATS",
    POSTFILTER: "POSTFILTER",
    POSTREPORT: "POSTREPORT",

    //UserNavigator
    USER_POSTS: "USER_POSTS",
    USER_PROFILE: "USER_PROFILE",
    USER_CHAT: "USER_CHAT",

    //RegisterNavigator
    REGISTER_PERMISSIONS: "REGISTER_PERMISSIONS",
    REGISTER_NAMESELECTION: "REGISTER_NAMESELECTION",
    REGISTER_PASSWORD: "REGISTER_PASSWORD",
    REGISTER_FINISH: "REGISTER_FINISH",

    AUTH_HOME: "AUTH_HOME",

    LOGIN_SELECT_USER: "LOGIN_SELECT_USER",
    LOGIN_PASSWORD: "LOGIN_PASSWORD",

    DEVELOPER: "DEVELOPER"


});