import React from "react";

import { Text, WebView, Linking } from "react-native";
import PropTypes from "prop-types";

class Description extends React.Component {

    constructor(props) {
        super(props);
    }

    checkUrl() {

        let {
            text,
            showUrl,
            showUsername,
            showHashtag,
            urlClick,
            usernameClick,
            hashtagClick,
            urlStyle,
            usernameStyle,
            hashtagStyle
        } = this.props;

        if ((typeof text) === "undefined") return;

        let urlRegex = /\b^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&"\(\)\*\+,;=.]+$/gi;
        let usernameRegex = /\B\@\w\w+\b/g;
        let hashtagRegex = /\B\#\w\w+\b/g;

        let splitText = text.split(/\s/);

        var contents = splitText.map(function (e, i) {

            var separator = i < (splitText.length - 1) ? " " : "";

            if (e.match(usernameRegex) && showUsername) {
                return <Text key={i.toString()} style={usernameStyle} onPress={() => usernameClick(e)}>{e}{separator}</Text>
            }
            else if (e.match(urlRegex) && showUrl) {
                return <Text key={i.toString()} style={urlStyle} onPress={() => urlClick(e)}>{e}{separator}</Text>
            }
            else if (e.match(hashtagRegex) && showHashtag) {
                return <Text key={i.toString()} style={hashtagStyle} onPress={() => hashtagClick(e)}>{e}{separator}</Text>
            }
            else {
                return (e + separator)
            }

        })

        return <Text>{contents}</Text>
    }

    render() {

        return (
            <Text style={(this.props.text !== "") ? this.props.style : null}>
                {this.checkUrl()}
            </Text>
        )
    }

}

Description.propTypes = {
    showUrl: PropTypes.bool,
    showUsername: PropTypes.bool,
    showHashtag: PropTypes.bool,
    urlClick: PropTypes.func,
    usernameClick: PropTypes.func,
    hashtagClick: PropTypes.func,
    urlStyle: PropTypes.object,
    usernameStyle: PropTypes.object,
    hashtagStyle: PropTypes.object,
    text: PropTypes.string,
    style: PropTypes.object
}

export default Description;