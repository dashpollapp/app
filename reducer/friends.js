import uniqueIdArray from "../utils/uniqueIdArray"

const initialState = [];

export default function (state = initialState, action) {

    switch (action.type) {

        case "LOAD_FRIENDS_SUCCESS":
            return [...uniqueIdArray(action.payload.friends, state)];

        default:
            return state;
    }



}