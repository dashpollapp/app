import { USER_SEARCH } from "../constants/actionTypes";

export default function (username, limit = 4) {
    return {
        type: USER_SEARCH,
        payload: {
            request: {
                url: `/search?query=${username}&limit=${limit}`,
            }
        }
    }
}