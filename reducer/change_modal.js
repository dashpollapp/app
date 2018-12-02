import { 
    CHANGE_MODAL,
} from "../constants/actionTypes";

const initialState = { visible: false };

export default function (state = initialState, action) {
    switch (action.type) {
       
        case CHANGE_MODAL:
            const { visible, poll } = action.payload;
            return { visible, poll };

        default:
            return state;
    }
}