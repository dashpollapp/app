import { actionTypes } from "../constants";

export default function (skip, refresh = false) {
    const limit = /*store.getState().bl*/ 5;
    const httpClient = require("../utils/store").httpClient;
    return dispatch => {
        dispatch({ type: actionTypes.LOAD_POLLS_HOME });
        httpClient.request({
            url: `/polls?site=home&skip=${skip}&limit=${limit}`, //später zu: site=home
            method: "GET",
        }).then(res => {
            dispatch({ type: actionTypes.LOAD_POLLS_HOME_SUCCESS, payload: { data: res.data, refresh } })
        }).catch(err => console.log(err) & dispatch({ type: actionTypes.LOAD_POLLS_HOME_FAIL, payload: err }));

    }

}
