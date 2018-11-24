import { CREATE_POLL, CREATE_POLL_SUCCESS, CREATE_POLL_FAIL } from "../constants/actionTypes";

export default function ({ heading, polltype, media, answers, maxVotes }, user) {

    return dispatch => {

        dispatch({ type: CREATE_POLL, payload: { poll, choice } });

        httpClient.request({
            url: "/polls",
            method: "post",
            data: {
                heading,
                polltype,
                media,
                answers,
                maxVotes
            }
        }).then(res => {
            dispatch({ type: CREATE_POLL_SUCCESS, payload: { user, poll: res.data.poll } })
        }).catch(err => console.log(err) & dispatch({ type: CREATE_POLL_FAIL, payload: { err } }));


    }
}