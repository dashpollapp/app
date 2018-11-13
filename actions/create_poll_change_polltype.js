import { CREATE_POLL_CHANGE_POLLTYPE } from "../constants/actionTypes";

export default function (polltype) {
    return {
        type: CREATE_POLL_CHANGE_POLLTYPE,
        payload: polltype
    }
}