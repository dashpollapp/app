import { actionTypes } from "../constants";

import uniqueArray from "../utils/uniqueIdArray";

const initialState = { loading: false, polls: { home: [] } }

export default function (state = initialState, action) {
    switch (action.type) {

        case actionTypes.CREATE_POLL_SUCCESS:
            return { loading: !state.loading, polls: { ...state.polls, home: [action.payload.poll, ...state.polls.home] } };

        case actionTypes.LOAD_POLLS_HOME:

            return { ...state, loading: true }

        case actionTypes.LOAD_POLLS_HOME_SUCCESS:
            if (Array.isArray(action.payload.data)) {
                let uniquePolls = action.payload.refresh
                    ? uniqueArray([...action.payload.data, ...state.polls.home])
                    : uniqueArray([...state.polls.home, ...action.payload.data])
                return { loading: false, polls: Object.assign(state.polls, { home: uniquePolls }) }
            }
            return state;

        case actionTypes.LOAD_POLLS_HOME_FAIL:
            return { ...state, loading: false }

        case actionTypes.VOTE_FROM_HOME:
            const { poll, choice } = action.payload;
            const indexOfPoll = state.polls.home.map(e => e._id).indexOf(poll._id);
            let method;
            switch (poll.polltype) {
                case 10:
                    poll.vote.hasVoted = !poll.vote.hasVoted;
                    poll.vote.totalVotes = poll.vote.hasVoted ? poll.vote.totalVotes + 1 : poll.vote.totalVotes - 1
                    break;
                case 11:

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
                case 20:
                    if (!poll.vote.hasVoted) {
                        method = "post";
                    } else {
                        if (poll.vote.hasVoted.includes(choice)) { method = "delete" } else { method = "post" }
                    }

                    if (method === "post") {
                        if (poll.maxVotes === 1) {
                            //Logik für Umfragen mit einer Stimme
                            if (typeof poll.vote.hasVoted === typeof [] && poll.vote.hasVoted.length === 1) {
                                //Stimme ändern
                                poll.vote.votes[poll.vote.hasVoted[0]]--;
                                poll.vote.hasVoted = [choice];
                                poll.vote.votes[choice]++;
                            } else {
                                //Erste Stimme
                                poll.vote.hasVoted = [choice];
                                poll.vote.totalVoter++;
                                poll.vote.totalVotes++;
                                poll.vote.votes[choice]++;
                            }
                        } else {
                            //Logik für Umfragen mit mehreren Stimmen
                            if (poll.vote.hasVoted) {
                                poll.vote.hasVoted = [...poll.vote.hasVoted, choice]
                            } else {
                                poll.vote.hasVoted = [choice];
                                poll.vote.totalVoter++;
                            }
                            poll.vote.totalVotes++;
                            poll.vote.votes[choice]++;
                        }
                    } else {
                        poll.vote.hasVoted = poll.vote.hasVoted.filter(c => c !== choice);
                        if (Array.isArray(poll.vote.hasVoted) && poll.vote.hasVoted.length === 0) {
                            poll.vote.hasVoted = false;
                            poll.vote.totalVoter--;
                        }
                        poll.vote.totalVotes--;
                        poll.vote.votes[choice]--;
                    }

            }
            state.polls.home[indexOfPoll] = poll;
            return { ...state, loading: true }

        case actionTypes.VOTE_FROM_HOME_SUCCESS:

            return { ...state, loading: false }

        case actionTypes.VOTE_FROM_HOME_FAIL:
            return { ...state, loading: false }

        case actionTypes.AUTH_LOGOUT:
        case actionTypes.AUTH_LOGOUT_ALL_SUCCESS:
            return initialState;

        default:
            return state;
    }
}

// TODO: Polls reducer in mehrere dateien aufteilen und in combineReducers als object einzeln machen halt kp kanns net erklären ~max 2018