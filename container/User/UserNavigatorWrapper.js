import React from "react";
import { View } from "react-native";
import { css } from "./Style";
import UserTabs from "../../navigator/UserNavigator";
import UserNavbarTop from "../../components/Navbar/User/NavbarTop";
import PropTypes from "prop-types";

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

User.propTypes = {
    navigation: PropTypes.object.isRequired
}


export default User;
