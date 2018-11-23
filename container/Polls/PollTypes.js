import React, { Component, } from "react";
import { View, TouchableOpacity, Image, Text, FlatList, StyleSheet } from "react-native";
import { LinearGradient } from 'expo';
import s from "./PollStyle";
import PropTypes from "prop-types";

//Like
import LikeImg from "../../assets/img/post/polltypes/like/like_off.png"
import LikeImg_on from "../../assets/img/post/polltypes/like/like_on.png"

//Style vom Liken
const like = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: "flex-end",
        flexDirection: "row",
        paddingBottom: 16,
    },
    amount: {
        fontFamily: "GS1",
        color: "#aaa",
        fontSize: 16,
        marginHorizontal: 4,
    },
    img: {
        height: 26,
        width: 26,
        marginHorizontal: 4,
    },
    inner: {
        alignItems: "center",        
        flexDirection: "row",
        padding: 4,
    },
})



class PollTypes extends Component {
    constructor(props) { //brauch man so ein leeren Constructor in ReactNative? 
        super(props)
    }
    
    render() {
        let poll = this.props.poll;

        //Wird noch in Komponenten ausgelagert 
        switch(poll.polltype) {
            case 10:
                return (
                    <View>
                        <Text>PollType: 11</Text>
                    </View>
                );

            case 11:

                return (
                    <TouchableOpacity>
                        <View style={like.box}>
                            
                                <View style={like.inner}>
                                    <Text style={like.amount}>12x</Text>
                                    <Image style={like.img} source={LikeImg_on}/>
                                </View>
                            
                        </View>
                    </TouchableOpacity>
                );

            
            case 20:

                
                let answers = [];

                poll.answers.forEach((answer, index) => {
                    
                    let percent = (poll.vote.votes[answer.id] / poll.vote.totalVotes) * 100 | 0

                    answers.push(
                        <TouchableOpacity key={index} >
                            <View style={s.pt1Answer}>
                                <View>
                                    <Text style={s.pollAnswerTitle}>{answer.text}</Text>
                                </View>
                                <View style={s.pt1Bar}>
                                    <LinearGradient
                                        style={[s.pt1BarInner, { width: percent + "%" }]}
                                        //colors={['#aaa', '#888']}
                                        colors={['#ae4768', '#3386cd']}
                                        start={{ x: 0.0, y: 0.0 }}
                                        end={{ x: 0.9, y: 0.1 }}
                                    />
                                    <Text style={s.pollPercentText}>{percent}%</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )

                });

                return (answers);

            default:
                return <View><Text>Fehler beim laden des PollTypes</Text></View>;
        }
    }
}

PollTypes.propTypes = {
    poll: PropTypes.object.isRequired,
}

export default PollTypes;
