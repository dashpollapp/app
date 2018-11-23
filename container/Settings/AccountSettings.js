import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

import {s} from './SettingsStyle';

class AccountSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={[s.box]}>
                <ScrollView> 
                    <Text style={s.name}>Accounteinllungen</Text>
                </ScrollView> 
            </View>
        );
    }
}

export default AccountSettings;
