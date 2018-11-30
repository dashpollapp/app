import { ScrollView } from "react-native";
import React from "react";

import style from '../Polls/PollStyle';
import PollsFlatlist from '../Polls/PollsFlatlist';


class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <ScrollView style={style.box}>
            </ScrollView>
        );
    }
}

export default Posts;
