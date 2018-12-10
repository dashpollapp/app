import { actionTypes } from "../constants";

export default function (user) {
    const httpClient = require("../utils/store").httpClient;
    return dispatch => {
        dispatch({ type: actionTypes.FOLLOW_USER });
        httpClient.request({
            url: "/follow",
            method: (user.following) ? "DELETE" : "POST",
            data: {
                target: user._id
            }
        }).then(res => {
            dispatch({ type: actionTypes.FOLLOW_USER_SUCCESS, payload: { user: res.data.target } })
        }).catch(err => console.log(err) & dispatch({ type: actionTypes.FOLLOW_USER_FAIL }));

    }

}
