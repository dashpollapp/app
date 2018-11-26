import { 
    CREATE_POLL,
    CREATE_POLL_SUCCESS,
    CREATE_POLL_FAIL,
    CREATE_POLL_CHANGE_POLLTYPE,
    CREATE_POLL_INITIALSTATE,
    AUTH_LOGOUT,
    AUTH_LOGOUT_ALL_SUCCESS
} from "../constants/actionTypes";

const initialState = { loading: false, poll: false }

export default function (state = initialState, action) {
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

        case CREATE_POLL_INITIALSTATE:
            return { loading: false, poll: false }

        case CREATE_POLL_CHANGE_POLLTYPE:
            return { ...state, polltype: action.payload }

        case AUTH_LOGOUT:
        case AUTH_LOGOUT_ALL_SUCCESS:
            return initialState;

        default:
            return state;
    }
}