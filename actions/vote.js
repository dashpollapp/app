import { VOTE_FROM_HOME, VOTE_FROM_USER, VOTE_FROM_HOME_SUCCESS, VOTE_FROM_HOME_FAIL } from "../constants/actionTypes";
import { httpClient } from "../utils";

export default function (initiator, poll, choice) {
    return dispatch => {
        dispatch({ type: VOTE_FROM_HOME, payload: { poll, choice } });
        httpClient.request({
            url: "/vote",
            method: determineMethod(poll, choice),
            data: {
                pollid: poll._id,
                choice
            }
        }).then(res => {
            dispatch({ type: VOTE_FROM_HOME_SUCCESS, payload: { poll, choice } })
        }).catch(err => console.log(err) & dispatch({ type: VOTE_FROM_HOME_FAIL, err }));
    }

    /*return {
        type: initiator === "home" ? VOTE_FROM_HOME : VOTE_FROM_USER,
        payload: {
            poll,
            choice,
            request: {
                url: "/vote",
                method: determineMethod(poll, choice),
                data: {
                    pollid: poll._id,
                    choice
                }
            }
        }
    }*/
}

function determineMethod(poll, choice) {

    switch (poll.polltype) {
        case 10:
            return poll.vote.hasVoted ? "delete" : "post";
        case 11:
            if (poll.vote.hasVoted) {
                if (choice === poll.vote.hasVoted) return "delete";
                return "post";
            } else {
                return "post";
            }
        default:
            return "post";
    }
}