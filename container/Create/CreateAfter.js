import React from "react";
import { TouchableOpacity, Text, View, ScrollView, Image, } from "react-native";
import { ca } from "./CreateAfterStyle"; //Create After Style
import { connect } from "react-redux";

//Images Crate After
import CopyImg from "../../assets/img/create/copy.png";

import PropTypes from "prop-types";

import * as screenNames from '../../constants/screenNames';
import { CREATE_POLL_INITIALSTATE } from "../../constants/actionTypes";

import WhatsappImg from "../../assets/img/create/whatsapp.png";
import SnapchatImg from "../../assets/img/create/snapchat.png";
import InstaImg from "../../assets/img/create/insta.png";
import DashchatImg from "../../assets/img/media/spotify.png"; // ACHTUNG ERSMAL SPOTiFY


class CreateAfter extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#fff", padding: 8, }}>

                <ScrollView style={ca.box}>

                    <Text style={ca.h1}>Cooler Beitrag!</Text>
                    <Text style={ca.h2}>Teile ihn doch mit Freunden.</Text>


                    <TouchableOpacity>
                        <View style={ca.copyBox}>
                            <Text style={ca.postURL}>ili.pw/{this.props.poll.heading}</Text>
                            <Image style={ca.copyImg} source={CopyImg} />
                        </View>
                    </TouchableOpacity>


                    <View style={ca.shareBox}>
                        <TouchableOpacity>
                            <View style={ca.shareItem}>
                                <Image style={ca.shareItemImg} source={DashchatImg} />
                                <Text style={ca.shareItemText}>Chat</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={ca.shareItem}>
                                <Image style={[ca.shareItemImg, { opacity: 0.5 }]} source={WhatsappImg} />
                                <Text style={ca.shareItemText}>Whatsapp</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={ca.shareItem}>
                                <Image style={[ca.shareItemImg, { opacity: 0.5 }]} source={SnapchatImg} />
                                <Text style={ca.shareItemText}>Snapchat</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={ca.shareItem}>
                                <Image style={[ca.shareItemImg, { opacity: 0.5 }]} source={InstaImg} />
                                <Text style={ca.shareItemText}>Insta Story</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate(screenNames.HOME);
                        this.props.dispatch({ type: CREATE_POLL_INITIALSTATE }) // <- des mach ich noch sauber, lg max

                    }}>
                        <View style={ca.skipButton}>
                            <Text style={ca.skipButtonText}>Überspringen</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>

            </View >
        );
    }
}

CreateAfter.propTypes = {
    navigation: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
}

export default connect()(CreateAfter);
