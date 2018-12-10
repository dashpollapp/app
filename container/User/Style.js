import { StyleSheet, Dimensions, Platform } from react - native;


const c = StyleSheet.create({

    answer: {
        backgroundColor: "rgba(0,0,0,0.1)",
        borderRadius: 12,
        borderBottomLeftRadius: 4,
        padding: 8,
        marginVertical: 4,
    },

    image: {
        borderRadius: 4,
        flex: 1,
        alignSelf: stretch,
        width: undefined,
        height: undefined,
    },

    input: {
        backgroundColor: "rgba(0,0,0,0.1)",
        flex: 1,
        padding: 12,
        borderRadius: 12,
        fontFamily: "GS1",
        color: "#333",
        fontSize: 16,
        marginHorizontal: 4,
    },

    sendButton: {
        paddingHorizontal: 8,
        paddingRight: 8 + 12,
    },
    sendImage: {
        height: 24,
        width: 24,
        opacity: 0.2,
    },

    bottomInputBox: {
        flex: 1,
        justifyContent: center,
        alignItems: center,

        paddingHorizontal: 0,
        paddingVertical: 6,
        flexDirection: "row",

        height: 50,
        position: "absolute",
        bottom: 50,
        zIndex: 1000000,
        width: "100%",
        backgroundColor: "#fff",

        paddingLeft: 8,
    },





    messageSender: {
        fontFamily: "GS3",
        fontSize: 13,
    },
    messageText: {
        fontFamily: "GS1",
        fontSize: 15,
        color: "#222",
        fontSize: 16,
    },
    messageTime: {
        fontFamily: "GS1",
        color: "#888",
        fontSize: 12,
        textAlign: "right",
        marginTop: -2,
    },

    messageRight: {
        alignSelf: "flex-end",
        flex: 1,
        borderBottomRightRadius: 6,
    },

    messageLeft: {
        borderTopLeftRadius: 6,
    },

    message: {
        maxWidth: "80%",
        padding: 8,
        paddingVertical: 4,
        borderRadius: 16,
        backgroundColor: "rgba(255,255,255,0.9)",
        flex: 1,
        flexDirection: "column",


    },
    messageRow: {
        flex: 1,
        paddingVertical: 4,
        width: "100%",
        flexDirection: "column",
    },
    body: {
        backgroundColor: "transparent",
        padding: 8,
    },
})
/* Suche */
const s = StyleSheet.create({

    popupOut: {
        height: Dimensions.get(window).height,
        width: "100%",
        position: "absolute",
        zIndex: 10000,
        margin: 0,
        top: 0,
    },
    popup: {
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.7)",
        paddingVertical: 32,
    },

    users: {
        flexDirection: "row",
        maxHeight: 220,
        paddingLeft: 16,
    },
    user: {
        backgroundColor: "rgba(255,255,255,0.8)",
        borderRadius: 4,
        overflow: "hidden",
        width: 128,
        marginRight: 8,
        height: "100%",
    },
    userImage: {
        height: 128,
        width: 128,
    },
    userInfos: {
        padding: 8,
        maxWidth: "100%",
        flex: 1,
        justifyContent: "center",
    },
    userFullname: {
        fontFamily: "GS2",
        fontSize: 16,
        textAlign: "center",
    },
    userUsername: {
        fontFamily: "GS1",
        fontSize: 12,
        color: "#0984e3",
        textAlign: "center",
    },
    userReson: {
        fontFamily: "GS1",
        color: "#777",
        fontSize: 12,
        textAlign: "center",
    },

})


/* Creative Board */
const login = StyleSheet.create({


    button: {
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 12,//50%
        marginTop: 4,
        marginBottom: 8,

        backgroundColor: "#2ed573",

    },
    buttonText: {
        textAlign: "center",
        color: "#000",
        fontFamily: "GS3",
        fontSize: 18,
    },
    agbText: {
        marginTop: 32,
        marginHorizontal: 4,
        color: "#000",
        fontFamily: "GS1",
        fontSize: 14,
    },
    agbTextHref: {
        color: "#2a9fed",
        fontFamily: "GS1",
        fontSize: 14,
    },

    RegisterAlphaHeadingText: {
        color: "#777",
        fontFamily: "GS1",
        fontSize: 15,
        textAlign: "center",
    },
    RegisterAlphaText: {
        color: "#111",
        fontFamily: "GS3",
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
        fontFamily: "GS1",
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
        maxHeight: 120,
        overflow: "hidden",
        borderRadius: 8,
        marginHorizontal: 4,
    },
    foundUser: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
        width: 100,
        height: "100%",
        backgroundColor: "#dfe6e9",
        borderRadius: 4,
        marginRight: 6,
        padding: 16,
    },
    foundPB: {
        width: 52,
        height: 52,
        borderRadius: 26,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: "#fff",
    },
    foundUsernameText: {
        fontFamily: "GS1",
        color: "#2d3436",
        textAlign: "center",
    },

    /* Genauere Fehlerbeschreibung*/
    TextErrorDescription: {
        color: "#636e72",
        fontFamily: "GS1",
        fontSize: 14,
        marginBottom: 8,
    },
    /* Beschreibung beim vergessen von Feldern, Oder Benutzername */
    TextError: {
        color: "#d63031",
        fontFamily: "GS1",
        fontSize: 18,
        marginBottom: 4,
    },
    /* Beschreibung */
    Text: {

        color: "#444",
        fontFamily: "GS1",
        fontSize: 16,
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
        fontFamily: "GS1",
        fontSize: 15,


    },
    /* Die View um den Login bereich*/
    body: {
        padding: 16,
        paddingVertical: 32,
    }
})
const loader = StyleSheet.create({
    tipp: {
        position: "absolute",
        bottom: 50,
        color: "#898989",
        fontFamily: "GS1",
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
const cc = StyleSheet.create({

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




/* Profile */
const profile = StyleSheet.create({

    scrollDownText: {
        color: "#fff",
        fontFamily: "GS3",
    },
    scrollDownBox: {
        backgroundColor: "#0984e3",
        position: "absolute",
        bottom: 100,
        zIndex: 60,
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 12,//50%
        alignSelf: "center",
    },



    profileScroll: {
        position: "absolute",
        top: 0,
        backgroundColor: "#aaa",
    },
    pbPush: {
        width: Dimensions.get(window).width,
        height: Dimensions.get(window).width,
        marginBottom: -12,
    },
    followerInfos: {
        marginTop: -32,
        padding: 24,
        paddingBottom: 24,
        backgroundColor: "#fff",
        borderRadius: 12,//50px
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        zIndex: 10,
    },
    infos: {
        marginTop: -52,
        zIndex: 0,
        paddingTop: 64,
        paddingBottom: 12,
        backgroundColor: "#fff",
        borderRadius: 24,
        overflow: "hidden",
    },
    pbBox: {
        overflow: "hidden",
        top: 50,
        width: Dimensions.get(window).width,
        position: "absolute",
        textAlign: "center",
        backgroundColor: "#aaa",
        overflow: "hidden",
        borderRadius: 0,
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
        fontFamily: "GS3",
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
        fontFamily: "GS2",
        fontSize: 15,
        color: "#333",
    },
    followOn: {
        fontFamily: "GS3",
        fontSize: 15,
        color: "#111",
    },
    followerInfo: {
        fontFamily: "GS1",
        fontSize: 14,
        color: "#555",
    },
    infoName: {
        fontFamily: "GS3",
        fontSize: 14,
        color: "#fff",
        paddingLeft: 4,
    },
    infoContent: {
        fontFamily: "GS1",
        fontSize: 20,
        color: "rgba(255,255,255,1)",
        textShadowColor: rgba(0, 0, 0, 0.75),
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
        fontFamily: "GS2",
        fontSize: 18,
    },


});

/* Poll Create */
const pc = StyleSheet.create({
    p1Bar: {
        height: 12,
        width: "50%",
        borderRadius: 4,
        marginBottom: 8,
    },
    p1Answer: {
        color: "#111",
        fontFamily: "GS2",
        marginBottom: 4,
    },
    p1AddAnswer: {
        color: "#b2bec3",
        fontFamily: "GS1",
        marginTop: 8,
    },
    polltype: {
        marginBottom: 12,
    },
    polltypeCat: {
        fontSize: 14,
        fontFamily: "GS2",
        color: "#6c5ce7",
    },
    polltypeName: {
        fontSize: 14,
        fontFamily: "GS2",
        color: "#111",
    },
    polltypeDescription: {
        fontSize: 12,
        fontFamily: "GS1",
        color: "#636e72",
    },

    textContinue: {
        fontSize: 12,
        fontFamily: "GS1",
        color: "#636e72",
    },
    textPublic: {
        fontSize: 12,
        fontFamily: "GS2",
        color: "#2d3436",
    },
    sendButton: {
        backgroundColor: "transparent",
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
        fontFamily: "GS1",
    },
    inputTitle: {
        color: "#111",
        fontSize: 22,
        fontFamily: "GS3",
    },
    description: {
        marginTop: 12,
        fontFamily: "GS2",
        color: "#383838",
        fontSize: 16,
    },
    create: {
        padding: 12,
    },
});
export const css = StyleSheet.create({

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
        fontFamily: "GS3",
        fontSize: 20,
    },




    sendTime: {
        alignSelf: center,
        justifyContent: "flex-end",
        color: "#929684",
        marginRight: 4,
        fontSize: 14,
        fontFamily: "GS1",
        minWidth: 32,
    },
    sendTimeNew: {
        fontFamily: "GS3",
        color: "#36c187",
    },
    lastMessage: {
        fontSize: 15,
        color: "#55574e",
        margin: 0,
        padding: 0,
        fontFamily: "GS1",
        //ellipsizeMode: "tail",
        marginTop: -2,
    },
    lastMessageBold: {
        color: "#55574e",
        fontFamily: "GS2",
        flex: 1,
        flexDirection: "row",
    },
    name: {
        fontSize: 17,
        color: "#000",
        margin: 0,
        padding: 0,
        fontFamily: "GS3",
    },
    text: {
        fontFamily: "GS2",
        alignSelf: center,
        marginLeft: 12,
        flex: 1,
    },
    chat: {
        width: "100%",
        backgroundColor: "#fff",
        paddingVertical: 9,
        paddingHorizontal: 9,

        flexDirection: row,
        alignItems: center,
    },
    chatNew: {
        borderLeftWidth: 8,
        borderColor: "#36c187",
        backgroundColor: "#f2f2f2",
    },

    /*================================================================================================================================================*/
    /*================================================================================================================================================*/
    /*================================================================================================================================================*/
    /*================================================================================================================================================*/
    /*================================================================================================================================================*/
    /*================================================================================================================================================*/


    corner: {
        position: "absolute",
        zIndex: 40000000000000,
        height: 5,
        width: 5,
        /* Nur bei IOS */
        opacity: Platform.OS === ios ? 1 : 0,
    },
    cornerTL: {
        top: 0,
        left: 0,
    },
    cornerTR: {
        top: 0,
        right: 0,
        transform: [{ rotate: 90deg }],
    },
    cornerBL: {
        bottom: 0,
        left: 0,
        transform: [{ rotate: -90deg }],
    },
    cornerBR: {
        bottom: 0,
        right: 0,
        transform: [{ rotate: 180deg }],
    },

    bottomImage: {
        height: 24,
        width: 24,

    },
    bottomItem: {
        width: "25%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },


    bottomPosition: {
        marginTop: -4,
        height: 12,
        width: Dimensions.get(window).width / 4 - 32,
        marginLeft: (Dimensions.get(window).width * 0.045),

        /* polls: 0.29; chats: 0.045;   */

        backgroundColor: "#000",
        borderRadius: 4,
        position: "absolute",
        zIndex: 9999999999999999,
        bottom: -8,

    },

    bottom: {
        position: "absolute",
        flex: 1,
        flexDirection: row,
        width: "100%",
        height: 50,

        zIndex: 90,

        bottom: 0,
        backgroundColor: "#fff",

        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowOffset: {
            height: 0,
            width: 0
        },
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
        fontSize: 18,
        marginLeft: 4,
        fontFamily: "GS2",
        color: "#222",
    },


    topDropdown: {
        position: "absolute",
        top: 50,
    },
    topDropdownItem: {

    },
    topDropdownText: {

    },


    back: {
        opacity: 0.5,
        height: 24,
        width: 24,
        marginLeft: 8,
    },
    myPB: {
        height: 36,
        width: 36,
        margin: 7,
        borderRadius: 36 / 2,
        justifyContent: center,
        alignItems: center,
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
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowOffset: {
            height: 0,
            width: 0
        },
        backgroundColor: "#fff",

        zIndex: 1000000,


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
        width: (Dimensions.get(window).width / 2) - 20,
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
        transform: [{ rotate: 180deg }],
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
        flexDirection: row,
        justifyContent: space - between,
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
        fontFamily: "GS1",
        color: "#797A75",
        flex: 1,
    },
    postFakeShadow: {
        marginTop: 16,
        width: Dimensions.get(window).width + 24,
        marginLeft: -12,
        height: 6,
    },
    p1More: {
        marginTop: 12,
        fontFamily: "GS1",
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
        fontFamily: "GS2",
    },

    /* Der Teil einer Umfrage*/
    PercentText: {
        fontFamily: "GS3",
        marginLeft: 8,
        marginRight: 8,
    },
    VotesAmountText: {
        fontFamily: "GS1",
        color: "#888",
        fontSize: 12,
        alignSelf: flex - end,
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
        fontFamily: "GS1",
        minWidth: 32,
        marginTop: 12,
    },
    lastMessage: {
        fontSize: 14,
        margin: 0,
        padding: 0,
        fontFamily: "GS1",
        //ellipsizeMode: "tail",
        color: "#969191",
    },
    title: {
        color: "#1c1f21",
        margin: 0,
        padding: 0,
        fontFamily: "GS3",
        fontSize: 15,
        marginBottom: 0,

        lineHeight: 18,

    },
    text: {
        fontFamily: "GS1",
        alignSelf: center,
        marginLeft: 8,
        flex: 1,
        marginTop: 6,
    },
    pb: {
        height: 64,
        width: 28,
        borderRadius: 6,

        //für Inhalt (zB Wetter-°C)
        justifyContent: center,
        alignItems: center
    },

    //Umfragen-Header (aka. AuthorBox)
    postInfo: {
        backgroundColor: "#fff",
        flexDirection: row,
        marginBottom: 12,
    },
    polls: {
        height: "100%",
        borderRadius: 12,
    },
    //Diese klasse bleibt so wegen Polltype 21
    row: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    body: {
        width: "100%",
        height: "100%",
    },
    out: {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",

        paddingTop: Platform.OS === ios ? 22 : 24,
    },

});