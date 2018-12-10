import { actionTypes } from "../constants";

const initialState = { loading: false, poll: false }

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.CREATE_POLL:
            return { loading: true, poll: false };
        case actionTypes.CREATE_POLL_SUCCESS:
            return { loading: false, poll: action.payload.poll };

        case actionTypes.CREATE_POLL_FAIL:
            return {
                ...state,
                poll: false,
                loading: false,
                error: "Error while creating poll",
            };

        case actionTypes.CREATE_POLL_INITIALSTATE:
            return { loading: false, poll: false }

        case actionTypes.CREATE_POLL_CHANGE_POLLTYPE:
            return { ...state, polltype: action.payload }

        case actionTypes.AUTH_LOGOUT:
        case actionTypes.AUTH_LOGOUT_ALL_SUCCESS:
            return initialState;

        default:
            return state;
    }
}