import { actionTypes } from "../constants";

export default function (pb) {
    return dispatch => {
        dispatch({ type: actionTypes.IMAGE_CACHE, payload: { id: pb }});

        Expo.FileSystem.getInfoAsync(Expo.FileSystem.cacheDirectory + pb + ".jpg")
        .then(data => {
            if(data.exists === 1) {
                dispatch({type: actionTypes.IMAGE_CACHE_SUCCESS, payload: { uri: data.uri, id: pb }})
            } else {
                Expo.FileSystem.downloadAsync("https://api.dashpoll.net/pb/" + pb, Expo.FileSystem.cacheDirectory + pb + ".jpg", { md5: true })
                .then(file => {
                    dispatch({type: actionTypes.IMAGE_CACHE_SUCCESS, payload: { uri: file.uri, id: pb}})
                })
            }
        })
    }
}