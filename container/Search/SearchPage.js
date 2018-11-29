import { View, TextInput, FlatList, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as screenNames from '../../constants/screenNames';
import { user_search } from "../../actions";

import DefaultPB from "../../assets/img/pb.png"

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _onChangeText(username) {
        if (username.length > 0) this.props.user_search(username)
    }

    render() {
        return (
            <View style={se.box} >
                
                <TextInput placeholder="Entdecke Dashpoll" style={se.input} onChangeText={(username) => this._onChangeText(username)} />

                <View style={se.results}>
                    <View style={se.hashtagList}>
                        <TouchableOpacity>
                            <View style={se.hashtag}>
                                <Text style={se.hashtagText}>#ki</Text>
                                <Text style={se.hashtagInfo}>Hype</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={se.hashtag}>
                                <Text style={se.hashtagText}>#kochen</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={se.hashtag}>
                                <Text style={se.hashtagText}>#krieg</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={se.hashtag}>
                                <Text style={se.hashtagText}>#kinder</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <FlatList 
                        style={se.userList}
                        horizontal={true}
                        data={this.props.foundUsers}
                        keyExtractor={(item) => item.username}
                        renderItem={({ item, index }) => {

                            console.log(item)
                    
                            return (
                                <TouchableOpacity onPress={() => this.props.navigation.navigate(screenNames.USER, {userObj: item})} >
                                    <View style={se.userBox}>

                                        <Image 
                                        style={se.userImg} 
                                        source={(item.meta.pb) ? { uri: "https://api.dashpoll.net/pb/" + item.meta.pb } : DefaultPB}/>

                                        <Text 
                                        style={se.userFullname}
                                        numberOfLines={1} 
                                        ellipsizeMode ={'tail'} 
                                        >
                                            {item.fullname}
                                        </Text>

                                        <Text  
                                        numberOfLines={1} 
                                        ellipsizeMode ={'tail'} 
                                        style={se.userName}>
                                            @ {item.username}
                                        </Text>

                                    </View>
                                </TouchableOpacity>
                            )

                        }}

                    />
                </View>


            </View>
        );
    }
}

SearchPage.propTypes = {
    user_search: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    foundUsers: PropTypes.array.isRequired,
}

const se = StyleSheet.create({

    box: {
        paddingTop: 24,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        height: "100%",
    },
    input: {
        width: "100%",
        backgroundColor: "rgba(0,0,0,0)",
        paddingVertical: 12,
        paddingHorizontal: 32,

        fontFamily: "GS2",
        color: "#666",
        textAlign: "center",
        fontSize: 18,
    },


    results: {
        marginTop: 32,
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
    },



    //HAshtags
    hashtagList: {
        flexDirection: "row",
    },
    hashtag: {
        backgroundColor: "#222",
        borderRadius: 5,
        marginRight: 8,
        paddingHorizontal: 8,
        paddingVertical: 2,
        height: 24,
        flexDirection: "row",
        alignItems: "center",
    },
    hashtagText: {
        color: "#fff",
        fontFamily: "GS2",
        fontSize: 13,
        paddingHorizontal: 2,
    },
    hashtagInfo: {
        color: "#ccc",
        fontFamily: "GS1",
        fontSize: 10,
        paddingHorizontal: 2,
    },



    //USer
    userList: {
        paddingVertical: 32,
    },
    userBox: {
        paddingHorizontal: 2,
        width: 108,
        alignItems: "center",
        textAlign: "center",
    },
    userImg: {
        height: 64,
        width: 64,
        borderRadius: 26,
        marginVertical: 4,
    },
    userFullname: {
        color: "#111",
        fontFamily: "GS3",
        fontSize: 13,
    },
    userName: {
        color: "#aaa",
        fontFamily: "GS1",
        fontSize: 12,
    },






    list: {
        width: "100%",
        height: "100%"
    },
    user: {
        backgroundColor: "#fff",
        width: "100%",
        height: 60,
        margin: 10,
    }
});

const mapStateToProps = state => {
    return {
        foundUsers: state.user_search.users,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        user_search: username => {
            dispatch(user_search(username));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
