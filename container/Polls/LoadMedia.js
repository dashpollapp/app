import React, { Component, } from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import TestImg from "../../assets/img/post/test.png";
import s from './PollStyle'; 

class PollTypes extends Component {
    
    render() {

        let poll = this.props.poll;

        switch(poll.media.type) {

            case 'image':
                return <Image style={s.image} source={TestImg}/>

            case 'youtube':
                return <Text>Youtube</Text>

            case 'spotify':
                return <Text>Spotify</Text>

        }
    }
}

PollTypes.propTypes = {
    poll: PropTypes.object.isRequired,
}

export default PollTypes;
