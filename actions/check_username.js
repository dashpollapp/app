import regex from "../constants/regexp";

export default function (username) {
    const httpClient = require("../utils/store").httpClient;
    return dispatch => {
        dispatch({ type: "CHECK_USERNAME" });

        if (!username || username.length < 4)
            return dispatch({ type: "CHECK_USERNAME_SUCCESS", payload: { isUsernameValid: false, usernameMsg: "Der Username muss min. 4 Zeichen lang sein!" } })

        if (username.length > 16)
            return dispatch({ type: "CHECK_USERNAME_SUCCESS", payload: { isUsernameValid: false, usernameMsg: "Der Username darf max. 16 Zeichen lang sein!" } })

        if (!regex.username.test(username))
            return dispatch({ type: "CHECK_USERNAME_SUCCESS", payload: { isUsernameValid: false, usernameMsg: "Der Username darf keine Sonderzeichen außer _ und . enthalten" } })

        httpClient.request({
            url: `/check?username=${username}`,
            method: "GET",
        }).then(res => {
            let { isValid, usernameMsg } = res.data;
            dispatch({ type: "CHECK_USERNAME_SUCCESS", payload: { username, isUsernameValid: isValid, usernameMsg } })
        }).catch(err => console.log(err) & dispatch({ type: "CHECK_USERNAME_FAIL", payload: err }));

    }

}
