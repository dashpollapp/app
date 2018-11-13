import React from 'react';
import { Text, View } from 'react-native';

import { css } from '../Style';

export default class NormalType extends React.Component {

    render() {
        return (
            <View style={css.out}>
                <Text>Normal</Text>
            </View>
        );
    }
}
