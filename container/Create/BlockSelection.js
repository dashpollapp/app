import React from "react";
import { TouchableOpacity, Text, View, ScrollView, Image } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { createBlocks, pc, css } from "./Style";
import { create_poll_change_polltype } from "../../actions";
import * as screenNames from "../../constants/screenNames";

class Types extends React.Component {

    _handleTypeChange(type) {
        this.props.navigation.navigate(screenNames.CREATEPOLL)
        this.props.create_poll_change_polltype(type);

    }

    render() {
        return (
            <View style={createBlocks.box}>
                <ScrollView style={createBlocks.scroll}>

                    <Text style={createBlocks.h1}>Blocks</Text>
                    <Text style={createBlocks.h2}>Wähle mehrere Blocks aus und kombiniere sie.</Text>


                    <TouchableOpacity
                        onPress={() => {
                            this._handleTypeChange(0);
                        }}
                        style={createBlocks.item}
                    >
                        <View style={createBlocks.imageBox}>
                            <Image source={require("../../assets/img/create/no.png")} style={createBlocks.image} />
                        </View>
                        <View style={createBlocks.info}>
                            <Text style={pc.polltypeName}>Kein Block</Text>
                            <Text style={pc.polltypeDescription}>Benutzer haben keine möglichkeit zu interagieren.</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => {
                            this._handleTypeChange(20);
                        }}
                        style={createBlocks.item}
                    >
                        <View style={createBlocks.imageBox}>
                            <Image source={require("../../assets/img/create/classic.png")} style={createBlocks.image} />
                        </View>
                        <View style={createBlocks.info}>
                            <Text style={pc.polltypeName}>Klassische Umfrage</Text>
                            <Text style={pc.polltypeDescription}>Verschiede Antwortmöglichkeiten als Text.</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this._handleTypeChange(11);
                        }}
                        style={createBlocks.item}
                    >
                        <View style={createBlocks.imageBox}>
                            <Image source={require("../../assets/img/create/thumbs.png")} style={createBlocks.image} />
                        </View>
                        <View style={createBlocks.info}>
                            <Text style={pc.polltypeName}>Likes & Dislikes</Text>
                            <Text style={pc.polltypeDescription}>Benutzer können dein Beitrag Liken oder Disliken.</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this._handleTypeChange(10);
                        }}
                        style={createBlocks.item}
                    >
                        <View style={createBlocks.imageBox}>
                            <Image source={require("../../assets/img/create/like.png")} style={createBlocks.image} />
                        </View>
                        <View style={createBlocks.info}>
                            <Text style={pc.polltypeName}>Gefällt mir</Text>
                            <Text style={pc.polltypeDescription}>Wähle ein Bild aus deiner Galerie.</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this._handleTypeChange(0);
                        }}
                        style={createBlocks.item}
                    >
                        <View style={createBlocks.imageBox}>
                            <Image source={require("../../assets/img/create/image.png")} style={createBlocks.image} />
                        </View>
                        <View style={createBlocks.info}>
                            <Text style={pc.polltypeName}>Bild</Text>
                            <Text style={pc.polltypeDescription}>Benutzer können dein Beitrag nur Liken.</Text>
                        </View>
                    </TouchableOpacity>


<TouchableOpacity
                        onPress={() => {
                            this._handleTypeChange(0);
                        }}
                        style={createBlocks.item}
                    >
                        <View style={createBlocks.imageBox}>
                            <Image source={require("../../assets/img/create/song.png")} style={createBlocks.image} />
                        </View>
                        <View style={createBlocks.info}>
                            <Text style={pc.polltypeName}>Song</Text>
                            <Text style={pc.polltypeDescription}>Benutzer können dein Beitrag nur Liken.</Text>
                        </View>
                    </TouchableOpacity>


<TouchableOpacity
                        onPress={() => {
                            this._handleTypeChange(0);
                        }}
                        style={createBlocks.item}
                    >
                        <View style={createBlocks.imageBox}>
                            <Image source={require("../../assets/img/create/yt.png")} style={createBlocks.image} />
                        </View>
                        <View style={createBlocks.info}>
                            <Text style={pc.polltypeName}>YouTube-Video</Text>
                            <Text style={pc.polltypeDescription}>Benutzer können dein Beitrag nur Liken.</Text>
                        </View>
                    </TouchableOpacity>


                    {/*
                    Bild
                    Wähle ein Bild aus deiner Galerie.

                    Song
                    Nutzer können 30sek eines Songs hören.

                    YouTube-Video
                    Fügt ein YouTube Video zu deinem Beitrag hinzu.

                
                    */}



                    {/*=Navbar unten*/}
                    <TouchableOpacity>
                        <View style={createBlocks.button}>
                            <Text style={createBlocks.buttonText}>Block vorschlagen</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>

            </View>
        );
    }
}

Types.propTypes = {
    navigation: PropTypes.object.isRequired,
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
