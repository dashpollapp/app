import { StyleSheet, Platform,Dimensions } from "react-native";

export default StyleSheet.create({
    //import D from "../../../assets/style/default"

    img: {
        width: 320,
        height: 40,
        alignSelf: "center",
    },

    /*
    import { View, TouchableOpacity, Text, Image } from "react-native";
    import KiImg from "../../../assets/img/ki.png"
    <View style={D.kiBoxes}>
        <TouchableOpacity style={D.kiBox}>
            <Image style={D.kiImg} source={KiImg}/>
            <Text style={D.kiText}>Passwort wiederholen?</Text>
        </TouchableOpacity>
    </View>


    <TouchableOpacity style={D.kiBox}>
        <Image style={D.kiImg} source={KiImg}/>
        <Text style={D.kiText}>Account erstellen</Text>
    </TouchableOpacity>
    */ 
   kiBoxes: {
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "center",
        marginVertical: 8,
    },
    kiBox: {
        backgroundColor: "#333",
        padding: 4,
        borderRadius: 10,
        flexDirection: "row",
        marginHorizontal: 4,
    },
    kiText: {
        fontFamily: "GS2",
        color: "#fff",
        fontSize: 10,
        marginHorizontal: 4,
    },
    kiImg: {
        height: 10,
        width: 10,
        marginHorizontal: 4,
    },




    heading: {
        fontFamily: "GS1",
        fontSize: 13,
        color: "#aaa",
        marginTop: 32,
        marginBottom: 4,
        textAlign: "center",
    },

    soon: {
        fontFamily: "GS2",
        fontSize: 15,
        color: "#555",
    },


    
    link: {
        fontSize: 18,
        fontFamily: "GS1",
        color: "#000",
        fontWeight: "500",
        color: "#0984e3",
    },
    boxHeader: {
        width: "100%",
        padding: 24,
        paddingHorizontal: 18,
    },
    h1: {
        fontFamily: "GS3",
        color: "#000",
        fontSize: 24,
    },



})