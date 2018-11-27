import { View, TextInput, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View>
                
                <TextInput placeholder="Username" style={css.input} />

                <FlatList 
                    style={css.list}
                    data={[{username: "1"}, {username: "2"}, {username: "3"}, {username: "4"}, {username: "5"}]}
                    keyExtractor={(item) => item.username}

                    renderItem={({ item, index }) => {
                
                        return (
                            <TouchableOpacity>
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

export default SearchPage;
