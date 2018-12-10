import { actionTypes } from "../constants";

const initialState = { users: [] }

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.USER_SEARCH:
            return { ...state, loading: true };
        case actionTypes.USER_SEARCH_SUCCESS:
            return { loading: false, users: action.payload.data };

        case actionTypes.USER_SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                error: "Error while fetching users",
            };

        case actionTypes.AUTH_LOGOUT:
        case actionTypes.AUTH_LOGIN_SUCCESS:
        case actionTypes.AUTH_LOGOUT_ALL_SUCCESS:
            return initialState;
        default:
            return state;
    }
}