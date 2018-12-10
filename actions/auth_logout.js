import { actionTypes } from "../constants";

export default function (user) {
    return {
        type: actionTypes.AUTH_LOGOUT,
        payload: user
    }
}