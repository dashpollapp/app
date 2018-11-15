import React from "react";
import { Alert, TouchableOpacity, Text, View, ScrollView, TextInput, Image, } from "react-native";
import { LinearGradient } from "expo";
import PropTypes from 'prop-types';

import { Classic, Like, Normal } from "./PollTypes";
import { connect } from "react-redux";
import { pc, css } from "./Style";

//Images
import CamImg from "../../assets/img/media/cam.png";
import SpotifyImg from "../../assets/img/media/spotify.png";
import YoutubeImg from "../../assets/img/media/youtube.png";

class CreatePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: "",
            text: ""
        };
    }

    render() {
        let currentPolltype;

        switch (this.props.selectedPollType) {
            case 11:
                currentPolltype = <Like />;
                break;
            case 10:
                currentPolltype = <Normal />;
                break;
            case 21:
                currentPolltype = <Classic />;
                break;
            default:
                break;
        }

        return (
            <View style={{ flex: 1 }}>
                {/*=Navbar unten*/}
                {/*linear-Gradient border radius bug: colors={['#e8f5f7', '#e5fcef']} start={[0, 1]} end={[1, 1]*/}
                <View style={css.bottom}>
                    <TouchableOpacity>
                        <Text style={pc.textContinue}>ABBRECHEN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={pc.textPublic}>VERÖFFENTLICHEN</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={pc.create}>
                    {/*Titel*/}
                    <TextInput
                        multiline
                        textAlignVertical={"top"}
                        underlineColorAndroid={"transparent"}
                        style={pc.inputTitle}
                        placeholder={"Titel eingeben"}
                        placeholderTextColor={"#222"}
                        onChangeText={heading => this.setState({ heading })}
                    />

                    {/*Beschreibung*/}
                    <TextInput
                        multiline
                        textAlignVertical={"top"}
                        underlineColorAndroid={"transparent"}
                        style={pc.inputDescription}
                        placeholder={"Du kannst eine Beschreibung eingeben"}
                        placeholderTextColor={"#938f8f"}
                        onChangeText={text => this.setState({ text })}
                    />

                    {/*Medien (vorläufig)*/}
                    <LinearGradient
                        style={pc.addMedia}
                        colors={["#b5d3e5", "#c1f4c9", "#eae7a6"]}
                        start={[0, 0.9]}
                        end={[1, 1]}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                Alert.alert("Cam");
                            }}
                        >
                            <Image style={pc.mediaItem} source={CamImg} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                this.createPoll();
                            }}
                        >
                            <Image style={pc.mediaItem} source={SpotifyImg} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                Alert.alert("Youtube");
                            }}
                        >
                            <Image style={pc.mediaItem} source={YoutubeImg} />
                        </TouchableOpacity>
                    </LinearGradient>

                    {currentPolltype}

                    <View
                        style={css.navTopPush}
                        source={{ uri: "https://pbs.twimg.com/profile_images/830204661474979841/qsnoO3lJ_400x400.jpg" }}
                    />
                </ScrollView>
            </View>
        );
    }
}

CreatePage.propTypes = {
    selectedPollType: PropTypes.number
}

const mapStateToProps = state => {
    return {
        selectedPollType: state.create_poll.polltype
    }
}



export default connect(mapStateToProps)(CreatePage);
