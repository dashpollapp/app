import { CREATE_POLL, CREATE_POLL_SUCCESS, CREATE_POLL_FAIL, CREATE_POLL_CHANGE_POLLTYPE } from "../constants/actionTypes";

export default function (state = { loading: false, poll: false }, action) {
    switch (action.type) {
        case CREATE_POLL:
            return { loading: true, poll: false };
        case CREATE_POLL_SUCCESS:
            return { loading: false, poll: action.payload.poll };

        case CREATE_POLL_FAIL:
            return {
                ...state,
                poll: false,
                loading: false,
                error: 'Error while creating poll',
            };

        case CREATE_POLL_CHANGE_POLLTYPE:
            return { ...state, polltype: action.payload }

        default:
            return state;
    }
}