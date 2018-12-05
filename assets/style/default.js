import { StyleSheet, Platform,Dimensions } from "react-native";

export default StyleSheet.create({


    h3: {
        fontFamily: "GS2",
        fontSize: 16,
        color: "#666",
        opacity: 0.8, //für b
    },
    b: {
        fontFamily: "GS3",
        opacity: 1,
    },


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




    //Benutzerboxen
    /*
    <View style={login.users}>
        <TouchableOpacity>
            <View style={[login.user_saves, login.user]}>
                <Image style={login.userPB} source={DefaultPB}/>
                <Text style={login.userFullname}>Max Baier</Text>
                <Text style={login.userName}>@max</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={login.user}>
                <Image style={login.userPB} source={DefaultPB}/>
                <Text style={login.userFullname}>Max Baier</Text>
                <Text style={login.userName}>@max</Text>
            </View>
        </TouchableOpacity>
    </View>
    */
    users: {
        flexDirection: "row",
        marginBottom: 24,
    },
    user: {
        padding: 16,
        borderRadius: 16,
    },
    userPB: {
        height: 64,
        width: 64,
        borderRadius: 28,
        marginVertical: 8,
    },
    userFullname: {
        fontSize: 12,
        color: "#333",
        fontFamily: "GS3",
        textAlign: "center",
    },
    userName: {
        fontSize: 10,
        color: "#0984e3",
        fontFamily: "GS2",
        textAlign: "center",
    },


    user_save: {
        backgroundColor: "rgba(0,0,0,0.03)",
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