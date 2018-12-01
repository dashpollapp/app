import { CHANGE_MODAL } from "../constants/actionTypes";

export default function (visible) {
    return {
        type: CHANGE_MODAL,
        payload: {
            visible,
        }
    }
}