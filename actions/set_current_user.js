import { actionTypes } from "../constants";

export default function (user) {
    return {
        type: actionTypes.SET_CURRENT_USER,
        payload: user
    }
}