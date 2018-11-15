import { CREATE_POLL_SUCCESS } from "../constants/actionTypes";

let date1 = new Date();
let date2 = new Date();


const mockPolls = [
    {
        heading: "Titel der Umfrage",
        author: {
            username: "Koni"
        },
        createdAt: new Date(date1.setMinutes(date1.getMinutes() - 32))
    },
    {
        heading: "Umfrage von Max",
        author: {
            username: "Max"
        },
        createdAt: new Date(date2.setHours(date2.getHours() - 2))
    },

]

export default function (state = { loading: false, polls: mockPolls }, action) {
    switch (action.type) {

        case CREATE_POLL_SUCCESS:
            return { loading: false, polls: [{ ...action.payload.data.poll, author: { username: "yoMax" } }, ...state.polls] };

        default:
            return state;
    }
}