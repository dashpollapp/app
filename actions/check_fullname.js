export default function (fullname) {
    return dispatch => {
        dispatch({ type: "CHECK_FULLNAME" });

        if (!fullname || fullname.length < 4)
            return dispatch({ type: "CHECK_FULLNAME_SUCCESS", payload: { isFullnameValid: false, fullnameMsg: "Dein Name muss min. 4 Zeichen lang sein!" } })

        if (fullname.length > 32)
            return dispatch({ type: "CHECK_FULLNAME_SUCCESS", payload: { isFullnameValid: false, fullnameMsg: "Dein Name darf max. 32 Zeichen lang sein!" } })

        dispatch({ type: "CHECK_FULLNAME_SUCCESS", payload: { fullname, isFullnameValid: true, fullnameMsg: "" } });


    }

}
