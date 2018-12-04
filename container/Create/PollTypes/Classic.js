import React from 'react';
import { TouchableOpacity, Text, View, TextInput, StyleSheet, Platform, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';

import { connect } from 'react-redux';

import { pc, css } from '../Style';
import s from "../../Polls/PollStyle";

class ClassicType extends React.Component {

    state = {
        answersArray: ["", "", ""]
    }

    componentDidUpdate() {
        this.props.changeValues(false, false, this.state.answersArray);
    }

    addAnswer = () => {
        this.setState({ answersArray: [...this.state.answersArray, ""] });
    }

    removeAnswer = index => {
        let { answersArray } = this.state;
        if (answersArray.length <= 2) return;
        answersArray = answersArray.filter((a, indexToFilter) => index !== indexToFilter);
        this.setState({ answersArray });
    }

    changeAnswerText = (text, index) => {
        let { answersArray } = this.state;
        answersArray[index] = text;
        this.setState({ answersArray })
    }

    render() {

        const answersJsx = this.state.answersArray.map((answer, index) => {
            return (
                <View key={index}>
                    <TextInput
                        //Sinlose Returns sollen Abgefangen werden!!!
                        multiline
                        underlineColorAndroid={'transparent'}
                        style={[{ height: 20, marginBottom: 0, flex: 1, }, s.pollAnswerTitle,]}
                        placeholder={"Antwort ..."}
                        placeholderTextColor={"#111"}
                        onChangeText={(text) => this.changeAnswerText(text, index)}
                        value={this.state.answersArray[index]}
                    />
                    <View style={[s.pt1Bar, { marginBottom: 24, flex: 1, }]}>
                        <LinearGradient
                            style={[s.pt1BarInner, { width: "75%", height: 16, }]}
                            colors={['#ae4768', '#3386cd']}
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 0.9, y: 0.1 }}
                        />
                        <TouchableOpacity onPress={() => this.removeAnswer(index)}>
                            <Text style={s.pollPercentText}>löschen</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            )
        })

        return (
            <View style={{ flex: 1, marginTop: 24, }}>

                <View style={[pc.polltype, { flex: 1, }]}>
                    <Text style={type.title}>Klassische Umfrage: <Text style={pc.polltypeCat}>(Auswahl)</Text></Text>
                    <Text style={type.subtitle}>Verschiede Antwortmöglichkeiten als Text. Benutzer können sich für 1 Antwortmöglichkeit entscheiden.</Text>
                </View>

                {answersJsx}




                <TouchableOpacity onPress={() => this.addAnswer()}>
                    <Text style={type.addAnswer}>+ Antwort hinzufügen</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default ClassicType;

export var type = StyleSheet.create({
    addAnswer: {
        fontFamily: "GS2",
        fontSize: 16,
        color: "#444",
    },

    title: {
        fontFamily: "GS2",
        fontSize: 18,
        color: "#111",
    },
    subtitle: {
        fontFamily: "GS1",
        fontSize: 14,
        color: "#aaa",
    },
})