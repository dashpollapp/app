import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient, Font, AppLoading } from 'expo';
import PropTypes from 'prop-types';

export default class ChatOverview extends React.Component {

    render() {
        return (
            <View>
                <StatusBar hidden={true} />
                <ScrollView style={css.chats}>

                    {/*▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆  Priority: Ultraaaa Wichtig  ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆*/}
                    <View style={[css.chat, css.chatNew, { borderColor: "#d83a3a", backgroundColor: "#f2dcdc" }]}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("USER", { user: "Max", initialRouteName: "Chat" })}>
                            <View style={css.text}>
                                <Text style={css.name}>Frank Idee</Text>
                                <Text numberOfLines={1} style={css.lastMessage}>Diese nachricht ist so wichtig: awd</Text>
                            </View>
                            <Text style={[css.sendTime, css.sendTimeNew, { color: "#d83a3a" }]}>12:14</Text>
                        </TouchableOpacity>
                    </View>

                    {/*▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆  Priority: Extrem Wichtig  ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆*/}
                    <View style={[css.chat, css.chatNew, { borderColor: "#bf6a35" }]}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>Kaffsuchti</Text>
                            <Text numberOfLines={1} style={css.lastMessage}>Habe vergessen Nudeln aufzuschreiben</Text>
                        </View>
                        <Text style={[css.sendTime, css.sendTimeNew, { color: "#bf6a35" }]}>12:17</Text>
                    </View>

                    {/*▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆  Priority: Wichtig  ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆*/}
                    <View style={[css.chat, css.chatNew, { borderColor: "#bfaf35" }]}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>Max Baier</Text>
                            <Text numberOfLines={1} style={css.lastMessage}>Ey hab noch ein Bug endeckt</Text>
                        </View>
                        <Text style={[css.sendTime, css.sendTimeNew, { color: "#bfaf35" }]}>12:15</Text>
                    </View>


                    {/*▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆  Neue Messageæ  ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆*/}
                    <View style={[css.chat, css.chatNew]}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>Irgendwer</Text>
                            <Text numberOfLines={1} style={css.lastMessage}>Irgendwas</Text>
                        </View>
                        <Text style={[css.sendTime, css.sendTimeNew]}>12:24</Text>
                    </View>

                    {/*▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆  Neue Message  ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆*/}
                    <View style={[css.chat, css.chatNew, { borderColor: "#a3a3a3" }]}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>Kevin</Text>
                            <Text numberOfLines={1} style={[css.lastMessage, css.lastMessageBold, {}]}>Spam wurde erkannt</Text>
                        </View>
                        <Text style={[css.sendTime]}>Blockieren</Text>
                    </View>

                    {/*▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆  Neue Message  ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆*/}
                    <View style={[css.chat, css.chatNew, { borderColor: "#a3a3a3" }]}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>Kevin</Text>
                            <Text numberOfLines={1} style={[css.lastMessage, css.lastMessageBold, {}]}>Wegen Spam blokiert</Text>
                        </View>
                        <Text style={[css.sendTime]}>Rückgängig</Text>
                    </View>





                    <View style={[css.chat, /*css.chatSelected */]}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>Karl der Käfer</Text>
                            <Text numberOfLines={1} style={css.lastMessage}>keine Panik auf der Titanik</Text>
                        </View>
                        <Text style={css.sendTime}>12:12</Text>
                    </View>

                    <View style={css.chat}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>Endomat</Text>
                            <Text numberOfLines={1} style={css.lastMessage}>😂😂</Text>
                        </View>
                        <Text style={css.sendTime}>12:11</Text>
                    </View>

                    {/*▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆  Wetter  ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆*/}
                    <View style={[]}>
                        <LinearGradient style={[css.chat, css.chatWeather]} colors={['#b7e5da', '#a7d8e7']} start={[0, 0]} end={[1, 1]} >
                            <ImageBackground style={css.pb} borderRadius={26} source={require("../../assets/img/pb.jpg")}>
                                <Text numberOfLines={1} style={css.chatWeatherCrad}>18°</Text>
                            </ImageBackground>
                            <View style={css.text}>
                                <Text style={css.name}>Wetter</Text>
                                <Text numberOfLines={1} style={css.lastMessage}><Text style={css.lastMessageBold}>Mittag:</Text> 29°C <Text style={css.lastMessageBold}>Nacht:</Text> 9°C</Text>
                            </View>
                            <Text style={css.sendTime}>weg damit</Text>
                        </LinearGradient>
                    </View>

                    <View style={css.chat}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>187 Straßenband</Text>
                            <Text numberOfLines={1} style={css.lastMessage}>😂😂😂❤</Text>
                        </View>
                        <Text style={css.sendTime}>12:04</Text>
                    </View>

                    <View style={css.chat}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>Maxwell</Text>
                            <Text numberOfLines={1} style={css.lastMessage}>Moin klar</Text>
                        </View>
                        <Text style={css.sendTime}>11:34</Text>
                    </View>

                    {/*▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆  Gruppe  ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆*/}
                    <View style={[css.chat,]}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>Klassengruppe 9F</Text>
                            <Text numberOfLines={1} style={css.lastMessage}><Text style={css.lastMessageBold}>Leon B:</Text> Ich mach das zu 1000% nicht</Text>
                        </View>
                        <Text style={css.sendTime}>10:12</Text>
                    </View>

                    {/*▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆  Note  ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆*/}
                    <LinearGradient colors={['#d6d2cd', '#ccc0a9']} style={[css.chat, css.chatWeather]} start={[0, 1]} end={[1, 1]} >
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>Kalender</Text>
                            <Text numberOfLines={1} style={css.lastMessage}><Text style={css.lastMessageBold}>Fahrschule</Text> in 2 Stunden</Text>
                        </View>
                        <Text style={css.sendTime}>verbergen</Text>
                    </LinearGradient>



                    <View style={css.chat}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>Marie</Text>
                            <Text numberOfLines={1} style={css.lastMessage}>bin gleich zuhause</Text>
                        </View>
                        <Text style={css.sendTime}>Gestern</Text>
                    </View>

                    <View style={[css.chat,]}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>DaggiBee</Text>
                            <Text numberOfLines={1} style={css.lastMessage}>Okey</Text>
                        </View>
                        <Text style={css.sendTime}>Gestern</Text>
                    </View>

                    <View style={css.chat}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>Ufuk Bayraktar</Text>
                            <Text numberOfLines={1} style={css.lastMessage}>?</Text>
                        </View>
                        <Text style={css.sendTime}>Gestern</Text>
                    </View>


                    <View style={[css.chat,]}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>Karl der Käfer</Text>
                            <Text numberOfLines={1} style={css.lastMessage}>Okey</Text>
                        </View>
                        <Text style={css.sendTime}>Gestern</Text>
                    </View>



                    <View style={css.chat}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>Kaffsuchti</Text>
                            <Text numberOfLines={1} style={css.lastMessage}>Ok bin da</Text>
                        </View>
                        <Text style={css.sendTime}>Vorgestern</Text>
                    </View>


                    <View style={[css.chat,]}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>Karl der Käfer</Text>
                            <Text numberOfLines={1} style={css.lastMessage}>Ja</Text>
                        </View>
                        <Text style={css.sendTime}>Vorgestern</Text>
                    </View>

                    <View style={css.chat}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>Endomat</Text>
                            <Text numberOfLines={1} style={css.lastMessage}>Okey</Text>
                        </View>
                        <Text style={css.sendTime}>12:12</Text>
                    </View>

                    <View style={[css.chat, css.chatWeather]}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>187 Straßenband</Text>
                            <Text numberOfLines={1} style={css.lastMessage}>Okey</Text>
                        </View>
                        <Text style={css.sendTime}>12:12</Text>
                    </View>

                    <View style={css.chat}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>Maxwell</Text>
                            <Text numberOfLines={1} style={css.lastMessage}>Okey</Text>
                        </View>
                        <Text style={css.sendTime}>12:12</Text>
                    </View>


                    <View style={[css.chat,]}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>Klassengruppe 9F</Text>
                            <Text numberOfLines={1} style={css.lastMessage}>Okey</Text>
                        </View>
                        <Text style={css.sendTime}>12:12</Text>
                    </View>

                    <View style={css.chat}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>Marie</Text>
                            <Text numberOfLines={1} style={css.lastMessage}>Okey</Text>
                        </View>
                        <Text style={css.sendTime}>12:12</Text>
                    </View>

                    <View style={[css.chat,]}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>DaggiBee</Text>
                            <Text numberOfLines={1} style={css.lastMessage}>Okey</Text>
                        </View>
                        <Text style={css.sendTime}>12:12</Text>
                    </View>

                    <View style={css.chat}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>Ufuk Bayraktar</Text>
                            <Text numberOfLines={1} style={css.lastMessage}>Okey</Text>
                        </View>
                        <Text style={css.sendTime}>12:12</Text>
                    </View>


                    <View style={[css.chat,]}>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />
                        <View style={css.text}>
                            <Text style={css.name}>Karl der Käfer</Text>
                            <Text numberOfLines={1} style={css.lastMessage}>Okey</Text>
                        </View>
                        <Text style={css.sendTime}>12:12</Text>
                    </View>

                </ScrollView>
            </View>
        );
    }
}

ChatOverview.propTypes = {
    navigation: PropTypes.object.isRequired,
}

const css = StyleSheet.create({



    chatSelected: {
        backgroundColor: "#efefef",
    },

    //Wetter
    chatWeather: {

    },
    //Ersmal so
    chatWeatherCrad: {
        fontFamily: "Poppins600",
        fontSize: 20,
    },




    sendTime: {
        alignSelf: 'center',
        justifyContent: "flex-end",
        color: "#929684",
        marginRight: 4,
        fontSize: 14,
        fontFamily: "Poppins300",
        minWidth: 32,
    },
    sendTimeNew: {
        fontFamily: "Poppins600",
        color: "#36c187",
    },
    lastMessage: {
        fontSize: 15,
        color: "#55574e",
        margin: 0,
        padding: 0,
        fontFamily: "Poppins400",
        //ellipsizeMode: "tail",
        marginTop: -2,
    },
    lastMessageBold: {
        color: "#55574e",
        fontFamily: "Poppins500",
        flex: 1,
        flexDirection: "row",
    },
    name: {
        fontSize: 17,
        color: "#000",
        margin: 0,
        padding: 0,
        fontFamily: "Poppins600",
    },
    text: {
        //fontFamily: "Poppins500",
        alignSelf: "center",
        marginLeft: 12,
        flex: 1,
    },
    pb: {
        height: 52,
        width: 52,
        borderRadius: 26,

        //für Inhalt 
        justifyContent: 'center',
        alignItems: 'center'
    },
    chat: {
        width: "100%",
        backgroundColor: "#fff",
        paddingVertical: 9,
        paddingHorizontal: 9,

        flexDirection: 'row',
        alignItems: 'center',
    },
    chatNew: {
        borderLeftWidth: 8,
        borderColor: "#36c187",
        backgroundColor: "#f2f2f2",
    },
    chats: {

    },
    body: {
        width: "100%",
        height: "100%",
        paddingTop: 24,
        backgroundColor: "#fff",
    },
});