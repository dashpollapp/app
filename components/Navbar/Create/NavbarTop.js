import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import PropTypes from "prop-types";

import { css } from "../../../container/Create/Style";
import screenNames from "../../../constants/screenNames";
import nt from "../NavbarTopStyle";

import PlusImg from "../../../assets/img/navbar/top/plus.png";
import BackImg from "../../../assets/img/navbar/top/back.png";

class NavbarTop extends React.Component {
    constructor(props) {
        super(props);
        console.log(screenNames.HOME)
    }

    render() {
        return (
            <View>
                <View style={nt.box}>

                    <TouchableOpacity>
                        <Image
                            style={0 === 0 ? css.myPB : css.navTopBack}
                            source={
                                0 === 0
                                    ? { uri: "https://pbs.twimg.com/profile_images/830204661474979841/qsnoO3lJ_400x400.jpg" }
                                    : BackImg
                            }
                        />
                    </TouchableOpacity>

                    <View style={css.navTopCenter}>
                        <TouchableOpacity>
                            <Text style={css.windowTitle}>{0 === 0 ? "Beitrag erstellen" : "Typ wählen"}</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                        <Image style={[css.create, css.close]} source={PlusImg} />
                    </TouchableOpacity>
                </View>
                <View style={nt.push}></View>
            </View>
        );
    }
}

NavbarTop.propTypes = {
    navigation: PropTypes.object.isRequired
}

export default NavbarTop;

/*
import React from "react";
import PropTypes from "prop-types";
import { css } from "../../../container/User/Style";
import { View, TouchableOpacity, Image, Text } from "react-native";

import BackImg from "../../../assets/img/navbar/top/back.png";
import KoniImg from "../../../assets/img/koni.png";

export default class UserNavbarTop extends React.Component {
    render() {
        return (
            <View style={css.navTop} >
                <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                    <Image style={css.back} source={BackImg} />
                </TouchableOpacity>

                <View style={css.navTopCenter}>
                    <Text style={css.windowTitle}>{this.props.navigation.state.params.user}</Text>
                </View>
                <Image style={css.myPB} source={KoniImg} />
            </View>)
    }
}
UserNavbarTop.propTypes = {
    navigation: PropTypes.object.isRequired,
}*/