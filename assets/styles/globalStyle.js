import { StyleSheet } from "react-native";
import { verticalScale } from "./scaling";

const globalStyle= StyleSheet.create({
    backGroundWhite:{
        backgroundColor:'#ffffff'
    },
    flex:{
        flex:1,
    },
    marginBottom24:{
        marginBottom:verticalScale(24)
    }
});

export default globalStyle;