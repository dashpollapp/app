export default function ({ username, fullname, password }) {
    const httpClient = require("../utils/store").httpClient;
    return dispatch => {
        dispatch({ type: "AUTH_PRE_REGISTER" });

        httpClient.request({
            url: "/user",
            method: "POST",
            data: {
                username,
                fullname,
                password
            }
        }).then(res => {
            let { user, token } = res.data;
            dispatch({ type: "AUTH_PRE_REGISTER_SUCCESS", payload: { user, token } })
        }).catch(err => console.log(err) & dispatch({ type: "AUTH_PRE_REGISTER_FAIL", payload: err }));

    }

}
