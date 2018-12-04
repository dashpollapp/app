import { Dimensions, Platform } from "react-native";

export function isIPhoneX() {
    
    const dimensions = Dimensions.get("window");

    return (
        Platform.OS === "ios" && !Platform.isPad && !Platform.isTVOS && 
        ((dimensions.height === 812 || dimensions.width === 812) ||
        (dimensions.height === 896 || dimensions.width === 896))
    );
}

export function ifIPhoneX(iphoneXStyle, regularStyle) {
    if (isIPhoneX()) {
        return iphoneXStyle;
    }
    return regularStyle;
}