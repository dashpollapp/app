import { View, Text } from "react-native";
import React from "react";

import S from "./ChatStyle"
import D from "../../assets/style/default"
import FW from "../../assets/style/framework"

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={[D.box]}>

                <ScrollView style={[S.chatScroll]}>
                
                    <View style={[S.chatBox]}>


                    </View>
                </ScrollView>

            </View>
        );
    }
}

export default EditProfile;
