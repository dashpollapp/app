import { AUTH_REGISTER } from "../constants/actionTypes";

export default function (username, fullname, password) {
    return {
        type: AUTH_REGISTER,
        payload: {
            request: {
                url: "/user",
                method: "POST",
                data: {
                    username,
                    fullname,
                    password
                }
            }
        }
    }
}