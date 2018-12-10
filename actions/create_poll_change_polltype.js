import { actionTypes } from "../constants";

export default function (polltype) {
    return {
        type: actionTypes.CREATE_POLL_CHANGE_POLLTYPE,
        payload: polltype
    }
}