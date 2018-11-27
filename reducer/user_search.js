import { 
    USER_SEARCH,
    USER_SEARCH_SUCCESS,
    USER_SEARCH_FAIL,
    AUTH_LOGOUT,
    AUTH_LOGOUT_ALL_SUCCESS,
    AUTH_LOGIN_SUCCESS
} from "../constants/actionTypes";

const initialState = { users: [] }

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_SEARCH:
            return { ...state, loading: true };
        case USER_SEARCH_SUCCESS:
            return { loading: false, users: action.payload.data };

        case USER_SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Error while fetching users',
            };
        
        case AUTH_LOGOUT:
        case AUTH_LOGIN_SUCCESS:
        case AUTH_LOGOUT_ALL_SUCCESS:
            return initialState;
        default:
            return state;
    }
}