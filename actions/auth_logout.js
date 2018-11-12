import { AUTH_LOGOUT } from "../constants/actionTypes";

export default function (user) {
    return {
        type: AUTH_LOGOUT,
        payload: user
    }
}