import { VOTE_FROM_HOME, VOTE_FROM_HOME_SUCCESS, VOTE_FROM_HOME_FAIL, CREATE_POLL_SUCCESS, LOAD_POLLS_HOME, LOAD_POLLS_HOME_SUCCESS, LOAD_POLLS_HOME_FAIL } from "../constants/actionTypes";
import { uniqueArray, store } from "../utils";

export default function (state = { loading: false, polls: { home: [] } }, action) {
    switch (action.type) {

        case CREATE_POLL_SUCCESS:
            return { loading: false, polls: Object.assign(state.polls.home, { ...action.payload.data.poll, author: store.getState().user.user }) };

        case LOAD_POLLS_HOME:

            return { ...state, loading: true }

        case LOAD_POLLS_HOME_SUCCESS:
            let uniquePolls = uniqueArray([...action.payload.data, ...state.polls.home])
            return { loading: false, polls: { ...state.polls, home: uniquePolls } }

        case LOAD_POLLS_HOME_FAIL:
            return { ...state, loading: false }

        case VOTE_FROM_HOME:
            const { poll, choice } = action.payload;
            const indexOfPoll = state.polls.home.map(e => e._id).indexOf(poll._id);
            switch (poll.polltype) {
                case 10:
                    poll.vote.hasVoted = !poll.vote.hasVoted;
                    poll.vote.totalVotes = poll.vote.hasVoted ? poll.vote.totalVotes + 1 : poll.vote.totalVotes - 1
                    break;
                case 11:

                    let method;
                    if (typeof poll.vote.hasVoted === typeof 1) {
                        method = (poll.vote.hasVoted === choice) ? "delete" : "post";
                    } else {
                        method = "post";
                    }

                    //if(!(typeof poll.vote.hasVoted === typeof 1) || (typeof poll.vote.hasVoted === typeof 1 && poll.vote.hasVoted !== choice))
                    if (method === "post") {
                        if (typeof poll.vote.hasVoted === typeof 1) {
                            if (poll.vote.hasVoted === 1) {
                                poll.vote.dislikes++;
                                poll.vote.likes--;
                            } else {
                                poll.vote.likes++;
                                poll.vote.dislikes--;
                            }
                            poll.vote.hasVoted = choice;
                        } else {
                            poll.vote.hasVoted = choice;
                            if (choice === 1) { poll.vote.likes++; } else { poll.vote.dislikes++; }
                        }
                    } else {
                        poll.vote.hasVoted = false;
                        if (choice === 1) { poll.vote.likes--; } else { poll.vote.dislikes--; }
                    }
                    break;

            }
            state.polls.home[indexOfPoll] = poll;
            return { ...state, loading: true }

        case VOTE_FROM_HOME_SUCCESS:

            return { ...state, loading: false }

        case VOTE_FROM_HOME_FAIL:
            return { ...state, loading: false }

        default:
            return state;
    }
}

// TODO: Polls reducer in mehrere dateien aufteilen und in combineReducers als object einzeln machen halt kp kanns net erklären ~max 2018