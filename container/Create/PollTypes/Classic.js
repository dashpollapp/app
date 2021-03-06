import React from "react";
import { TouchableOpacity, Text, View, TextInput, StyleSheet, Keyboard, } from "react-native";
import { LinearGradient } from "expo";

import { connect } from "react-redux";
import D from "../../../assets/style/default";
import FW from "../../../assets/style/framework";
import { pc, css, create } from "../Style";
import s from "../../Polls/PollStyle";

class ClassicType extends React.Component {

    state = {
        answersArray: ["", ""],
        maxVotes: 1,
    }

    componentDidUpdate() {
        this.props.changeValues(false, false, this.state.answersArray, this.state.maxVotes);
    }

    addAnswer = () => {
        this.setState({ answersArray: [...this.state.answersArray, ""] });
    }

    removeAnswer = index => {
        let { answersArray } = this.state;
        answersArray = answersArray.filter((a, indexToFilter) => index !== indexToFilter);
        this.setState({ answersArray });
    }

    changeAnswerText = (text, index) => {
        let { answersArray } = this.state;
        answersArray[index] = text;
        this.setState({ answersArray })
    }

    handleKeyPress = (e) => {
        if (e.nativeEvent.key == "Enter") {
            Keyboard.dismiss()
        }
    }

    render() {
        let answersArray = this.state.answersArray
        let isErasable = !(answersArray.length <= 2) //löschbar / nicht löschbar (mindestens 2 Antworten)

        const answersJsx = answersArray.map((answer, index) => {
            return (
                <View key={index}>

                    <TextInput
                        multiline={false}
                        underlineColorAndroid={"transparent"}
                        style={[{ height: 20, marginBottom: 8, }, s.pollAnswerTitle,]}
                        placeholder={"Antwort " + (index + 1)}
                        placeholderTextColor={"#111"}
                        //onSubmitEditing={}?
                        onKeyPress={this.handleKeyPress}
                        onChangeText={(text) => this.changeAnswerText(text, index)}
                        value={this.state.answersArray[index]}
                    />
                    <View style={[s.pt1Bar, { marginBottom: 24, }]}>
                        <LinearGradient
                            style={[s.pt1BarInner, { width: "75%", height: 16, }]}
                            colors={["#ae4768", "#3386cd"]}
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 0.9, y: 0.1 }}
                        />

                        {
                            (isErasable) ? //mindestens 2 Antworten
                                <TouchableOpacity onPress={() => this.removeAnswer(index)}>
                                    <Text style={[s.pollPercentText,]}>löschen</Text>
                                </TouchableOpacity>
                                :
                                <Text style={[s.pollPercentText, { opacity: 0.5, }]}>(löschen)</Text>
                        }

                    </View>
                </View>
            )
        })

        return (
            <View style={{ marginTop: 24, }}>

                <View style={[pc.polltype, { marginBottom: 24, }]}>
                    <Text style={type.title}>Klassische Umfrage: <Text style={pc.polltypeCat}>(Auswahl)</Text></Text>
                    <Text style={type.subtitle}>Verschiede Antwortmöglichkeiten als Text. Benutzer können sich für 1 Antwortmöglichkeit entscheiden.</Text>
                </View>

                <Text style={[D.h3, FW.pt4]}>Maximale Auswahlmöglichkeiten:</Text>
                <TextInput
                    multiline
                    textAlignVertical={"top"}
                    underlineColorAndroid={"transparent"}
                    style={create.inputCounter}
                    placeholder={"1"}
                    placeholderTextColor={"#777"}
                    onChangeText={(text) => this.setState({maxVotes: text})}
                    keyboardType={"numeric"}
                    multiline={false}
                    maxLength={1} //erstmal
                />

                {/* von ll kp ob das so muss xD*/}
                <View style={{paddingBottom: 25}} />

                {answersJsx}

                <TouchableOpacity onPress={() => this.addAnswer()}>
                    <Text style={[type.addAnswer,]}>+ Antwort hinzufügen</Text>
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