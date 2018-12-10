import { actionTypes } from "../constants";

export default function (username, password) {
    return {
        type: actionTypes.AUTH_LOGIN,
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