import React from "react";
import { TouchableOpacity, Text, View, ScrollView, Image } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { pcSelect, pc, css } from "./Style";
import { create_poll_change_polltype } from "../../actions";
import * as screenNames from "../../constants/screenNames";

class Types extends React.Component {

    _handleTypeChange(type) {
        this.props.create_poll_change_polltype(type);
        this.props.navigation.navigate(screenNames.CREATEPOLL)
    }

    render() {
        return (
            <View style={css.body}>
                <ScrollView style={pcSelect.scroll}>
                    <TouchableOpacity
                        onPress={() => {
                            this._handleTypeChange(0);
                        }}
                        style={pcSelect.item}
                    >
                        <View style={pcSelect.imageBox}>
                            <Image source={require("../../assets/img/create/no.png")} style={pcSelect.image} />
                        </View>
                        <View style={pcSelect.info}>
                            <Text style={pc.polltypeName}>Normale Post</Text>
                            <Text style={pc.polltypeDescription}>Benutzer haben keine möglichkeit Abzustimmen.</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this._handleTypeChange(20);
                        }}
                        style={pcSelect.item}
                    >
                        <View style={pcSelect.imageBox}>
                            <Image source={require("../../assets/img/create/classic.png")} style={pcSelect.image} />
                        </View>
                        <View style={pcSelect.info}>
                            <Text style={pc.polltypeName}>Klassische Umfrage:</Text>
                            <Text style={pc.polltypeDescription}>Verschiede Antwortmöglichkeiten als Text.</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this._handleTypeChange(11);
                        }}
                        style={pcSelect.item}
                    >
                        <View style={pcSelect.imageBox}>
                            <Image source={require("../../assets/img/create/thumbs.png")} style={pcSelect.image} />
                        </View>
                        <View style={pcSelect.info}>
                            <Text style={pc.polltypeName}>Likes & Dislikes:</Text>
                            <Text style={pc.polltypeDescription}>Benutzer können dein Beitrag Liken oder Diliken</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this._handleTypeChange(10);
                        }}
                        style={pcSelect.item}
                    >
                        <View style={pcSelect.imageBox}>
                            <Image source={require("../../assets/img/create/like.png")} style={pcSelect.image} />
                        </View>
                        <View style={pcSelect.info}>
                            <Text style={pc.polltypeName}>Gefällt mir:</Text>
                            <Text style={pc.polltypeDescription}>Benutzer können dein Beitrag nur Liken.</Text>
                        </View>
                    </TouchableOpacity>

                    <View
                        style={css.navTopPush}
                        source={{ uri: "https://i.pinimg.com/originals/c6/a2/89/c6a289648d689ebf779f5c11b2699ab5.jpg" }}
                    />
                </ScrollView>

                {/*=Navbar unten*/}
                <View style={css.bottom}>
                    <TouchableOpacity style={css.bottomText}>
                        <Text style={pc.textContinue}>TYP VORSCHLAGEN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

Types.propTypes = {
    create_poll_change_polltype: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
    return {
        create_poll_change_polltype: polltype => {
            dispatch(create_poll_change_polltype(polltype))
        }
    }
}

export default connect(null, mapDispatchToProps)(Types);
