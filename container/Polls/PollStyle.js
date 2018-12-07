import { StyleSheet, Platform,Dimensions } from "react-native";

export default StyleSheet.create({


// < Stats >
    statsPage: {
        backgroundColor: "#fff",
        height: "100%",
    },
    statsHeading: {
        fontFamily: "GS2",
        color: "#777",
        fontSize: 16,
    },
    statsShowPost: {
        marginBottom: 24,
        backgroundColor: "rgba(0,0,0,0.03)",
        //padding: 16,
        borderTopWidth: 6,
        borderBottomWidth: 6,
        borderColor: "#333",
    },




    //Statboxen oben
    stats: {
        flexDirection: "row",
        margin: 22,
    },
    stat: {
        backgroundColor: "rgba(0,0,0,0.0)",
        borderRadius: 8,
        marginRight: 12,
        paddingVertical: 8,
        paddingHorizontal: 8,
    },
    statAmount: {
        fontFamily: "GS3",
        color: "#111",
        fontSize: 19,
    },
    statTitle: {
        fontFamily: "GS2",
        color: "#666",
        fontSize: 11,
    },


// < / Stats >


    postOptions: {
        flexDirection: "row",
        marginBottom: 4,
    },
    postOption: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.05)",
        alignItems: "center",
        marginHorizontal: 4,
        borderRadius: 12,
        padding: 8,
    },
    postOptionImg: {
        height: 24,
        width: 24,
        opacity: 0.5,
    },

    loadingText: {
        fontFamily: "GS2",
        fontSize: 16,
        color: "#aaa",
        textAlign:"center",
        marginVertical: 32,
    },



    // < Mordal/Popup: Nicht mehr anzeigen >
    block:{
        backgroundColor: "rgba(0,0,0,0.1)",
        height: "100%",
        width: "100%",
        padding: 32,
    },
    blockHeading:{
        fontFamily: "GS3",
        color: "#222",
        fontSize: 22,
        textAlign: "center",
        marginVertical: 32,
    },


    blockItem: {
        marginVertical: 12,
        flexDirection: "row",
    },
    blockItemText: {
        fontFamily: "GS1",
        color: "#666",
        fontSize: 22,
    },
    blockItemBoolText: {
        fontFamily: "GS2",
        color: "#d63031",
        fontSize: 22,
        marginHorizontal: 12,
    },


    //Back btn:
    blockHideButton: {
        paddingVertical: 64,
    },
    blockHideText: {
        fontFamily: "GS2",
        color: "#0984e3",
        fontSize: 18,
        textAlign: "center",
    },


    // < / ENDE!: Mordal/Popup: Nicht mehr anzeigen >

    




    //URL in Beschreibung
    url: {
        color: "#0984e3",
    },


    image: {
        height: 200, //Die höhe muss berechnet werden 

        //Breite:
        width: Dimensions.get('window').width - 40,
        //Abrundung
        borderRadius: 12,
        //Hör auf meine CSS zu lesen
        marginBottom: 16,
        marginTop: 4,
    },

    spotify: {
        width: Dimensions.get('window').width - 40,
        borderRadius: 12,
        //Hör auf meine CSS zu lesen
        marginBottom: 16,
        marginTop: 4,
        height: 80, //Die höhe muss berechnet werden 
    },

    // .posts > .box
    box: {
        padding: 0,
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
        zIndex: 0,
        flex: 1,
    },




    




    //*Später in eigener CSS (polls)
    pTitle: {
        fontSize: 24,
        fontFamily: "GS2",
        color: "#111",
        fontWeight: "500",
    },

    //Ein Beitrag
    post: {
        paddingTop: 12,
        paddingBottom: 32,
        marginHorizontal: 16, //Rand bei Umfragen
    },
    posts: {
        //paddingTop: 32, -> Finde ohne Besser?
        backgroundColor: "#fff",
        borderRadius: 12,
    },


    //Autor box
    pSubtitle: {
        color: "#aaa",
        fontFamily: "GS2",
        fontSize: 14,
        marginHorizontal: 8,
    },
    pPB: {
        height: 24,
        width: 24,
        borderRadius: 24 / 2.35,
        backgroundColor: "#aaa",
    },
    authorBox: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 4,
    },





    pPostHeader: {
        flex: 1,
        //center: alignItems: "center",       
        marginBottom: 22,
        marginTop: 4,
    },


    description: {
        color: "#444",
        fontSize: 16,
        fontFamily: "GS1",
        marginBottom: 12,
    },



    boxHeader: {
        width: "100%",
        padding: 24,
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
        marginLeft: 4,
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
        marginRight: 44,

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
