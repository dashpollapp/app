export default function (password) {
    return dispatch => {
        dispatch({ type: "CHECK_PASSWORD" });

        if (!password || password.length < 4)
            return dispatch({ type: "CHECK_PASSWORD_SUCCESS", payload: { isPasswordValid: false, passwordMsg: "Dein Passwort muss min. 4 Zeichen lang sein!" } })

        dispatch({ type: "CHECK_PASSWORD_SUCCESS", payload: { password, isPasswordValid: true, passwordMsg: "" } });


    }

}
