import { StyleSheet, Platform,Dimensions } from "react-native";

export default StyleSheet.create({

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
        backgroundColor: "rgba(0,0,0,0.05)",
        height: "100%",
        width: "100%",
        zIndex: 0,
        flex: 1,
    },




    h1: {
        fontSize: 26,
        fontFamily: "GS3",
        color: "#000",
        fontWeight: "500",
    },
    link: {
        fontSize: 18,
        fontFamily: "GS1",
        color: "#000",
        fontWeight: "500",
        color: "#0984e3",
    },




    //*Später in eigener CSS (polls)
    pTitle: {
        fontSize: 20,
        fontFamily: "GS3",
        color: "#000",
        fontWeight: "500",
        textAlign: "center",
        paddingHorizontal: 4,
    },

    //Ein Beitrag
    post: {
        padding: 4,    
        marginHorizontal: 8,
        marginBottom: 44,
        borderTopWidth: 1,
        borderColor: "#e5e5e5",
        paddingTop: 12,
    },
    posts: {
        padding: 8,
        paddingTop: 32,
        backgroundColor: "#fff",
        borderRadius: 12,
    },


    //Autor box
    pSubtitle: {
        color: "#aaa",
        fontFamily: "GS2",
        fontSize: 13,
    },
    pPB: {
        height: 22,
        width: 22,
        borderRadius: 22 / 2.35,
        backgroundColor: "#aaa",
        marginHorizontal: 4,
    },
    authorBox: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 4,
    },





    pPostHeader: {
        flex: 1,
        //center: alignItems: "center",       
        marginBottom: 16,
        padding: 4,
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
