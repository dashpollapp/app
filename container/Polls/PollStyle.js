import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({

    box: {
        padding: 0,
        backgroundColor: "#fff",
        height: "100%",
        zIndex: 0,
    },




    h1: {
        fontSize: 26,
        fontFamily: Platform.OS === "ios" ? "Trebuchet MS" : "Roboto",
        color: "#000",
        fontWeight: "500",
    },
    link: {
        fontSize: 18,
        fontFamily: Platform.OS === "ios" ? "Trebuchet MS" : "Roboto",
        color: "#000",
        fontWeight: "500",
        color: "#0984e3",
    },




    //*Später in eigener CSS (polls)
    pTitle: {
        fontSize: 18,
        fontFamily: Platform.OS === "ios" ? "Trebuchet MS" : "Roboto",
        color: "#000",
        fontWeight: "500",
    },
    pSubtitle: {
        fontFamily: Platform.OS === "ios" ? "Trebuchet MS" : "Roboto",
    },

    //Ein Beitrag
    post: {
        padding: 4,    
        marginHorizontal: 8,
        marginBottom: 32,
    },
    posts: {
        padding: 8,
        paddingTop: 20,
    },

    pSubtitle: {
        color: "#aaa"
    },


    pPB: {
        height: 44,
        width: 44,
        borderRadius: 44 / 2.35,
        backgroundColor: "#aaa",
    },

    pPostHeader: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",       
        marginBottom: 8,
    },

    pPostHeaderText: {
        marginLeft: 8,
    },

    description: {
        color: "#444",
        fontSize: 16,
        fontFamily: "GS1",
        marginBottom: 12,
    },



    boxHeader: {
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.05)",
        padding: 12,
        paddingHorizontal: 18,
    },




    // < Poll - Anfang (Umfrageteil) ->
    poll: {
        
    },
    pollAnswerTitle: {
        fontFamily: "GS2",
        color: "#333",
        fontSize: 16,
    },
    pollPercentText: {
        fontFamily: "GS1",
        color: "#666",
        fontSize: 14,
    },
    // < / Poll - Ende (Umfrageteil) ->





    //Polltype Klassic (erstmal Polltype-1 bei mir)
    // (wird eh noch ausgelagert, müssten wir uns allgemein nochmal absprechen)
    // lg KM :)
    pt1: {

    },
    pt1Bar: {
        height: 16,
        marginTop: 2,
        marginRight: 8,

        alignItems: "center",
        display: "flex",
        flex: 1,
        flexDirection: 'row',
    },
    pt1BarInner: {
        borderRadius: 6,   
        height: "100%",
        minWidth: 4,
        marginRight: 4,
    },
    pt1Answer: {
        paddingVertical: 6,
    },




});
