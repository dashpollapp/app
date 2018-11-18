import { StyleSheet } from "react-native";
import { Dimensions, Platform } from "react-native";

/* Polltype Auswahl */
export var s = StyleSheet.create({




    connectionBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 12,
        marginVertical: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 12,
        backgroundColor: "#fff",
    },
    connectionText: {
        fontFamily: "GS3",
        color: "#444",
    },
    connectionPoints: {
        flexDirection: "row",
    },
    connectionPoint: {
        margin: 2,
        width: 9,
        height: 9,
        backgroundColor: "#ccc",
        borderRadius: 4,
    },
    connectionPointGood: {
        backgroundColor: "#25ea71",
    },
    connectionPointOkay: {
        backgroundColor: "#4e4f4e",
    },
    connectionPointBad: {
        backgroundColor: "#db3f27",
    },


    logout: {
        backgroundColor: "#fff"
    },
    itemBar: {
        width: "100%",
        height: 0.5,
        backgroundColor: "rgba(0,0,0,0.05)"
    },
    item: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "rgba(0,0,0,0.05)",
    },
    name: {
        color: "#333",
        fontFamily: "Poppins500",
        fontSize: 18
    },
    description: {
        marginTop: -4,
        color: "#777",
        fontFamily: "Poppins400",
        fontSize: 13,
        width: "100%"
    }
});
/* Polltype Auswahl */

export var csss = StyleSheet.create({
    navTopPush: {
        width: "100%",
        height: 50,
        borderRadius: 12
    },
    chatSelected: {
        backgroundColor: "#efefef"
    },

    //Wetter
    chatWeather: {},
    //Ersmal so
    chatWeatherCrad: {
        fontFamily: "Poppins600",
        fontSize: 20
    },

    sendTime: {
        alignSelf: "center",
        justifyContent: "flex-end",
        color: "#929684",
        marginRight: 4,
        fontSize: 14,
        fontFamily: "Poppins300",
        minWidth: 32
    },
    sendTimeNew: {
        fontFamily: "Poppins600",
        color: "#36c187"
    },
    lastMessage: {
        fontSize: 15,
        color: "#55574e",
        margin: 0,
        padding: 0,
        fontFamily: "Poppins400",
        marginTop: -2
    },
    lastMessageBold: {
        color: "#55574e",
        fontFamily: "Poppins500",
        flex: 1,
        flexDirection: "row"
    },
    name: {
        fontSize: 17,
        color: "#000",
        margin: 0,
        padding: 0,
        fontFamily: "Poppins600"
    },
    text: {
        fontFamily: "Poppins500",
        alignSelf: "center",
        marginLeft: 12,
        flex: 1
    },
    pb: {
        height: 52,
        width: 52,
        borderRadius: 26,

        //für Inhalt
        justifyContent: "center",
        alignItems: "center"
    },
    chat: {
        width: "100%",
        backgroundColor: "#fff",
        paddingVertical: 9,
        paddingHorizontal: 9,

        flexDirection: "row",
        alignItems: "center"
    },
    chatNew: {
        borderLeftWidth: 8,
        borderColor: "#36c187",
        backgroundColor: "#f2f2f2"
    },

    corner: {
        position: "absolute",
        zIndex: 4000,
        height: 5,
        width: 5,
        /* Nur bei IOS */
        opacity: Platform.OS === "ios" ? 1 : 0
    },
    cornerTL: {
        top: 0,
        left: 0
    },
    cornerTR: {
        top: 0,
        right: 0,
        transform: [{ rotate: "90deg" }]
    },
    cornerBL: {
        bottom: 0,
        left: 0,
        transform: [{ rotate: "-90deg" }]
    },
    cornerBR: {
        bottom: 0,
        right: 0,
        transform: [{ rotate: "180deg" }]
    },

    bottomImage: {
        height: 24,
        width: 24,
        /* sorgt bei Luca für Bug */
        flex: 1
    },

    bottomPosition: {
        marginTop: -4,
        height: 8,
        width: Dimensions.get("window").width / 4 - 32,
        marginLeft: Dimensions.get("window").width * 0.045,

        /* polls: 0.29; chats: 0.045;   */

        backgroundColor: "#000",
        borderRadius: 3,
        position: "absolute",
        bottom: 46
    },

    bottom: {
        position: "absolute",
        flex: 1,
        flexDirection: "row",
        width: "100%",
        height: 50,

        bottom: 0,
        backgroundColor: "#fff",

        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowOffset: {
            height: 0,
            width: 0
        }
    },
    bottomItem: {
        width: "25%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    bottomText: {
        width: "50%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },

    /**/

    close: {
        transform: [{ rotate: "45deg" }]
    },
    create: {
        height: 32,
        width: 32,
        margin: 12
    },
    navTopCenter: {
        flex: 1
    },
    logo: {
        height: "100%",
        width: 150,
        marginLeft: 8,
        alignSelf: "center"
    },
    windowTitle: {
        fontSize: 16,
        marginLeft: 4,
        fontFamily: "Poppins300",
        color: "#444"
    },
    myPB: {
        height: 36,
        width: 36,
        margin: 7,
        borderRadius: 36 / 2,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start",
        alignItems: "flex-start"
    },
    navTopBack: {
        opacity: 0.75,
        height: 18,
        width: 18,
        marginHorizontal: 12
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
        backgroundColor: "#fff"
    },

    navTopHelp: {
        position: "absolute",
        width: "100%",
        height: 24,
        zIndex: 1008,
        backgroundColor: "#fff"
    },

    navTopItem: {
        position: "absolute",
        height: "100%",
        width: "25%"
    },
    navTopItemOn: {
        borderBottomColor: "#333",
        borderBottomWidth: 4
    },
    navTopImg: {},

    p4: {},
    p4Toutch: {
        flexDirection: "row",
        alignSelf: "flex-end",

        alignItems: "center",
        justifyContent: "center"
    },
    p4Img: {
        height: 32,
        width: 32
    },

    p3: {},
    p3ImageOn: {
        opacity: 1,
        transform: [{ scale: 1.0 }],
        borderWidth: 4,
        borderColor: "#2f393e"
    },
    p3ImageOff: {
        opacity: 0.8,
        transform: [{ scale: 0.95 }]
    },
    p3Image: {
        opacity: 0.9,
        width: Dimensions.get("window").width / 2 - 20,
        aspectRatio: 1,
        margin: 4,
        borderRadius: 4
    },
    p3Images: {
        flex: 1,
        flexDirection: "row"
    },
    p3Percent: {
        marginTop: 4,
        flexDirection: "row",
        justifyContent: "space-around"
    },

    p2thumbDislike: {
        transform: [{ rotate: "180deg" }]
    },
    p2thumbImg: {
        height: 32,
        width: 32,
        margin: 8
    },
    p2thumb: {
        flexDirection: "row",
        alignItems: "center"
    },
    p2thumbs: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    p2: {},
    p2Bar: {
        height: 12,
        width: "100%",
        backgroundColor: "#868e89",
        borderRadius: 4,
        overflow: "hidden"
    },
    p2BarInner: {
        height: "100%",
        backgroundColor: "#21C192"
    },

    description: {
        fontFamily: "Poppins400",
        color: "#797A75",
        flex: 1
    },
    postFakeShadow: {
        marginTop: 16,
        width: Dimensions.get("window").width + 24,
        marginLeft: -12,
        height: 6
    },
    p1More: {
        marginTop: 12,
        fontFamily: "Poppins400",
        color: "#797A75"
    },
    p1Row: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    p1: {},
    p1Answer: {
        width: "100%",
        paddingBottom: 8
    },
    p1BarOn: {
        backgroundColor: "#21C192"
    },
    p1Bar: {
        minWidth: 4,
        height: 12,
        backgroundColor: "#6D736F",
        borderRadius: 4
    },
    p1AnswerText: {
        fontFamily: "Poppins500"
    },

    /* Der Teil einer Umfrage*/

    PercentText: {
        fontFamily: "Poppins700",
        marginLeft: 8,
        marginRight: 8
    },
    VotesAmountText: {
        fontFamily: "Poppins300",
        color: "#888",
        fontSize: 12,
        alignSelf: "flex-end",
        marginLeft: 8,
        marginRight: 8,
        marginTop: 4
    },
    poll: {
        paddingTop: 4
    },
    post: {
        padding: 12,
        marginBottom: -8,
        backgroundColor: "#fff"
    },
    postImage: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        marginBottom: 8,
        marginTop: 4
    },
    sendTime: {
        justifyContent: "flex-end",
        color: "#929684",
        marginRight: 4,
        fontSize: 14,
        fontFamily: "Poppins300",
        minWidth: 32,
        marginTop: 12
    },
    lastMessage: {
        fontSize: 14,
        margin: 0,
        padding: 0,
        fontFamily: "Poppins300",
        color: "#969191"
    },
    title: {
        color: "#1c1f21",
        margin: 0,
        padding: 0,
        fontFamily: "Poppins600",
        fontSize: 16,
        marginBottom: 0,

        lineHeight: 18
    },
    text: {
        fontFamily: "Poppins500",
        alignSelf: "center",
        marginLeft: 12,
        flex: 1,
        marginTop: 6
    },
    pb: {
        height: 52,
        width: 52,
        borderRadius: 26,

        //für Inhalt (zB Wetter-°C)
        justifyContent: "center",
        alignItems: "center"
    },

    //Umfragen-Header (aka. AuthorBox)
    postInfo: {
        backgroundColor: "#fff",
        flexDirection: "row",
        marginBottom: 12
    },
    polls: {
        height: "100%",
        borderRadius: 12
    },
    row: {
        width: "100%",
        flex: 1,
        flexDirection: "row"
    },
    body: {
        width: "100%",
        height: "100%"
    },
    out: {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",

        paddingTop: Platform.OS === "ios" ? 22 : 24
    }
});
