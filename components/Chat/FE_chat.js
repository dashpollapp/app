import Swipeout from "react-native-swipeout";
import { View, TouchableOpacity, Text, Image } from "react-native";

<Swipeout backgroundColor="#f9f9f9" left={swipeoutBtns} autoClose="true" buttonWidth={56}>
    <View style={[chats.chat]}>
        <TouchableOpacity style={[chats.btnProfile]}>
            <View style={[chats.btnProfileInner]}>
                <View style={[chats.priority, chats.priority2]} />
                <Image style={[chats.pb]} source={require("./data/pb.png")} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={[chats.btnChat]}>
            <View style={[chats.btnChatInner]}>
                <View style={[chats.text]}>
                    <Text style={[t.name]}>Max</Text>
                    <Text style={[t.last]}>Wichtig! feuhfuhuxfuhjed</Text>
                </View>
                <Text style={[t.time, chats.time]}>12:14</Text>
            </View>
        </TouchableOpacity>
    </View>
</Swipeout>;

var swipeoutBtns = [
    {
        component: (
            <View style={[chats.swipeItem]}>
                <TouchableOpacity style={[chats.swipeItemInnerOn, { backgroundColor: "#2d98da" }]}>
                    <Text style={chats.swipeItemText}>0</Text>
                    <Text style={chats.swipeItemDescription}>Egal</Text>
                </TouchableOpacity>
            </View>
        )
    },
    {
        component: (
            <View style={chats.swipeItem}>
                <TouchableOpacity style={[chats.swipeItemInnerOn, { backgroundColor: "#20bf6b" }]}>
                    <Text style={chats.swipeItemText}>1</Text>
                    <Text style={chats.swipeItemDescription}>Normal</Text>
                </TouchableOpacity>
            </View>
        )
    },
    {
        component: (
            <View style={chats.swipeItem}>
                <TouchableOpacity style={[chats.swipeItemInner, { backgroundColor: "#fa8231" }]}>
                    <Text style={chats.swipeItemText}>2</Text>
                    <Text style={chats.swipeItemDescription}>Wichtig</Text>
                </TouchableOpacity>
            </View>
        )
    },
    {
        component: (
            <View style={chats.swipeItem}>
                <TouchableOpacity style={[chats.swipeItemInner, { backgroundColor: "#eb3b5a" }]}>
                    <Text style={chats.swipeItemText}>3</Text>
                    <Text style={chats.swipeItemDescription}>OMG!</Text>
                </TouchableOpacity>
            </View>
        )
    }
];
