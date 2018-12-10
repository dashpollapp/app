import { actionTypes } from "../constants";

export default function (poll, user) {
    const httpClient = require("../utils/store").httpClient;

    if (poll.polltype === 20) {
        poll.maxVotes = 1;
        poll.answers = poll.answers.filter(answer => answer !== "");
    }

    console.log(poll.answers)
    return dispatch => {

        dispatch({ type: actionTypes.CREATE_POLL });

        httpClient.request({
            url: "/polls",
            method: "post",
            data: {
                ...poll
            }
        }).then(res => {
            dispatch({ type: actionTypes.CREATE_POLL_SUCCESS, payload: { user, poll: { ...res.data.poll, iliUrl: res.data.iliUrl } } })
        }).catch(err => console.log(err) & dispatch({ type: actionTypes.CREATE_POLL_FAIL, payload: { err } }));


    }
}