import { StyleSheet } from "react-native";

export default StyleSheet.create({
    box: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        paddingTop: 26,
        zIndex: 1000,
        maxHeight: 52 + 24,
        backgroundColor: "#fff",

      
        

        alignSelf: "stretch",
        flex: 1,
        padding: 8,
        paddingLeft: 18,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: "#ddd",
    },
    mainItem: {
        display: "flex"
    },
    mainItemLogoImg: {
        height: 30,
        width: 90
    },
    mainItemPbImg: {
        height: 36,
        width: 36,
        borderRadius: 15
    },
    pageInfo: {
        flex: 1
    },
    push: {
        height: 72, //82 bei android
        width: "100%",

    }
});
