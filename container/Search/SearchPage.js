import { View, TextInput, FlatList, StyleSheet, Text, TouchableOpacity, Image, } from "react-native";
import React from "react";

import PropTypes from 'prop-types';

import { connect, } from "react-redux";
import * as screenNames from "../../constants/screenNames";
import { user_search, } from "../../actions";

import { se, } from "./SearchStyle"

import DefaultPB from "../../assets/img/pb.png"
import CloseImg from "../../assets/img/close.png"

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

                {/*Zurück*/}
                <TouchableOpacity>
                    <Image style={se.closeImg} source={CloseImg} />
                </TouchableOpacity>
                
                <TextInput 
                placeholder="Entdecke Dashpoll" 
                style={se.input} 
                onChangeText={(username) => this._onChangeText(username)} />

                <View style={se.results}>

                    {/*
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
                    */}

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
                                        source={(item.meta.pb !== "default") ? { uri: "https://api.dashpoll.net/pb/" + item.meta.pb } : DefaultPB}/>

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
