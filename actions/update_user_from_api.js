import { UPDATE_USER_FROM_API, UPDATE_USER_FROM_API_SUCCESS, UPDATE_USER_FROM_API_FAIL } from "../constants/actionTypes";

export default function () {
    const httpClient = require('../utils/store').httpClient;
    return dispatch => {

        dispatch({ type: UPDATE_USER_FROM_API });

        httpClient.request({
            url: "/user",
            method: "GET"
        })
            .then(res => dispatch({ type: UPDATE_USER_FROM_API_SUCCESS, payload: { user: res.data } }))
            .catch(err => console.log(err) & dispatch({ type: UPDATE_USER_FROM_API_FAIL }));


    }
}