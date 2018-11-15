import { CREATE_POLL } from "../constants/actionTypes";

export default function ({ heading, polltype, media, answers, maxVotes }) {
    return {
        type: CREATE_POLL,
        payload: {
            request: {
                url: "/polls",
                method: "POST",
                data: {
                    heading,
                    polltype,
                    media,
                    answers,
                    maxVotes
                }
            }
        }
    }
}