import { LOAD_POLLS_HOME } from "../constants/actionTypes";
import { store } from "../utils";

export default function (skip) {
    const limit = /*store.getState().bl*/ 10;
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