import React from 'react';
import { View, TouchableOpacity, Text, Modal } from "react-native";
import { BlurView } from 'expo';
import { connect } from 'react-redux';
import { change_modal } from '../../actions';
import s from '../../container/Polls/PollStyle';

const PostModal = (props) => {

    const poll = props.poll;

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.visible}
            onRequestClose={() => props.change_modal(false)}
            >
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

                        <TouchableOpacity style={s.blockHideButton} onPress={() => props.change_modal(false)} >
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
        visible: state.change_modal.visible,
        poll: state.change_modal.poll
    }
}

const mapDispatchToProps = dispatch => {
    return {
        change_modal: visible => {
            dispatch(change_modal(visible));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);