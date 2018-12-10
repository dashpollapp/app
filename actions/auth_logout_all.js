import { actionTypes } from "../constants";

export default function (user) {
    return {
        type: actionTypes.AUTH_LOGOUT_ALL,
        payload: {
            request: {
                url: "/login",
                method: "delete",
            },
        }
    }
}