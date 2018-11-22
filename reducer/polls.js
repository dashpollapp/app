import { CREATE_POLL_SUCCESS } from "../constants/actionTypes";

let date1 = new Date();
let date2 = new Date();


const mockPolls = [
    {
        heading: "Titel der Umfrage",
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
        _id: "5b7069ca3a100f53e49bda7c",
        author: {
            _id: "5b09cd9312574128e4acb285",
            username: "Max",
            fullname: "Dashpoll"
        },
        heading: "Wenn ich mich heute für ein Social Network entscheiden müsste wäre es...",
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

export default function (state = { loading: false, polls: mockPolls }, action) {
    switch (action.type) {

        case CREATE_POLL_SUCCESS:
            return { loading: false, polls: [{ ...action.payload.data.poll, author: { username: "yoMax" } }, ...state.polls] };

        default:
            return state;
    }
}
