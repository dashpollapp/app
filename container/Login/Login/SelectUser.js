import React from "react";
import { ScrollView, Text, View, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, FlatList } from "react-native";
import { login } from "../SignInStyle";
import D from "../../../assets/style/default"

import { connect } from "react-redux";

import { user_search } from "../../../actions"

import * as screenNames from "../../../constants/screenNames";

//Images
import DefaultPB from "../../../assets/img/pb.png"
import KiImg from "../../../assets/img/ki.png"

class SelectUser extends React.Component {

    _onUserInputChange(search) {
        if (search.length > 0) this.props.user_search(search)
    }

    render() {
        return (
            <KeyboardAvoidingView
            style={login.box}
            behavior="padding"
            keyboardVerticalOffset={22}
            >   
            <ScrollView style={login.scroll}>

                {/*Stäter ein Bild was immer sichtbar ist: <Image style={login.img} source={SplashImg}></Image>*/}

                <TouchableOpacity>
                    <Text style={login.welcomeText}>Wie heißt dein Dashpoll Account 😄</Text>
                </TouchableOpacity>
                
                <TextInput
                    placeholder="Dashpoll-Name"
                    placeholderTextColor="#666"
                    style={login.input}
                    onChangeText={(text) => this._onUserInputChange(text)}
                />

                <FlatList
                    horizontal={true}
                    style={login.users}
                    data={this.props.foundUsers}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => {

                        return (
                            <TouchableOpacity onPress={() => this.props.navigation.navigate(screenNames.LOGIN_PASSWORD, {user: item})}>
                                <View style={[login.user_saves, login.user]}>
                                    <Image style={login.userPB} source={DefaultPB}/>
                                    <Text style={login.userFullname}>{item.fullname}</Text>
                                    <Text style={login.userName}>@{item.username}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />

                <View style={D.kiBoxes}>
                    <TouchableOpacity style={D.kiBox}>
                        <Image style={D.kiImg} source={KiImg}/>
                        <Text style={D.kiText}>Name vergessen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={D.kiBox}>
                        <Image style={D.kiImg} source={KiImg}/>
                        <Text style={D.kiText}>Acctount erstellen</Text>
                    </TouchableOpacity>
                </View>

                <View style={{height: 64,}}></View>
            </ScrollView>
        </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = state => {
    return {
        foundUsers: state.user_search.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        user_search: username => {
            dispatch(user_search(username));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectUser);
