import { BlurView } from "expo";
import React from "react";
import { BackHandler, Image, Platform, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { css } from "./Style";
import UserTabs from "../../navigator/UserNavigator";
import UserNavbarTop from "../../components/Navbar/User/NavbarTop";

class User extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={css.out}>
                <View style={css.navTopHelp} />
                <View style={css.body}>

                    {/*=Navbar top*/}
                    <UserNavbarTop navigation={this.props.navigation} />

                    <UserTabs
                        initialRouteName={this.props.navigation.state.params.initialRouteName || "Polls"}
                        screenProps={{ rootNavigation: this.props.navigation }}
                    />
                </View>
            </View>
        );
    }
}

export default User;
