import React from "react";

import { Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";


class Description extends React.Component {

    constructor(props) {
        super(props);
    }

    //e.match(/\bhttps?:\/\/\S+/gi)
    //e.match(/\bhttp?:\/\/\S+/gi)

    checkUrl = () => {
        let text = this.props.text;
        let urlStyle = this.props.urlStyle;
        let splitText = text.split(/\s/);

        var contents = splitText.map(function(e, i) {

            var separator = i < (splitText.length - 1) ? ' ' : '';

            if(e.match(/\bhttps?:\/\/\S+/gi) || e.match(/\bhttp?:\/\/\S+/gi)) {
                return<Text key={i.toString()} style={urlStyle} onPress={() => console.log(e)}>{e}{separator}</Text>
            } else {return (e + separator)}
        })

        return <Text>{contents}</Text>
    }
    

    render() {
        
        return(
            <Text style={this.props.style}>
                {this.checkUrl()}
            </Text>
        )
    }

}

Description.propTypes = {
    urlStyle: PropTypes.object,
    username: PropTypes.bool,
    hashtag: PropTypes.bool,
    url: PropTypes.bool,
    text: PropTypes.string,
    style: PropTypes.object
}

export default Description;