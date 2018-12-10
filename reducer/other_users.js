import { actionTypes } from "../constants";

import db from "../utils/db";

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {

        case actionTypes.SAVE_USER_PROFILE:
            const { user } = action.payload;
            //saveProfileToDb(user);
            return { ...state, [user._id]: user /*loading: false*/ }

        case actionTypes.SAVE_USER_PROFILE_FAIL:
            return { ...state, /*loading: false*/ }

        case actionTypes.CLEAR_USER_PROFILES:
            //deleteProfilesFromDb();
            return initialState;

        case actionTypes.FOLLOW_USER_SUCCESS:
            return { ...state, [action.payload.user._id]: action.payload.user }

        case actionTypes.AUTH_LOGOUT:
        case actionTypes.AUTH_LOGOUT_ALL_SUCCESS:
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