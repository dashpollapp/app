<<<<<<< HEAD
import React, { Component } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

import s from "./TempStyle";

class Temp extends Component {
    render() {
        return (
            <View>

                <Text>Temp Datei für FE-Tests</Text>

            </View>
        );
    }
}

export default Temp;
=======
import React, { Component } from "react";
import { View, TouchableOpacity, ScrollView, Image, Text, } from "react-native";

import s from "./TempStyle";

class Temp extends Component {
    render() {
        return (
            <ScrollView style={s.box}>

                <TouchableOpacity>
                    <Text style={s.h1}>Beiträge:</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={s.link}>+ Neue Umfrage</Text>
                </TouchableOpacity>

                <View style={s.pPost}>
                    <View style={s.pPostHeader}>
                        <TouchableOpacity>
                            <Image style={s.pPB} src={require('../assets/img/pb.jpg')}/>
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
>>>>>>> 61fdfb5654f4b48d74675c8ba61557e4711834ff
