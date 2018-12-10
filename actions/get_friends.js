//import { LOAD_POLLS_HOME, LOAD_POLLS_HOME_SUCCESS, LOAD_POLLS_HOME_FAIL } from "../constants/actionTypes";

export default function () {
    const httpClient = require("../utils/store").httpClient;
    return dispatch => {
        dispatch({ type: "LOAD_FRIENDS" });
        httpClient.request({
            url: "/explore",
            method: "GET",
        })
            .then(res => dispatch({ type: "LOAD_FRIENDS_SUCCESS", payload: { friends: res.data.friends } }))
            .catch(err => console.log(err) & dispatch({ type: "LOAD_FRIENDS_FAIL", payload: err }));

    }

}
