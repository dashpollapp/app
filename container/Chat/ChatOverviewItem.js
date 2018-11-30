import React, {Component} from 'react';
import { StatusBar, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';
import PropTypes from 'prop-types';

import { css } from "./ChatOverviewStyle"

export default class ChatOverviewItem extends Component {
  render() {

    let data = this.props.data
    console.log(data)


    let lastMessage     = data.lastMessage.text
    let title           = data.title

    let showAsNew       = data.lastMessage.from != 0 && data.lastMessage.readed == 0
    let priorityColor   

    switch (data.priority) {
        case 1:
            priorityColor = "#0ccc6c" 
            break;
        case 2:
            priorityColor = "#e0a83e"
            break;
        case 3:
            priorityColor = "#db7a41"
            break;
        case 4:
            priorityColor = "#d83a3a"
            break;
        default:
            priorityColor = "#a3a3a3"
            break;
    }

    return (
        <View style={[css.chat, css.chatNew,]}>	

            {showAsNew ? <View style={[css.chatNewBox, {backgroundColor: priorityColor} ]}></View> : null}
            
             
             <Image style={css.pb} source={require("../../assets/img/pb.png")}  />	
             <View style={css.text}>	
                 <Text style={css.name}>{title}</Text>	
                 <Text numberOfLines={1} style={css.lastMessage}>{lastMessage}</Text>	
             </View>	
             <Text style={[css.sendTime, css.sendTimeNew, { color: "#e17055" }]}>12:14</Text>	
         </View>	
    )
  }
}
