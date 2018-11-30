import {
    SAVE_USER_PROFILE,
    CLEAR_USER_PROFILES,
    LOAD_USER_PROFILE,
    SAVE_USER_PROFILE_FAIL,
    AUTH_LOGOUT,
    AUTH_LOGOUT_ALL_SUCCESS
} from "../constants/actionTypes";

import db from "../utils/db";

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {

        /*
        
            {
                "aw89fua8wd":{
                    _id: "aw89fua8wd",
                    username: "lugga",
                    ...
                }
            }

        */

        case SAVE_USER_PROFILE:
            const { user } = action.payload;
            //saveProfileToDb(user);
            return { ...state, [user._id]: user /*loading: false*/ }

        case SAVE_USER_PROFILE_FAIL:
            return { ...state, /*loading: false*/ }

        case CLEAR_USER_PROFILES:
            //deleteProfilesFromDb();
            return initialState;

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