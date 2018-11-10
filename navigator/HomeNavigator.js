import { createMaterialTopTabNavigator } from "react-navigation";
import Polls from "../temp/Temp";
import Chat from "../temp/Temp";
import * as screenName from "../constants/screenNames";
import React from "react";
import { View, Image, Dimensions } from "react-native";

import chatImg from "../assets/img/navbar/bottom/chat_off.png";
import pollImg from "../assets/img/navbar/bottom/poll.png";

import NavbarTop from "../components/Navbar/NavbarTop";

const Navigator = createMaterialTopTabNavigator(
    {
        [screenName.CHAT]: {
            screen: Chat,
            navigationOptions: {
                tabBarIcon: () => <Image style={{ height: 26, width: 26 }} source={chatImg} />
            }
        },
        [screenName.POLLS]: {
            screen: Polls,
            navigationOptions: {
                tabBarIcon: () => <Image style={{ height: 26, width: 26 }} source={pollImg} />
            }
        },

    },
    {
        headerMode: "none",
        initialRouteName: screenName.POLLS,
        tabBarPosition: "bottom",
        swipeEnabled: true,
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            iconStyle: {
                height: 26,
                width: 26
            },
            indicatorStyle: {
                marginTop: -4,
                height: 12,
                width: Dimensions.get('window').width / 2 - 16,
                marginLeft: (Dimensions.get('window').width * 0.045),
                backgroundColor: "#000",
                borderRadius: 2,
                position: "absolute",
                bottom: -8,
            },

            style: {
                shadowOpacity: 0.1,
                shadowRadius: 2,
                shadowOffset: {
                    height: 1,
                    width: 0
                },
                shadowColor: '#111',
                backgroundColor: "#fff",
                borderTopWidth: 1,
                borderColor: "#ddd",
                elevation: 5,
                //flex: 1,
                //alignItems: "center"


            }
        }
    }
);

export default props => {
    const { navigation } = props;
    return (
        <View style={{ flex: 1 }}>
            <NavbarTop style={{ zIndex: 999 }} navigation={navigation} />
            <Navigator />
        </View>
    )
}


/*class NavbarBottom extends Component {
    render() {
        return (
            <View style={nb.box}>
                <TouchableOpacity style={nb.mainItem}>
                    <Image style={nb.mainItemImg} source={chatImg} />
                </TouchableOpacity>
                <TouchableOpacity style={nb.mainItem}>
                    <Image style={nb.mainItemImg} source={pollImg} />
                </TouchableOpacity>
            </View>*/

/*const style = StyleSheet.create({
    box: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,

        padding: 12,
        flexDirection: "row",

        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        },
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderColor: "#ddd",
    },
    mainItem: {
        flex: 1,
        alignItems: "center"
    },
    mainItemImg: {
        height: 26,
        width: 26
    }
});*/
