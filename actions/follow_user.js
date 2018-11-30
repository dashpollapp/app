import { FOLLOW_USER, FOLLOW_USER_SUCCESS, FOLLOW_USER_FAIL } from "../constants/actionTypes";

export default function (user) {
    const httpClient = require("../utils/store").httpClient;
    return dispatch => {
        dispatch({ type: FOLLOW_USER });
        httpClient.request({
            url: "/follow",
            method: (user.following) ? "DELETE" : "POST",
            data: {
                target: user._id
            }
        }).then(res => {
            dispatch({ type: FOLLOW_USER_SUCCESS, payload: { user: res.data.target } })
        }).catch(err => console.log(err) & dispatch({ type: FOLLOW_USER_FAIL }));

    }

}
