import { StyleSheet } from 'react-native';
import { Dimensions, Platform } from 'react-native';

//Create vom 1.12.2018
export var c = StyleSheet.create({

})

export var createBlocks = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
    },
    imageBox: {
        padding: 8,
        flex: 5,
    },
    info: {
        height: "100%",
        padding: 8,
        flex: 10,
        justifyContent: "center",

    },
    item: {
        width: "100%",
        borderColor: "#eee",

        flexDirection: "row",

        justifyContent: "center",
        flex: 1,

        height: 82,
    },
    scroll: {
        paddingTop: 16,
    },





 
    h2: {
        fontSize: 16,
        fontFamily: "GS2",
        color: "#666",
        marginBottom: 16,
    },

    box: {
        backgroundColor: "#fff",
        height: "100%",
        paddingHorizontal: 16,
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 10,
        width: "100%",
        backgroundColor: "#8c7ae6",
        marginTop: 28,
        marginBottom: 120,
    },
    buttonText: {
        fontSize: 16,
        fontFamily: "GS2",
        color: "#fff",
    },
})
export var create = StyleSheet.create({
    inputTitle: {
        fontSize: 26,
        fontFamily: "GS3",
        flex: 1, 
    },
    inputDescription: {
        fontSize: 16,
        fontFamily: "GS2", 
        flex: 1, 
    },
    inputURL: {
        fontSize: 16,
        fontFamily: "GS1", 
        flex: 1, 
        marginTop: 24,
    },
    polltypeText: {
        fontSize: 16,
        fontFamily: "GS2",
        color: "#30a88c",
        marginVertical: 4,
        flex: 1, 
    }
})


//Alte CSS:
/* Alte CSS: Polltype Auswahl */
export var pcSelect = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
    },
    imageBox: {
        padding: 8,
        flex: 5,
    },
    info: {
        height: "100%",
        padding: 8,
        flex: 10,
        justifyContent: "center",

    },
    item: {
        width: "100%",
        borderColor: "#eee",

        flexDirection: "row",

        justifyContent: "center",
        flex: 1,

        height: 82,
    },
    scroll: {
        paddingTop: 4,
    },


})
/* Poll Create */
export var pc = StyleSheet.create({
    p1Bar: {
        height: 12,
        width: "50%",
        borderRadius: 4,
        marginBottom: 8,
    },
    p1Answer: {
        color: "#111",
        fontFamily: "Poppins500",
        marginBottom: 4,
    },
    p1AddAnswer: {
        color: "#b2bec3",
        fontFamily: "Poppins400",
        marginTop: 8,
    },
    polltype: {
        marginBottom: 12,
    },
    polltypeCat: {
        fontSize: 14,
        fontFamily: "Poppins500",
        color: "#6c5ce7",
    },
    polltypeName: {
        fontSize: 14,
        fontFamily: "Poppins500",
        color: "#111",
    },
    polltypeDescription: {
        fontSize: 12,
        fontFamily: "Poppins400",
        color: "#636e72",
    },

    textContinue: {
        fontSize: 12,
        fontFamily: "Poppins400",
        color: "#636e72",
    },
    textPublic: {
        fontSize: 12,
        fontFamily: "Poppins500",
        color: "#2d3436",
    },
    sendButton: {

    },

    mediaItem: {
        height: 52,
        width: 52,
        opacity: 0.65,
    },
    addMedia: {
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        height: 200,
        borderRadius: 4,
        marginTop: 12,
        marginBottom: 24,
    },
    inputDescription: {
        color: "#6d6d6d",
        fontSize: 16,
        fontFamily: "Poppins400",
    },
    inputTitle: {
        color: "#111",
        fontSize: 22,
        fontFamily: "Poppins700",
    },
    description: {
        marginTop: 12,
        fontFamily: "Poppins500",
        color: "#383838",
        fontSize: 16,
    },
    create: {
        padding: 12,
        height: "100%"
    },
});
/* Profile */
export var profile = StyleSheet.create({

    profileScroll: {
        position: "absolute",
        top: 0,
        backgroundColor: "#aaa",
    },

    pbPush: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        marginBottom: -12,
    },
    followerInfos: {
        padding: 16,
        backgroundColor: "#dfe6e9",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        zIndex: 10,
    },
    infos: {
        marginTop: -12,
        zIndex: 0,
        paddingTop: 24,
        paddingBottom: 12,
        backgroundColor: "#fff",
    },

    pbBox: {
        overflow: "hidden",
        top: 50,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        position: "absolute",
        textAlign: "center",
        backgroundColor: "#aaa",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        overflow: "hidden",
    },
    pb: {
        width: "100%",
        height: "100%",
        padding: 16,
    },
    optionPriority4: {
        backgroundColor: "rgba(242, 53, 53, 0.65)",
    },
    optionPriority3: {
        backgroundColor: "rgba(234, 164, 42, 0.65)",
    },
    optionPriority2: {
        backgroundColor: "rgba(234, 216, 18, 0.65)",
    },
    optionPriority1: {
        backgroundColor: "rgba(83, 188, 54, 0.65)",
    },
    optionPriorityText: {
        fontFamily: "Poppins600",
        color: "#111",
        fontSize: 16,
    },
    optionPriority: {
        width: "25%",
        minHeight: 44,
        color: "#111",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#fff",
        borderRightColor: "#fff",
    },
    optionPrioritySelector: {
        height: 52,
        backgroundColor: "rgba(200,200,200,0.25)",
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#fff",
        flexDirection: "row",
        marginTop: 8,
    },
    followOff: {
        fontFamily: "Poppins500",
        fontSize: 15,
        color: "#333",
    },
    followOn: {
        fontFamily: "Poppins600",
        fontSize: 15,
        color: "#111",
    },
    followerInfo: {
        fontFamily: "Poppins300",
        fontSize: 14,
        color: "#555",
    },
    infoName: {
        fontFamily: "Poppins500",
        fontSize: 14,
        color: "rgba(220,220,220,0.9)",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 0.0001, height: 0.0001 },
        textShadowRadius: 4,
        paddingLeft: 4,
    },
    infoContent: {
        fontFamily: "Poppins500",
        fontSize: 20,
        color: "rgba(255,255,255,1)",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 4,
        paddingLeft: 4,
    },
    info: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    followBox: {
        alignItems: "center",
    },
    pal: {
        fontFamily: "Poppins500",
        fontSize: 18,
    },


});
/* Creative Board */
export var login = StyleSheet.create({


    button: {
        paddingVertical: 12,
        paddingHorizontal: 12,
        //borderRadius: "50%",
        marginTop: 4,
        marginBottom: 8,

        backgroundColor: "#2ed573",

    },
    buttonText: {
        textAlign: "center",
        color: "#000",
        fontFamily: "Poppins600",
        fontSize: 18,
    },
    agbText: {
        marginTop: 32,
        marginHorizontal: 4,
        color: "#000",
        fontFamily: "Poppins400",
        fontSize: 14,
    },
    agbTextHref: {
        color: "#2a9fed",
        fontFamily: "Poppins400",
        fontSize: 14,
    },

    RegisterAlphaHeadingText: {
        color: "#777",
        fontFamily: "Poppins300",
        fontSize: 15,
        textAlign: "center",
    },
    RegisterAlphaText: {
        color: "#111",
        fontFamily: "Poppins700",
        fontSize: 22,
        textAlign: "center",
        marginBottom: 64,
    },

    PasswordInputBox: {
        backgroundColor: "#dfe6e9",
        paddingHorizontal: 8,
        paddingVertical: 0,
        borderRadius: 4,
        marginBottom: 16,
        flexDirection: "row",
        justifyContent: "flex-start"

    },
    PasswordInput: {
        flex: 1,
        paddingVertical: 8,
        color: "#333",
        fontFamily: "Poppins300",
        fontSize: 15,
    },
    PasswordInputToggle: {},
    PasswordInputToggleImg: {
        height: 32,
        width: 32,
        margin: 4,
    },


    space: {
        width: "100%",
        height: 32,
    },
    foundUserSelected: {
        backgroundColor: "#74b9ff",
    },

    /* Ergebnisse beim Username eingeben */
    foundUsers: {
        flexDirection: "row",
        maxHeight: 170,
        overflow: "hidden",
        borderRadius: 8,
        marginHorizontal: 4,
    },
    foundUser: {
        alignItems: "center",
        justifyContent: "center",
        width: 130,
        height: "100%",
        backgroundColor: "#dfe6e9",
        borderRadius: 4,
        marginRight: 6,
        padding: 16,
    },
    foundPB: {
        width: 88,
        height: 88,
        borderRadius: 44,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: "#fff",
    },
    foundUsernameText: {
        fontFamily: "Poppins400",
        color: "#2d3436",
        textAlign: "center",
    },

    /* Genauere Fehlerbeschreibung*/
    TextErrorDescription: {
        color: "#636e72",
        fontFamily: "Poppins300",
        fontSize: 14,
        marginBottom: 8,
    },
    /* Beschreibung beim vergessen von Feldern, Oder Benutzername */
    TextError: {
        color: "#d63031",
        fontFamily: "Poppins400",
        fontSize: 18,
        marginBottom: 4,
    },
    /* Beschreibung */
    Text: {

        color: "#444",
        fontFamily: "Poppins400",
        fontSize: 18,
        marginBottom: 4,
    },
    /* Input für: Username, */
    Input: {
        backgroundColor: "#dfe6e9",
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 4,
        marginBottom: 44,

        color: "#333",
        fontFamily: "Poppins300",
        fontSize: 15,


    },
    /* Die View um den Login bereich*/
    body: {
        padding: 16,
        paddingVertical: 32,
    }
})
export var loader = StyleSheet.create({
    tipp: {
        position: "absolute",
        bottom: 50,
        color: "#898989",
        fontFamily: "Poppins300",
        paddingVertical: 24,
        paddingHorizontal: 52,
        alignItems: "center",
        textAlign: "center",
        fontSize: 14,
    },
    centerAll: {
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        marginTop: -128,
        height: 167,
        width: 452,
    },
})
/* Creative Board */
export var cc = StyleSheet.create({

    ror: {
        flexDirection: "row",
        minHeight: 44,
    },
    col1: {
        width: "25%",
        minHeight: 1,
    },
    col2: {
        width: "50%",
        minHeight: 1,
    },
    col3: {
        width: "75%",
        minHeight: 1,
    },
    col4: {
        width: "100%",
        minHeight: 1,
    },
    color: {
        backgroundColor: "blue",
    }



});

export var css = StyleSheet.create({

    navTopPush: {
        width: "100%",
        height: 50,
        borderRadius: 12,
    },
    chatSelected: {
        backgroundColor: "#efefef",
    },

    //Wetter
    chatWeather: {

    },
    //Ersmal so
    chatWeatherCrad: {
        fontFamily: "Poppins600",
        fontSize: 20,
    },




    sendTime: {
        alignSelf: 'center',
        justifyContent: "flex-end",
        color: "#929684",
        marginRight: 4,
        fontSize: 14,
        fontFamily: "Poppins300",
        minWidth: 32,
    },
    sendTimeNew: {
        fontFamily: "Poppins600",
        color: "#36c187",
    },
    lastMessage: {
        fontSize: 15,
        color: "#55574e",
        margin: 0,
        padding: 0,
        fontFamily: "Poppins400",
        marginTop: -2,
    },
    lastMessageBold: {
        color: "#55574e",
        fontFamily: "Poppins500",
        flex: 1,
        flexDirection: "row",
    },
    name: {
        fontSize: 17,
        color: "#000",
        margin: 0,
        padding: 0,
        fontFamily: "Poppins600",
    },
    text: {
        fontFamily: "Poppins500",
        alignSelf: 'center',
        marginLeft: 12,
        flex: 1,
    },
    pb: {
        height: 52,
        width: 52,
        borderRadius: 26,

        //für Inhalt 
        justifyContent: 'center',
        alignItems: 'center'
    },
    chat: {
        width: "100%",
        backgroundColor: "#fff",
        paddingVertical: 9,
        paddingHorizontal: 9,

        flexDirection: 'row',
        alignItems: 'center',
    },
    chatNew: {
        borderLeftWidth: 8,
        borderColor: "#36c187",
        backgroundColor: "#f2f2f2",
    },



    corner: {
        position: "absolute",
        zIndex: 4000,
        height: 5,
        width: 5,
        /* Nur bei IOS */
        opacity: Platform.OS === 'ios' ? 1 : 0,
    },
    cornerTL: {
        top: 0,
        left: 0,
    },
    cornerTR: {
        top: 0,
        right: 0,
        transform: [{ rotate: '90deg' }],
    },
    cornerBL: {
        bottom: 0,
        left: 0,
        transform: [{ rotate: '-90deg' }],
    },
    cornerBR: {
        bottom: 0,
        right: 0,
        transform: [{ rotate: '180deg' }],
    },

    bottomImage: {
        height: 24,
        width: 24,
        /* sorgt bei Luca für Bug */
        flex: 1,
    },

    bottomPosition: {
        marginTop: -4,
        height: 8,
        width: Dimensions.get('window').width / 4 - 32,
        marginLeft: (Dimensions.get('window').width * 0.045),

        /* polls: 0.29; chats: 0.045;   */

        backgroundColor: "#000",
        borderRadius: 3,
        position: "absolute",
        bottom: 46,

    },

    bottom: {
        /*position: "absolute",
        flex: 1, 
        flexDirection: 'row',
        width: "100%",
        height: 50,
     
 

        bottom: 0,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: {
            height: 4,
            width: 0
        },
        elevation: 5,
        backgroundColor: "#fff",*/
        position: "absolute",
        flex: 1,
        flexDirection: 'row',
        width: "100%",
        height: 50,

        bottom: 0,
        justifyContent: 'space-around',
        alignItems: "center",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: {
            height: 4,
            width: 0
        },
        elevation: 5,
        backgroundColor: "#fff",

    },
    bottomItem: {
        width: "25%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    bottomText: {
        width: "50%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },


    /**/

    close: {
        transform: [
            { rotate: "45deg" },
        ],
    },
    create: {
        height: 32,
        width: 32,
        margin: 12,

    },
    navTopCenter: {
        flex: 1,
    },
    logo: {
        height: "100%",
        width: 150,
        marginLeft: 8,
        alignSelf: "center",
    },
    windowTitle: {
        fontSize: 16,
        marginLeft: 4,
        fontFamily: "Poppins300",
        color: "#444",
    },
    myPB: {
        height: 36,
        width: 36,
        margin: 7,
        borderRadius: 36 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "flex-start",
        alignItems: "flex-start",
    },
    navTopBack: {
        opacity: 0.75,
        height: 18,
        width: 18,
        marginHorizontal: 12,
    },
    navTop: {

        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 50,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: {
            height: 4,
            width: 0
        },
        elevation: 5,
        backgroundColor: "#fff",


    },

    navTopHelp: {


        position: "absolute",
        width: "100%",
        height: 24,
        zIndex: 1008,
        backgroundColor: "#fff",


    },

    navTopItem: {
        position: "absolute",
        height: "100%",
        width: "25%",
    },
    navTopItemOn: {
        borderBottomColor: "#333",
        borderBottomWidth: 4,
    },
    navTopImg: {

    },


    p4: {},
    p4Toutch: {
        flexDirection: "row",
        alignSelf: "flex-end",

        alignItems: "center",
        justifyContent: "center",
    },
    p4Img: {

        height: 32,
        width: 32,
    },




    p3: {

    },
    p3ImageOn: {
        opacity: 1,
        transform: [
            { scale: 1.00 },
        ],
        borderWidth: 4,
        borderColor: "#2f393e",
    },
    p3ImageOff: {
        opacity: 0.8,
        transform: [
            { scale: 0.95 },
        ],
    },
    p3Image: {
        opacity: 0.9,
        width: (Dimensions.get('window').width / 2) - 20,
        aspectRatio: 1,
        margin: 4,
        borderRadius: 4,
    },
    p3Images: {
        flex: 1,
        flexDirection: "row",
    },
    p3Percent: {
        marginTop: 4,
        flexDirection: "row",
        justifyContent: "space-around",
    },



    p2thumbDislike: {
        transform: [{ rotate: '180deg' }],
    },
    p2thumbImg: {
        height: 32,
        width: 32,
        margin: 8,
    },
    p2thumb: {
        flexDirection: "row",
        alignItems: "center",
    },
    p2thumbs: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    p2: {

    },
    p2Bar: {
        height: 12,
        width: "100%",
        backgroundColor: "#868e89",
        borderRadius: 4,
        overflow: "hidden",
    },
    p2BarInner: {
        height: "100%",
        backgroundColor: "#21C192",
    },




    description: {
        fontFamily: "Poppins400",
        color: "#797A75",
        flex: 1,
    },
    postFakeShadow: {
        marginTop: 16,
        width: Dimensions.get('window').width + 24,
        marginLeft: -12,
        height: 6,
    },
    p1More: {
        marginTop: 12,
        fontFamily: "Poppins400",
        color: "#797A75",
    },
    p1Row: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    p1: {

    },
    p1Answer: {
        width: "100%",
        paddingBottom: 8,
    },
    p1BarOn: {
        backgroundColor: "#21C192",
    },
    p1Bar: {
        minWidth: 4,
        height: 12,
        backgroundColor: "#6D736F",
        borderRadius: 4,
    },
    p1AnswerText: {
        fontFamily: "Poppins500",
    },

    /* Der Teil einer Umfrage*/
    PercentText: {
        fontFamily: "Poppins700",
        marginLeft: 8,
        marginRight: 8,
    },
    VotesAmountText: {
        fontFamily: "Poppins300",
        color: "#888",
        fontSize: 12,
        alignSelf: 'flex-end',
        marginLeft: 8,
        marginRight: 8,
        marginTop: 4,
    },
    poll: {
        paddingTop: 4,
    },
    post: {
        padding: 12,
        marginBottom: -8,
        backgroundColor: "#fff",
    },
    postImage: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        marginBottom: 8,
        marginTop: 4,
    },
    sendTime: {
        justifyContent: "flex-end",
        color: "#929684",
        marginRight: 4,
        fontSize: 14,
        fontFamily: "Poppins300",
        minWidth: 32,
        marginTop: 12,
    },
    lastMessage: {
        fontSize: 14,
        margin: 0,
        padding: 0,
        fontFamily: "Poppins300",
        color: "#969191",
    },
    title: {
        color: "#1c1f21",
        margin: 0,
        padding: 0,
        fontFamily: "Poppins600",
        fontSize: 16,
        marginBottom: 0,

        lineHeight: 18,

    },
    text: {
        fontFamily: "Poppins500",
        alignSelf: 'center',
        marginLeft: 12,
        flex: 1,
        marginTop: 6,
    },
    pb: {
        height: 52,
        width: 52,
        borderRadius: 26,

        //für Inhalt (zB Wetter-°C)
        justifyContent: 'center',
        alignItems: 'center'
    },

    //Umfragen-Header (aka. AuthorBox)
    postInfo: {
        backgroundColor: "#fff",
        flexDirection: 'row',
        marginBottom: 12,
    },
    polls: {
        height: "100%",
        borderRadius: 12,
    },
    row: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
    },
    body: {
        width: "100%",
        height: "100%"
    },
    out: {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        paddingTop: Platform.OS === 'ios' ? 22 : 24,
    },

});
