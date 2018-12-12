export default function (postId) {
    const httpClient = require("../utils/store").httpClient;
    return dispatch => {
        dispatch({ type: "POST_STATS_SUCCESS", payload: { _id: postId, visits: 10, share: 5}});

        /*
        httpClient.request({
            url: "/stats/" + postId,
            method: "GET",
        }).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
        */
    }

}
