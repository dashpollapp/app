import { CREATE_POLL_SUCCESS, LOAD_POLLS_HOME, LOAD_POLLS_HOME_SUCCESS, LOAD_POLLS_HOME_FAIL } from "../constants/actionTypes";
import { uniqueArray, store } from "../utils";


let date1 = new Date();
let date2 = new Date();


const mockPolls = [
    {
        heading: "AB HIER MOCK Titel der Umfrage",
        author: {
            username: "Koni"
        },
        polltype: 11,
        createdAt: new Date(date1.setMinutes(date1.getMinutes() - 32))
    },
    {
        heading: "Umfrage von Max",
        author: {
            username: "Max"
        },
        polltype: 11,
        createdAt: new Date(date2.setHours(date2.getHours() - 2))
    },
    {
        _id: "aaa",
        author: {
            _id: "5b09cd9312574128e4acb285",
            username: "Max",
            fullname: "Dashpoll"
        },
        heading: "Wenn hurensohgn mich heute für ein Social Network entscheiden müsste wäre es...",
        polltype: 20,
        answers: [
            {
                id: 0,
                text: "Twitter"
            },
            {
                id: 1,
                text: "Facebook"
            },
            {
                id: 2,
                text: "Snapchat"
            },
            {
                id: 3,
                text: "Instagram"
            },
        ],
        maxVotes: 1,
        createdAt: "2018-08-12T17:09:30.926Z",
        vote: {
            hasVoted: false,
            totalVotes: 12,
            totalVoter: 12,
            votes: {
                "0": 6,
                "1": 1,
                "2": 3,
                "3": 2
            }
        }
    }

]

export default function (state = { loading: false, polls: { home: mockPolls } }, action) {
    switch (action.type) {

        case CREATE_POLL_SUCCESS:
            return { loading: false, polls: Object.assign(state.polls.home, { ...action.payload.data.poll, author: store.getState().user.user }) };

        case LOAD_POLLS_HOME:

            return { ...state, loading: true }

        case LOAD_POLLS_HOME_SUCCESS:
            let uniquePolls = uniqueArray([...action.payload.data, ...state.polls.home])

            console.log(uniquePolls);
            return { loading: false, polls: { ...state.polls, home: uniquePolls } }

        case LOAD_POLLS_HOME_FAIL:
            return { ...state, loading: false }

        default:
            return state;
    }
}

// TODO: Polls reducer in mehrere dateien aufteilen und in combineReducers als object einzeln machen halt kp kanns net erklären ~max 2018