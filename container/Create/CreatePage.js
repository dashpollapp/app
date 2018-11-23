import React from "react";
import { Alert, TouchableOpacity, Text, View, ScrollView, TextInput, Image, } from "react-native";
import { LinearGradient } from "expo";
import PropTypes from 'prop-types';

import { Classic, Like, Normal } from "./PollTypes";
import { connect } from "react-redux";
import { create, pc, css } from "./Style"; //(create ist die neue Style)
import { ca } from "./CreateAfterStyle"; //Create After Style
import { create_poll } from "../../actions";
import * as screenNames from "../../constants/screenNames";

//Images
import CamImg from "../../assets/img/media/cam.png";
import SpotifyImg from "../../assets/img/media/spotify.png";
import YoutubeImg from "../../assets/img/media/youtube.png";


//Images Crate After
import CopyImg      from "../../assets/img/create/copy.png";

import WhatsappImg  from "../../assets/img/create/whatsapp.png";
import SnapchatImg  from "../../assets/img/create/snapchat.png";
import InstaImg     from "../../assets/img/create/insta.png";
import DashchatImg  from "../../assets/img/media/spotify.png"; // ACHTUNG ERSMAL SPOTiFY


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
            case 20:
                currentPolltype = <Classic />;
                break;
            default:
                break;
        }

        return (
            <View style={{ flex: 1, backgroundColor: "#fff", padding: 8, }}>
              
                <ScrollView style={ca.box}>
                    
                    <Text style={ca.h1}>Cooler Beitrag!</Text>
                    <Text style={ca.h2}>Teile ihn doch mit Freunden.</Text>


                    <TouchableOpacity>
                        <View style={ca.copyBox}>
                            <Text style={ca.postURL}>ili.pw/dpGt8Fj</Text>
                            <Image style={ca.copyImg} source={CopyImg}/>
                        </View>
                    </TouchableOpacity>


                    <View style={ca.shareBox}>
                        <TouchableOpacity>
                            <View style={ca.shareItem}>
                                <Image style={ca.shareItemImg} source={DashchatImg}/>
                                <Text style={ca.shareItemText}>Chat</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={ca.shareItem}>
                                <Image style={[ca.shareItemImg, {opacity: 0.5}]}  source={WhatsappImg}/>
                                <Text style={ca.shareItemText}>Whatsapp</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={ca.shareItem}>
                                <Image style={[ca.shareItemImg, {opacity: 0.5}]}   source={SnapchatImg}/>
                                <Text style={ca.shareItemText}>Snapchat</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={ca.shareItem}>
                                <Image style={[ca.shareItemImg, {opacity: 0.5}]}   source={InstaImg}/>
                                <Text style={ca.shareItemText}>Insta Story</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                        <View style={ca.skipButton}>
                            <Text style={ca.skipButtonText}>Überspringen</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>






                <ScrollView style={[pc.create, {opacity: 0,}]}>
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
    selectedPollType: PropTypes.number,
    create_poll: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        selectedPollType: state.create_poll.polltype
    }
}

const mapDispatchToProps = dispatch => {
    return {
        create_poll: poll => {
            dispatch(create_poll(poll))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreatePage);
