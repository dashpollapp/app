import React from 'react';
import { View, TouchableOpacity, Image, Text, FlatList, Share, Modal } from "react-native";
import { BlurView } from 'expo';

//Functions
import sharePoll from '../../utils/share';

import { connect } from 'react-redux';

import * as screenNames from '../../constants/screenNames';

import s from '../../container/Polls/PollStyle';

const PostModal = (props) => {

    console.log(props.visible);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.visible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <BlurView tint="light" intensity={90}>
                <View style={s.block}>
                    <View>
                        <Text style={s.blockHeading}>Nicht mehr anzeigen:</Text>

                        <TouchableOpacity>
                            <View style={s.blockItem}>
                                <Text style={s.blockItemText}>
                                    Nicht mehr folgen
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={s.blockItem}>
                                <Text style={s.blockItemText}>
                                    Gefällt mir nicht
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={s.blockItem}>
                                <Text style={s.blockItemText}>
                                    Nicht mehr folgen
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={s.blockItem}>
                                <Text style={s.blockItemText}>
                                    Löschen
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={s.blockItem}>
                                <Text style={s.blockItemText}>
                                    Benachrichtgungen:
                                </Text>
                                <Text style={[s.blockItemBoolText]}>
                                    Aus
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={s.blockHideButton}>
                            <Text style={s.blockHideText}>Abbrechen</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BlurView>
        </Modal>
    );
}

const mapStateToProps = state => {
    return {
        visible: state.change_modal.visible
    }
}

export default connect(mapStateToProps)(PostModal);