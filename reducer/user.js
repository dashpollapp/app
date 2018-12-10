import { actionTypes } from "../constants";

import db from "../utils/db";

const initialState = { loading: false, user: false };

export default function (state = initialState, action) {
    switch (action.type) {

        case actionTypes.SET_CURRENT_USER:
            let ifUserFromDb = action.payload;
            if (ifUserFromDb._id === "user" || (ifUserFromDb.id)) {
                ifUserFromDb._id = ifUserFromDb.id;
                delete ifUserFromDb.id;
            }
            return { loading: false, user: ifUserFromDb };

        case actionTypes.UPDATE_USER_FROM_API_SUCCESS:
            let userFromApi = { ...action.payload.user, token: state.user.token }
            if (userFromApi.meta.pb !== state.user.meta.pb) {
                let user = { _id: userFromApi._id, newPB: userFromApi.meta.pb, oldPB: state.user.meta.pb };
                savePbToDb(user);
            };
            saveUserToDb(userFromApi);
            return { loading: false, user: userFromApi };

        //Ganzen user updaten
        case actionTypes.UPLOAD_PB_SUCCESS:
            let userPbUpdated = { ...state.user, meta: { ...state.user.meta, pb: action.payload.msg } }
            saveUserToDb(userPbUpdated);
            return { ...state, user: userPbUpdated }

        case actionTypes.AUTH_LOGIN:
            return { ...state, loading: true };
        case actionTypes.AUTH_LOGIN_SUCCESS:
            let user = { ...action.payload.data.user, token: action.payload.data.token, loading: false }
            saveUserToDb(user);
            return { loading: false, user };
        case actionTypes.AUTH_LOGIN_FAIL:
            return {
                user: false,
                loading: false,
                error: "Error while login in",
            };

        case actionTypes.AUTH_REGISTER:
            return { ...state, loading: true };

        case actionTypes.AUTH_REGISTER_SUCCESS:
            let registeredUser = action.payload.user
            saveUserToDb(registeredUser);
            return { loading: false, user: registeredUser };

        case actionTypes.AUTH_REGISTER_FAIL:
            return {
                user: false,
                loading: false,
                error: "Error while login in",
            };

        case actionTypes.AUTH_LOGOUT:
            deleteUserFromDb();
            return { loading: false, user: false };

        case actionTypes.AUTH_LOGOUT_ALL_SUCCESS:
            deleteUserFromDb();
            return { loading: false, user: false };

        case actionTypes.AUTH_LOGOUT_ALL_FAIL:
            return { ...state, loading: false, error: "error while logout" }

        default:
            return state;
    }
}

function savePbToDb(user) {

    Expo.FileSystem.downloadAsync("https://api.dashpoll.net/pb/" + user.newPB, Expo.FileSystem.cacheDirectory + user.newPB + ".jpg", { md5: true })
        .then(file => {

            let pbDbFormat = { _id: "pb_" + user._id, uri: user.newPB, id: user._id, md5: file.md5 }
            db.get("pb_" + user._id).then(function (doc) {
                return db.remove(doc._id, doc._rev).then(() => {
                    db.put(pbDbFormat,
                        { force: true }
                    )
                })

            })
                .catch(e => {
                    db.put(pbDbFormat,
                        { force: true }
                    )
                });

        })

}

function deleteUserFromDb() {
    db.get("user").then(function (doc) {
        return db.remove(doc._id, doc._rev);
    });
}

function saveUserToDb(user) {
    console.log("[Database] Save User");
    let userDbFormat = { ...user, id: user._id, _id: "user" }

    db.get("user").then(function (doc) {
        return db.remove(doc._id, doc._rev).then(() => {
            db.put(userDbFormat,
                { force: true }
            )
        })

    })
        .catch(e => {
            db.put(userDbFormat,
                { force: true }
            )
        });

}