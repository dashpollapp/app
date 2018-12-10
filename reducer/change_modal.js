import { actionTypes } from "../constants";

const initialState = { visible: false };

export default function (state = initialState, action) {
    switch (action.type) {

        case actionTypes.CHANGE_MODAL:
            const { visible, poll } = action.payload;
            return { visible, poll };

        default:
            return state;
    }
}