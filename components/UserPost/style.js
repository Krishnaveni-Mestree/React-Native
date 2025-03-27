import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

export const style=StyleSheet.create({
    user:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    userContainer:{
        flexDirection:'row',
    },
    userTextContainer:{
        justifyContent:'center',
        marginLeft:horizontalScale(10),
    },
    userName:{
        color:'#000',
        fontFamily:getFontFamily('Inter',600),
        fontSize:scaleFontSize(16),
    },
    location:{
        color:'#79869F',
        fontFamily:getFontFamily('Inter',400),
        fontSize:scaleFontSize(12),
        marginTop:verticalScale(3),
    },
    postImage:{
        alignItems:'center',
        marginVertical:verticalScale(20),
    },
    userPostContainer:{
        marginTop:verticalScale(15),
        padding:verticalScale(5),
        borderBottomWidth:1,
        borderBottomColor:'#EFF2F6'
    },
    userPostStats:{
        marginLeft:horizontalScale(11),
        flexDirection:'row',
    },
    userPostStatButton:{flexDirection:'row'},
    userPostStatButtonRight:{flexDirection:'row',marginLeft:horizontalScale(27)},
    userPostStatText:{marginLeft:horizontalScale(3),color:'#79869F',paddingBottom:verticalScale(14)},
})