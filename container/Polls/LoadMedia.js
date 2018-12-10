import React, { Component, } from "react";
import { Text, WebView } from "react-native";
import PropTypes from "prop-types";
import TestImg from "../../assets/img/post/test.png";
import s from "./PollStyle"; 

class PollTypes extends Component {
    
    render() {

        let poll = this.props.poll;

        switch(poll.media.type) {

            case "image":
                return <Image style={s.image} source={TestImg}/>

            case "youtube":
                return <WebView source={{uri: "https://www.youtube.com/embed/" + poll.media.uri}} scrollEnabled={false} style={s.image} />

            case "spotify":
                return <WebView source={{uri: "https://open.spotify.com/embed/track/" + poll.media.uri}} scrollEnabled={false} style={s.spotify} />

        }
    }
}

PollTypes.propTypes = {
    poll: PropTypes.object.isRequired,
}

export default PollTypes;
