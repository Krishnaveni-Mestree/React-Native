import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style=StyleSheet.create({
    button:{
        backgroundColor:'#2979f2',
        height:verticalScale(50),
        justifyContent:'center',
        borderRadius:horizontalScale(50),
    },
    title:{
        fontFamily:getFontFamily('Inter','500'),
        fontSize: scaleFontSize(16),
        lineHeight:scaleFontSize(19),
        color:'#ffffff',
        textAlign:'center',
    },
    disabled:{
        opacity:0.5,
    }
});

export default style;