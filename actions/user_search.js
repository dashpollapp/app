import { USER_SEARCH } from "../constants/actionTypes";

export default function (username) {
    return {
        type: USER_SEARCH,
        payload: {
            request: {
                url: "/search?query=" + username,
            }
        }
    }
}