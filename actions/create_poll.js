import { CREATE_POLL, CREATE_POLL_SUCCESS, CREATE_POLL_FAIL } from "../constants/actionTypes";

export default function (poll, user) {
    const httpClient = require('../utils/store').httpClient;

    if (poll.polltype === 20) {
        poll.maxVotes = 1;
        poll.answers = poll.answers.filter(answer => answer !== "");
    }

    console.log(poll.answers)
    return dispatch => {

        dispatch({ type: CREATE_POLL });

        httpClient.request({
            url: "/polls",
            method: "post",
            data: {
                ...poll
            }
        }).then(res => {
            dispatch({ type: CREATE_POLL_SUCCESS, payload: { user, poll: { ...res.data.poll, iliUrl: res.data.iliUrl } } })
        }).catch(err => console.log(err) & dispatch({ type: CREATE_POLL_FAIL, payload: { err } }));


    }
}