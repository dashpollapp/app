import { actionTypes } from "../constants";

export default function (userId) {
    const httpClient = require("../utils/store").httpClient;
    return dispatch => {
        dispatch({ type: actionTypes.LOAD_USER_PROFILE });
        httpClient.request({
            url: `/user/${userId}`,
            method: "GET",
        }).then(res => {
            dispatch({ type: actionTypes.SAVE_USER_PROFILE, payload: { user: res.data } })
        }).catch(err => dispatch({ type: actionTypes.SAVE_USER_PROFILE_FAIL }));

    }

}
