{ (this.state.options === item._id) ? <Option poll={item} /> : null }
￼                                 { (this.state.options === item._id) ? <Option poll={item} navigation={this.props.navigation} /> : null }
￼
￼                                 <View style
    import { LOAD_USER_PROFILE, SAVE_USER_PROFILE, SAVE_USER_PROFILE_FAIL} from "../constants/actionTypes";

export default function (userId) {
    const httpClient = require("../utils/store").httpClient;
    return dispatch => {
        dispatch({ type: LOAD_USER_PROFILE });
        httpClient.request({
            url: `/user/${userId}`,
            method: "GET",
        }).then(res => {
            dispatch({ type: SAVE_USER_PROFILE, payload: { user: res.data } })
        }).catch(err => dispatch({ type: SAVE_USER_PROFILE_FAIL }));

    }

}
