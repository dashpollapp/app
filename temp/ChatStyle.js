import { StyleSheet, Platform,Dimensions } from "react-native";

export default StyleSheet.create({
    SendImg: {
        height: 22,
        width: 22,
        margin: 12,
    },
    
    //Chat: Leiste Unten
    AddMediaImg: {
        height: 22,
        width: 22,
        margin: 12,
    },
    MainInput: {
        fontFamily: "GS2",
        color: "#000",
        fontSize: 14,  
        marginHorizontal: 8,
        paddingVertical: 4,
        flex: 1,  
    },
    navBotBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.75)",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        zIndex: 1000,
    },

    
    
    
    //Texte
    
    time: {
        fontFamily: "GS1",
        color: "#aaa",
        fontSize: 12, 
        alignSelf: "flex-end",     
    },

    msgText: {
        fontFamily: "GS2",
        color: "#444",
        fontSize: 15,    
    },
    infoText: {
        fontFamily: "GS2",
        color: "#eee",
        fontSize: 12,  
    },



    BackgroundImg: {
        width: null,
        height: null,
        flex: 1,
        position: "absolute",
        top: 83,
        left: 0,
        right: 0,
        bottom: (46 - 12) * 0,
   },
    chatScroll: {
        zIndex: 10,
        backgroundColor: "rgba(0,0,0,0.1)",
        padding: 8,
    },

    chatRow: {
        
    },
    chatBox: {
        backgroundColor: "rgba(255,255,255,0.95)",
        borderRadius: 12,
        paddingHorizontal: 6,
        paddingVertical: 4,
    },
    chatBoxLeft: {
        alignSelf: "flex-start",
        borderTopLeftRadius: 4,
    },
    chatBoxRight: {
        alignSelf: "flex-end",  
        borderBottomRightRadius: 4,      
    },   
    chatBoxCenter: {
        alignSelf: "center",
        paddingHorizontal: 12, 
        backgroundColor: "rgba(0,0,0,0.95)",    
    },   
 










    personName: {
        fontFamily: "GS3",
        color: "#111",
        fontSize: 16,
    },
    personStatus: {
        fontFamily: "GS2",
        color: "#777",
        fontSize: 12,
    },
    personStatusOnline: {
        color: "#23ba62",
    },
    navTopCloseImg: {
        height: 16,
        width: 16,
        marginHorizontal: 8,
    },
    navTopPerson: {
        flexDirection: "row",
    },
    navTopBox: {
        marginTop: 22,
        padding: 8,
        flexDirection: "row",
        backgroundColor: "rgba(255,255,255,0.8)",
        borderBottomWidth: 1,
        borderBottomColor: "#999",
        justifyContent: "space-between",
        alignItems: "center",
    },
    navTopPB: {
        height: 44,
        width: 44,
        borderRadius: 44 / 2.4,
        marginRight: 8,
    },
    
})