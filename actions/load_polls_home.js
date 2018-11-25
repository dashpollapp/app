import { LOAD_POLLS_HOME } from "../constants/actionTypes";

export default function (skip) {
    const limit = /*store.getState().bl*/ 5;
    return {
        type: LOAD_POLLS_HOME,
        payload: {
            request: {
                url: `/polls?site=all&skip=${skip}&limit=${limit}`, //später zu: site=home
                method: "GET"
            }
        }
    }
}