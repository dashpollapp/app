import { View, TextInput, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as screenNames from '../../constants/screenNames';
import { user_search } from "../../actions";

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
            <View>
                
                <TextInput placeholder="Username" style={css.input} onChangeText={(username) => this._onChangeText(username)} />

                <FlatList 
                    style={css.list}
                    data={this.props.foundUsers}
                    keyExtractor={(item) => item.username}

                    renderItem={({ item, index }) => {
                
                        return (
                            <TouchableOpacity onPress={() => this.props.navigation.navigate(screenNames.USER, {userObj: item})} >
                                <View style={css.user}>

                                    <Text>{item.username}</Text>

                                </View>
                            </TouchableOpacity>
                        )

                    }}

                />

            </View>
        );
    }
}

SearchPage.propTypes = {
    user_search: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    foundUsers: PropTypes.array.isRequired,
}

const css = StyleSheet.create({
    input: {
        width: "80%",
        backgroundColor: "#fff",
        alignSelf: 'center',
        height: 40
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
