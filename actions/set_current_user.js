import { SET_CURRENT_USER } from "../constants/actionTypes";

export default function (user) {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}