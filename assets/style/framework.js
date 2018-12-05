import { StyleSheet, Platform,Dimensions } from "react-native";
import authorBox from "../../components/Post/authorBox";


const blockSize = 4



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



    // 3 Spaces / Abstände
    p1: {
        padding: blockSize * 1,
    },
    p2: {
        padding: blockSize * 2,
    },
    p3: {
        padding: blockSize * 3,
    },
    p4: {
        padding: blockSize * 4,
    },
    p5: {
        padding: blockSize * 5,
    },
    p6: {
        padding: blockSize * 6,
    },
    mla: {
        marginLeft: "auto",
        textAlign: "right",
    },
    
    // 4. Grid ?
    // 5. Images ?

    // 6. Formen & Geometrie
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