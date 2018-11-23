import { View, Text, ScrollView } from "react-native";
import React from "react";

class AccountSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={[s.box]}>
                <ScrollView> 
                    <TouchableOpacity onPress={() => this.navigation("AccountSettings")} style={s.item}>
                        <Text style={s.name}>Accounteinllungen</Text>
                        <Text style={s.description} numberOfLines={1}>
                            Accounts verwalten, Abmelden, Account Löschen
                        </Text>
                    </TouchableOpacity>
                </ScrollView> 
            </View>
        );
    }
}

export default AccountSettings;
