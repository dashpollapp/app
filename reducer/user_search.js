import { USER_SEARCH, USER_SEARCH_SUCCESS, USER_SEARCH_FAIL } from "../constants/actionTypes";

export default function (state = { users: [] }, action) {
    switch (action.type) {
        case USER_SEARCH:
            return { loading: true };
        case USER_SEARCH_SUCCESS:
            return { loading: false, users: action.payload.data };

        case USER_SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Error while fetching users',
            };
        default:
            return state;
    }
}