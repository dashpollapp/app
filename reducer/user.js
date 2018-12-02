import {
    SET_CURRENT_USER,
    AUTH_LOGOUT,
    AUTH_LOGOUT_ALL_SUCCESS,
    AUTH_LOGOUT_ALL_FAIL,
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAIL,
    AUTH_REGISTER,
    AUTH_REGISTER_FAIL,
    AUTH_REGISTER_SUCCESS,
    UPLOAD_PB_SUCCESS,
    UPDATE_USER_FROM_API_SUCCESS
} from "../constants/actionTypes";

import db from "../utils/db";

const initialState = { loading: false, user: false };

export default function (state = initialState, action) {
    switch (action.type) {

        case SET_CURRENT_USER:
            let ifUserFromDb = action.payload;
            if (ifUserFromDb._id === "user" || (ifUserFromDb.id)) {
                ifUserFromDb._id = ifUserFromDb.id;
                delete ifUserFromDb.id;
            }
            return { loading: false, user: ifUserFromDb };

        case UPDATE_USER_FROM_API_SUCCESS:
            let userFromApi = { ...action.payload.user, token: state.user.token }
            if (userFromApi.meta.pb !== state.user.meta.pb) console.log("PB VERÄNDERT", true);
            saveUserToDb(userFromApi);
            return { loading: false, user: userFromApi };

        //Ganzen user updaten
        case UPLOAD_PB_SUCCESS:
            let userPbUpdated = { ...state.user, meta: { ...state.user.meta, pb: action.payload.msg } }
            saveUserToDb(userPbUpdated);
            return { ...state, user: userPbUpdated }

        case AUTH_LOGIN:
            return { ...state, loading: true };
        case AUTH_LOGIN_SUCCESS:
            let user = { ...action.payload.data.user, token: action.payload.data.token, loading: false }
            saveUserToDb(user);
            return { loading: false, user };
        case AUTH_LOGIN_FAIL:
            return {
                user: false,
                loading: false,
                error: 'Error while login in',
            };

        case AUTH_REGISTER:
            return { ...state, loading: true };

        case AUTH_REGISTER_SUCCESS:
            let registeredUser = { ...action.payload.data.user, token: action.payload.data.token, loading: false }
            saveUserToDb(registeredUser);
            return { loading: false, user: registeredUser };

        case AUTH_REGISTER_FAIL:
            return {
                user: false,
                loading: false,
                error: 'Error while login in',
            };

        case AUTH_LOGOUT:
            deleteUserFromDb();
            return { loading: false, user: false };

        case AUTH_LOGOUT_ALL_SUCCESS:
            deleteUserFromDb();
            return { loading: false, user: false };

        case AUTH_LOGOUT_ALL_FAIL:
            return { ...state, loading: false, error: 'error while logout' }

        default:
            return state;
    }
}

function deleteUserFromDb() {
    db.get('user').then(function (doc) {
        return db.remove(doc._id, doc._rev);
    });
}

function saveUserToDb(user) {
    console.log("[Database] Save User");
    db.get('user').then(function (doc) {
        return db.remove(doc._id, doc._rev).then(() => {
            db.put(Object.assign(user, { _id: "user", id: user._id }),
                { force: true }
            )
        })

    })
        .catch(e => {
            db.put(Object.assign(user, { _id: "user", id: user._id }),
                { force: true }
            )
        });

}