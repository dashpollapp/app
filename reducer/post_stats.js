const initialState = {}

export default function (state = initialState, action) {

    switch (action.type) {
        case "POST_STATS_SUCCESS":
            return action.payload;

        default:
            return state;
    }
}