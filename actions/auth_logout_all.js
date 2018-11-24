import { AUTH_LOGOUT_ALL } from "../constants/actionTypes";

export default function (user) {
    return {
        type: AUTH_LOGOUT_ALL,
        payload: {
            request: {
                url: "/login",
                method: "delete",
            },
        }
    }
}