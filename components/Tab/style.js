import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style=StyleSheet.create({
    tab:{
        backgroundColor:'#2979f2',
        height:verticalScale(45),
        justifyContent:'center',
        borderRadius:horizontalScale(50),
    },
    title:{
        fontFamily:getFontFamily('Inter','500'),
        fontSize: scaleFontSize(14),
        lineHeight:scaleFontSize(17),
        color:'#ffffff',
        textAlign:'center',
    },
    inactiveTab:{
        backgroundColor:'#f3f5f9'
    },
    inactiveTitle:{
        color:'#79869f'
    }
});

export default style;