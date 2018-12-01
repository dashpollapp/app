import { StyleSheet, Platform,Dimensions } from "react-native";

export default StyleSheet.create({

    // 1. Page Styles & Allgemeines
    page: {
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
        padding: 16,
    },

    



    // 2. Flexible Boxen
    row: {
        flexDirection: "row",
    },
    column: {
        flexDirection: "column",
    },

    jcCenter: {
        justifyContent: "center",
    },
    jcStart: {
        justifyContent: "flex-start",
    },

    aiStart: {        
        alignItems: "flex-start",
    },
    aiCenter: {
        alignItems: "center",
    },
    aiEnd: {
        alignItems: "flex-end",
    },

    

    flex: {
        flex: 1,
    },
    flex2: {
        flex: 2,
    },
    flex3: {
        flex: 3,
    },
    flex4: {
        flex: 4,
    },
    flex5: {
        flex: 5,
    },




    // 3. Grid ?
    // 4. Images ?
    br8: {
        borderRadius: 8,
    },
    br10: {
        borderRadius: 10,
    },
    br12: {
        borderRadius: 12,
    },
    br16: {
        borderRadius: 16,
    },


})