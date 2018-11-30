import React from 'react';
import { StatusBar, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';
import PropTypes from 'prop-types';

import { css } from "./ChatOverviewStyle"

export default class ChatOverview extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor: "#fff", opacity: 0}}>

                <ScrollView>
     
                     {/*▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆  Priority: Ultraaaa Wichtig  ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆*/}	
                    <View style={[css.chat, css.chatNew,]}>	
                        <View style={[css.chatNewBox, {backgroundColor:"#d83a3a"} ]}></View>
                        <Image style={css.pb} source={require("../../assets/img/pb.png")}  />	
                        <View style={css.text}>	
                            <Text style={css.name}>Frank Idee</Text>	
                            <Text numberOfLines={1} style={css.lastMessage}>Diese nachricht ist so w</Text>	
                        </View>	
                        <Text style={[css.sendTime, css.sendTimeNew, { color: "#e17055" }]}>12:14</Text>	
                    </View>	


                     {/*▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆  Priority: Extrem Wichtig  ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆*/}	
                    <View style={[css.chat, css.chatNew,]}>	
                        <View style={[css.chatNewBox, {backgroundColor:"#db7a41"} ]}></View>
                        <Image style={css.pb} source={require("../../assets/img/dev/pp2.jpg")}  />	
                        <View style={css.text}>	
                            <Text style={css.name}>Kaffsuchti</Text>	
                            <Text numberOfLines={1} style={css.lastMessage}>Habe vergessen Nudeln aufzuschreiben</Text>	
                        </View>	
                        <Text style={[css.sendTime, css.sendTimeNew, { color: "#db7a41" }]}>12:17</Text>	
                    </View>	

                     {/*▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆  Priority: Wichtig  ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆*/}	
                    <View style={[css.chat, css.chatNew,]}>	
                        <View style={[css.chatNewBox, {backgroundColor:"#e0a83e"} ]}></View>
                        <Image style={css.pb} source={require("../../assets/img/pb.jpg")} />	
                        <View style={css.text}>	
                            <Text style={css.name}>Max Baier</Text>	
                            <Text numberOfLines={1} style={css.lastMessage}>Ey hab noch ein Bug endeckt</Text>	
                        </View>	
                        <Text style={[css.sendTime, css.sendTimeNew, { color: "#e0a83e" }]}>12:15</Text>	
                    </View>	
                     {/*▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆  Neue Messageæ  ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆*/}	
                    <View style={[css.chat, css.chatNew]}>	
                        <View style={[css.chatNewBox, {backgroundColor:"#0ccc6c"} ]}></View>
                        <Image style={css.pb} source={require("../../assets/img/dev/pp1.jpg")} />	
                        <View style={css.text}>	
                            <Text style={css.name}>Irgendwer</Text>	
                            <Text numberOfLines={1} style={css.lastMessage}>Irgendwas</Text>	
                        </View>	
                        <Text style={[css.sendTime, css.sendTimeNew]}>12:24</Text>	
                    </View>	
                     {/*▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆  Neue Message  ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆*/}	
                    <View style={[css.chat, css.chatNew,]}>	
                        <View style={[css.chatNewBox, {backgroundColor:"#a3a3a3"} ]}></View>
                        <Image style={css.pb} source={require("../../assets/img/dev/pp2.jpg")} />	
                        <View style={css.text}>	
                            <Text style={css.name}>Kevin</Text>	
                            <Text numberOfLines={1} style={[css.lastMessage, css.lastMessageBold, {}]}>Spam wurde erkannt</Text>	
                        </View>	
                        <TouchableOpacity><Text style={[css.sendTime]}>Blockieren</Text></TouchableOpacity>
                    </View>	
                     {/*▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆  Neue Message  ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆*/}	
                    <View style={[css.chat, css.chatNew,]}>
                        <View style={[css.chatNewBox, {backgroundColor:"#a3a3a3"} ]}></View>	
                        <Image style={css.pb} source={require("../../assets/img/dev/pp2.jpg")} />	
                        <View style={css.text}>	
                            <Text style={css.name}>Kevin</Text>	
                            <Text numberOfLines={1} style={[css.lastMessage, css.lastMessageBold, {}]}>Wegen Spam blokiert</Text>	
                        </View>	
                        <Text style={[css.sendTime]}>Rückgängig</Text>	
                    </View>	
                     <View style={[css.chat, /*css.chatSelected */]}>	
                        <Image style={css.pb} source={require("../../assets/img/dev/pp4.jpg")} />	
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
                    

                </ScrollView>

            </View>
        );
    }
}

ChatOverview.propTypes = {
    navigation: PropTypes.object.isRequired,
}
