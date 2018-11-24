import { VOTE_FROM_HOME, VOTE_FROM_USER, VOTE_FROM_HOME_SUCCESS, VOTE_FROM_HOME_FAIL } from "../constants/actionTypes";
import { httpClient } from "../utils";

export default function (initiator, poll, choice) {

    let method = determineMethod(poll, choice); // <- muss vor VOTE_FROM_HOME aufgerufen werden, wegen poll obj mutate

    return dispatch => {

        dispatch({ type: VOTE_FROM_HOME, payload: { poll, choice } });

        httpClient.request({
            url: "/vote",
            method,
            data: {
                pollid: poll._id,
                choice
            }
        }).then(res => {
            dispatch({ type: VOTE_FROM_HOME_SUCCESS, payload: { poll, choice } })
        }).catch(err => console.log(err) & dispatch({ type: VOTE_FROM_HOME_FAIL, err }));


    }
}

function determineMethod(poll, choice) {
    switch (poll.polltype) {
        case 10:
            return poll.vote.hasVoted ? "delete" : "post";
        case 11:
            if (typeof poll.vote.hasVoted === typeof 1) {
                return (choice === poll.vote.hasVoted) ? "delete" : "post";
            } else {
                return "post";
            }
        default:
            return "post";
    }
}