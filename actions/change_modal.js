import { actionTypes } from "../constants";

export default function (visible, poll) {
    return {
        type: actionTypes.CHANGE_MODAL,
        payload: {
            visible,
            poll
        }
    }
}