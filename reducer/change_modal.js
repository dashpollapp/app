import { 
    CHANGE_MODAL,
} from "../constants/actionTypes";

const initialState = { visible: false };

export default function (state = initialState, action) {
    switch (action.type) {
       
        case CHANGE_MODAL:
            return { visible: action.payload.visible };

        default:
            return state;
    }
}