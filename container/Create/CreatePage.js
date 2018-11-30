import React from "react";
import { Alert, TouchableOpacity, Text, View, ScrollView, TextInput, Image, } from "react-native";
import { LinearGradient } from "expo";
import PropTypes from 'prop-types';

import { Classic, Like, Normal } from "./PollTypes";
import { connect } from "react-redux";
import { create, pc, css } from "./Style"; //(create ist die neue Style)
import { create_poll } from "../../actions";
import * as screenNames from "../../constants/screenNames";

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

    componentDidUpdate() {
        this.props.screenProps(this.state.heading, this.state.text);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.heading !== nextState.heading || this.state.text !== nextState.text) return true;
        if (this.props.selectedPollType !== nextProps.selectedPollType) return true;
        return false;
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
            case 20:
                currentPolltype = <Classic />;
                break;
            default:
                break;
        }

        return (
            <View style={{ flex: 1, backgroundColor: "#fff", padding: 8, height: "100%" }}>

                <ScrollView style={[pc.create]}>
                    {/*Titel*/}
                    <TextInput
                        multiline
                        textAlignVertical={"top"}
                        underlineColorAndroid={"transparent"}
                        style={create.inputTitle}
                        placeholder={"Titel"}
                        placeholderTextColor={"#111"}
                        onChangeText={heading => this.setState({ heading })}
                    />

                    {/*Beschreibung*/}
                    <TextInput
                        multiline
                        textAlignVertical={"top"}
                        underlineColorAndroid={"transparent"}
                        style={create.inputDescription}
                        placeholder={"Du kannst eine Beschreibung eingeben"}
                        placeholderTextColor={"#938f8f"}
                        onChangeText={text => this.setState({ text })}
                    />

                    <TouchableOpacity onPress={() => this.props.navigation.navigate(screenNames.POLLTYPES)} >
                        <View>
                            <Text style={create.polltypeText}>+ Block hinzufügen (nice)</Text>
                        </View>
                    </TouchableOpacity>

                    {currentPolltype}

                </ScrollView>
            </View >
        );
    }
}

CreatePage.propTypes = {
    navigation: PropTypes.object.isRequired,
    selectedPollType: PropTypes.number
}

const mapStateToProps = state => {
    return {
        selectedPollType: state.create_poll.polltype
    }
}

export default connect(mapStateToProps)(CreatePage);
