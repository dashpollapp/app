import { actionTypes } from "../constants";

export default function (username, limit = 4) {
    return {
        type: actionTypes.USER_SEARCH,
        payload: {
            request: {
                url: `/search?query=${username}&limit=${limit}`,
            }
        }
    }
}