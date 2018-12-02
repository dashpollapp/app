import { CHANGE_MODAL } from "../constants/actionTypes";

export default function (visible, poll) {
    return {
        type: CHANGE_MODAL,
        payload: {
            visible,
            poll
        }
    }
}