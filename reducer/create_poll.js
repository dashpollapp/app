import { CREATE_POLL, CREATE_POLL_SUCCESS, CREATE_POLL_FAIL, CREATE_POLL_CHANGE_POLLTYPE } from "../constants/actionTypes";

export default function (state = { loading: false, navigationState: 0 }, action) {
    switch (action.type) {
        case CREATE_POLL:
            return { ...state, loading: true };
        case CREATE_POLL_SUCCESS:
            return { loading: false, poll: action.payload.data };

        case CREATE_POLL_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Error while fetching users',
            };

        case CREATE_POLL_CHANGE_POLLTYPE:
            return {
                ...state,
                polltype: action.payload,
                navigationState: 0
            }

        default:
            return state;
    }
}