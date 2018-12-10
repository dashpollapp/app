import { actionTypes } from "../constants";

export default function () {
    const httpClient = require("../utils/store").httpClient;
    return dispatch => {

        dispatch({ type: actionTypes.UPDATE_USER_FROM_API });

        httpClient.request({
            url: "/user",
            method: "GET"
        })
            .then(res => dispatch({ type: actionTypes.UPDATE_USER_FROM_API_SUCCESS, payload: { user: res.data } }))
            .catch(err => console.log(err) & dispatch({ type: actionTypes.UPDATE_USER_FROM_API_FAIL }));


    }
}