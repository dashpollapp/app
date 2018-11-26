import { 
    SAVE_USER_PROFILE,
    CLEAR_USER_PROFILES
} from "../constants/actionTypes";

import { db } from "../utils"

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case SAVE_USER_PROFILE:
            const { user } = action.payload;
            saveProfileToDb(user);
            return Object.assign(state, { [user._id]: user });

        case CLEAR_USER_PROFILES:
            deleteProfilesFromDb();
            return initialState;

        case USER_SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Error while fetching users',
            };
        case AUTH_LOGOUT:
        case AUTH_LOGOUT_ALL_SUCCESS:
            deleteProfilesFromDb();
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