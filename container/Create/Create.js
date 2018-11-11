import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { css } from "./Style";
import Createe from "./CreatePage";
import Types from "./Types";
import * as screenNames from "../../constants/screenNames";

import PlusImg from "../../assets/img/navbar/top/plus.png";
import BackImg from "../../assets/img/navbar/top/back.png";

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [{ key: "first", title: "CreatepollPage" }, { key: "second", title: "TypesPage" }]
        };
    }

    _renderScene = SceneMap({
        first: Createe,
        second: Types
    });

    _handleIndexChange = index => this.setState({ index });

    _handleTypeChange = (type = "BACK") => {

    };

    render() {
        return (
            <View style={css.out}>
                <View style={css.body}>
                    <View style={css.navTopPush} />

                    <View style={css.navTop}>
                        <TouchableOpacity
                            onPress={
                                this.state.index === 0
                                    ? () => {
                                        this.props.navigation.navigate(screenNames.SETTINGS);
                                    }
                                    : this._handleTypeChange
                            }
                        >
                            <Image
                                style={this.state.index === 0 ? css.myPB : css.navTopBack}
                                source={
                                    this.state.index === 0
                                        ? { uri: "https://pbs.twimg.com/profile_images/830204661474979841/qsnoO3lJ_400x400.jpg" }
                                        : BackImg
                                }
                            />
                        </TouchableOpacity>

                        <View style={css.navTopCenter}>
                            <TouchableOpacity>
                                <Text style={css.windowTitle}>{this.state.index === 0 ? "Beitrag erstellen" : "Typ wählen"}</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                            <Image style={[css.create, css.close]} source={PlusImg} />
                        </TouchableOpacity>
                    </View>
                    <TabView
                        navigationState={this.state}
                        renderScene={this._renderScene}
                        onIndexChange={this._handleIndexChange}
                        tabBarPosition={false}
                    />
                </View>
            </View>
        );
    }
}

export default Create;