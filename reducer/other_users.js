import {
    SAVE_USER_PROFILE,
    CLEAR_USER_PROFILES,
    LOAD_USER_PROFILE,
    SAVE_USER_PROFILE_FAIL,
    AUTH_LOGOUT,
    AUTH_LOGOUT_ALL_SUCCESS,
    FOLLOW_USER_SUCCESS,
    UPLOAD_PB_SUCCESS
} from "../constants/actionTypes";

import db from "../utils/db";

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {

        case SAVE_USER_PROFILE:
            const { user } = action.payload;
            //saveProfileToDb(user);
            return { ...state, [user._id]: user /*loading: false*/ }

        case SAVE_USER_PROFILE_FAIL:
            return { ...state, /*loading: false*/ }

        case CLEAR_USER_PROFILES:
            //deleteProfilesFromDb();
            return initialState;

        case FOLLOW_USER_SUCCESS:
            return { ...state, [action.payload.user._id]: action.payload.user }

        case AUTH_LOGOUT:
        case AUTH_LOGOUT_ALL_SUCCESS:
            //deleteProfilesFromDb();
            return initialState;
        default:
            return state;
    }
}


function deleteProfilesFromDb() {
    db.find({ selector: { _id: { $regext: "/user_" } } })
        .then(result => {
            result.docs.forEach(entry => {
                db.get(entry._id).then(function (doc) {
                    return db.remove(doc._id, doc._rev);
                });
            })
        })

}

function saveProfileToDb(user) {
    db.put(
        {
            _id: "user_" + user._id,
            ...user
        },
        { force: true }
    )
}