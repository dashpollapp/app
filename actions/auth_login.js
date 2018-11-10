import { AUTH_LOGIN } from "../constants/actionTypes";

export default function (username, password) {
    return {
        type: AUTH_LOGIN,
        payload: {
            request: {
                url: "/login",
                method: "post",
                data: {
                    username,
                    password
                }
            }
        }
    }
}