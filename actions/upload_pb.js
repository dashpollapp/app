import { actionTypes } from "../constants";

export default function (image) {

    const store = require("../utils").store;

    return dispatch => {

        dispatch({ type: actionTypes.UPLOAD_PB });

        let uriParts = image.uri.split('.');
        let fileType = uriParts[uriParts.length - 1];

        let formData = new FormData();
        formData.append("photo", {
            uri: image.uri,
            name: `photo.${fileType}`,
            type: `image/${fileType}`,
        });

        let options = {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
                "Authorization": "Bearer " + store.getState().user.user.token
            },
        };

        fetch("https://api.dashpoll.net/pb", options)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: actionTypes.UPLOAD_PB_SUCCESS, payload: responseJson })
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: actionTypes.UPLOAD_PB_FAIL })
            });;

    }

}