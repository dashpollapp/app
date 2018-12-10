import React, { Component } from "react";
import { View, TouchableOpacity, ScrollView, Image, Text, } from "react-native";

import { screenNames } from "../constants";
import s from "./TempStyle";

class Temp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScrollView style={s.box}>

                <TouchableOpacity>
                    <Text style={s.h1}>Beiträge:</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.screenProps.parentNavigation.navigate(screenNames.CREATE)}>
                    <Text style={s.link}>+ Neue Umfrage</Text>
                </TouchableOpacity>

                <View style={s.pPost}>
                    <View style={s.pPostHeader}>
                        <TouchableOpacity>
                            <Image style={s.pPB} source={require("../assets/img/pb.jpg")} />
                        </TouchableOpacity>
                        <View style={s.pPostHeaderText}>
                            <Text style={s.pTitle}>Titel der Umfrage</Text>
                            <Text style={s.pSubtitle}>Koni vor 32 Minuten</Text>
                        </View>
                    </View>


                </View>


            </ScrollView>
        );
    }
}

export default Temp;
