import { StyleSheet, } from "react-native";

export const se = StyleSheet.create({

    box: {
        paddingTop: 24,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        height: "100%",
    },
    input: {
        width: "100%",
        backgroundColor: "rgba(0,0,0,0)",
        paddingVertical: 32,
        paddingHorizontal: 32,

        fontFamily: "GS2",
        color: "#666",
        textAlign: "center",
        fontSize: 18,
    },
    closeImg: {
        height: 18,
        width: 18,
        position: "absolute",
        right: 0,
        top: 8,
    },


    results: {
        marginTop: 32,
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
    },



    //HAshtags
    hashtagList: {
        flexDirection: "row",
    },
    hashtag: {
        backgroundColor: "#222",
        borderRadius: 5,
        marginRight: 8,
        paddingHorizontal: 8,
        paddingVertical: 2,
        height: 24,
        flexDirection: "row",
        alignItems: "center",
    },
    hashtagText: {
        color: "#fff",
        fontFamily: "GS2",
        fontSize: 13,
        paddingHorizontal: 2,
    },
    hashtagInfo: {
        color: "#ccc",
        fontFamily: "GS1",
        fontSize: 10,
        paddingHorizontal: 2,
    },



    //USer
    userList: {
        paddingVertical: 32,
    },
    userBox: {
        paddingHorizontal: 2,
        width: 108,
        alignItems: "center",
        textAlign: "center",
    },
    userImg: {
        height: 64,
        width: 64,
        borderRadius: 26,
        marginVertical: 4,
    },
    userFullname: {
        color: "#111",
        fontFamily: "GS3",
        fontSize: 13,
    },
    userName: {
        color: "#aaa",
        fontFamily: "GS1",
        fontSize: 12,
    },






    list: {
        width: "100%",
        height: "100%"
    },
    user: {
        backgroundColor: "#fff",
        width: "100%",
        height: 60,
        margin: 10,
    }
});
