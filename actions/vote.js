import { actionTypes } from "../constants";

export default function (initiator, poll, choice) {

    const httpClient = require("../utils/store").httpClient;



    let method = determineMethod(poll, choice); // <- muss vor VOTE_FROM_HOME aufgerufen werden, wegen poll obj mutate

    return dispatch => {

        //maxVotes  check -> erstmal so später FIFO
        if (poll.polltype === 20 && poll.maxVotes !== 1 && Array.isArray(poll.vote.hasVoted) && !poll.vote.hasVoted.includes(choice) && poll.maxVotes <= poll.vote.hasVoted.length) {
            console.log("RETURN");
            return;
        };

        dispatch({ type: actionTypes.VOTE_FROM_HOME, payload: { poll, choice } });

        httpClient.request({
            url: "/vote",
            method,
            data: {
                pollid: poll._id,
                choice
            }
        }).then(res => {
            dispatch({ type: actionTypes.VOTE_FROM_HOME_SUCCESS, payload: { poll, choice } })
        }).catch(err => console.log(err) & dispatch({ type: actionTypes.VOTE_FROM_HOME_FAIL, err }));


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
        case 20:
            if (!poll.vote.hasVoted) {
                return "post";
            } else {
                return (poll.vote.hasVoted.includes(choice)) ? "delete" : "post";
            }
        default:
            return "post";
    }
}