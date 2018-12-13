import React, { Component, } from "react";
import { View, Text, TouchableOpacity, Picker } from "react-native";
import PropTypes from "prop-types";

import D from "../../assets/style/default"
import FW from "../../assets/style/framework"
import S from "./ReportStyle"

import { connect } from "react-redux";

class ReportPost extends Component {

    render() {
        return(
            <View style={[FW.page, FW.p4]}>
                <Text style={D.h1}>Beitrag melden</Text>

                <Picker
                style={S.picker}
                selectedValue="1"
                >
                    <Picker.Item style={[S.pickerItem, S.pickerItemDefault]} label="Bitte wählen" value="1"/>
                    <Picker.Item style={[S.pickerItem,]} label="Spam"/>
                    <Picker.Item style={[S.pickerItem,]} label="Belästigung oder Mobbing"/>
                    <Picker.Item style={[S.pickerItem,]} label="Copyrightverletzung"/>
                    <Picker.Item style={[S.pickerItem,]} label="Nacktheit oder Pornografie"/>
                    <Picker.Item style={[S.pickerItem,]} label="Hassrede oder -symbole"/>
                    <Picker.Item style={[S.pickerItem,]} label="Gawalt oder Gewaltdrohung"/>
                    <Picker.Item style={[S.pickerItem,]} label="Werbung & Verkauf"/>
                    <Picker.Item style={[S.pickerItem,]} label="Bewerben von Drogen oder Schusswaffen"/>
                    <Picker.Item style={[S.pickerItem,]} label="Selbstverletzung"/>
                    <Picker.Item style={[S.pickerItem,]} label="Sonstiges"/>
                </Picker>
                    
            </View>
        )
    }
}

export default connect()(ReportPost);
