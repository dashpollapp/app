import React from "react";
import {
  Text,
  View,
} from "react-native";
import { css } from "../Style";

export default class LikeType extends React.Component {
  render() {
    return (
      <View style={css.out}>
        <Text>Like</Text>
      </View>
    );
  }
}
