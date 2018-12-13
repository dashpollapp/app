const initialState = { info: { size: 0 }}

export default function (state = initialState, action) {

    switch (action.type) {

        case "CACHE":
            return state;

        case "CACHE_SUCCESS":
            return action.payload;

        default:
            return state;
    }
}