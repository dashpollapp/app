import { AUTH_LOGIN, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAIL } from "../constants/actionTypes";
import db from "../utils/db";
import { httpClient } from "../utils/store";

export default function (state = { loading: false }, action) {
    switch (action.type) {
        case AUTH_LOGIN:
            return { loading: true };
        case AUTH_LOGIN_SUCCESS:
            const user = { ...action.payload.data.user, token: action.payload.data.token }
            saveUserToDb(user);
            return { loading: false, user };

        case AUTH_LOGIN_FAIL:
            return {
                loading: false,
                error: 'Error while login in',
            };
        default:
            return state;
    }
}

function saveUserToDb(user) {
    db.put(
        {
            _id: "user",
            ...user
        },
        { force: true }
    )
}