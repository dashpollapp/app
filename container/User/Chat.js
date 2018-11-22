import { View, Text } from "react-native";
import React from "react";

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View>
                <Text style={{fontFamily: "GS2", textAlign: "center", paddingVertical: 12, fontSize: 16, color: "#666"}}>Geplant für 2019</Text>
            </View>
        );
    }
}

export default Chat;
