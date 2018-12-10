const initialState = {
    loading: false,
    errors: {
        username: { isValid: true, msg: "" },
        fullname: { isValid: true, msg: "" },
        password: { isValid: true, msg: "" }
    },
    registeredUser: false
}

export default function (state = initialState, action) {
    switch (action.type) {

        //USERNAME
        case "CHECK_USERNAME":
            return { ...state, loading: true };

        case "CHECK_USERNAME_SUCCESS":
            let { isUsernameValid, usernameMsg = "", username } = action.payload;

            return {
                ...state,
                loading: false,
                user: isUsernameValid ? { ...state.user, username } : state.user,
                errors: { ...state.errors, username: { isValid: isUsernameValid, msg: usernameMsg } }
            };

        case "CHECK_USERNAME_FAIL":
            return {
                ...state,
                loading: false,
                errors: { ...state.errors, username: { isValid: false, msg: "Verfügbarkeit konnte nicht geprüft werden. Hast du Internet?" } }
            };
        //////////////////////////7


        //FULLNAME
        case "CHECK_FULLNAME":
            return { ...state, loading: true };

        case "CHECK_FULLNAME_SUCCESS":
            let { isFullnameValid, fullnameMsg = "", fullname } = action.payload;
            return {
                ...state,
                loading: false,
                user: isFullnameValid ? { ...state.user, fullname } : state.user,
                errors: { ...state.errors, fullname: { isValid: isFullnameValid, msg: fullnameMsg } }
            };
        /////////////////////////


        //PASSWORD
        case "CHECK_PASSWORD":
            return { ...state, loading: true };

        case "CHECK_PASSWORD_SUCCESS":
            let { isPasswordValid, passwordMsg = "", password } = action.payload;
            return {
                ...state,
                loading: false,
                user: isPasswordValid ? { ...state.user, password } : state.user,
                errors: { ...state.errors, password: { isValid: isPasswordValid, msg: passwordMsg } }
            };
        /////////////////////////

        /*case "AUTH_REGISTER":
            return {
                ...state,
                loading: true
            }*/

        case "AUTH_REGISTER_SUCCESS":
            return {
                ...state,
                loading: false,
                registeredUser: action.payload.user
            }

        default:
            return state;
    }
}