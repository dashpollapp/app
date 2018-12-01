import React, { Component, } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import FW from "../../assets/style/framework"
import D from "../../assets/style/default"
import filter from "./PostFilterStyle"

class PostFilter extends Component {

    render() {
        return(
            <View style={FW.page}>
                <View style={[FW.row, FW.aiStart]}>
                    <TouchableOpacity style={[FW.flex, filter.item, filter.item_on, FW.br8]}>
                        <Text style={[filter.itemText]}>Trends</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[FW.flex, filter.item, FW.br8]}>
                        <Text style={[filter.itemText]}>Folge Ich</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[FW.flex, filter.item, FW.br8]}>
                        <Text style={[filter.itemText]}>Freunde</Text> 
                    </TouchableOpacity>
                </View>

                <Text style={[D.heading]}>Erweiterter Filter:</Text>
                <Text style={[D.soon]}>Für 2019 geplant.</Text>

            </View>
        )
    }
}

export default PostFilter;
