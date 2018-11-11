import React from 'react';
import { Platform, StatusBar, Alert, Button, TouchableOpacity, StyleSheet, Text, View, ScrollView, TextInput, Image, KeyboardAvoidingView, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient, Font, AppLoading, BlurView } from 'expo';
import { pcSelect, pc, profile, login, loader, cc, css } from '../Style';

export default class NormalType extends React.Component {

    render() {
        return (
            <View style={css.out}>
                <Text>Normal</Text>
            </View>
        );
    }
}
