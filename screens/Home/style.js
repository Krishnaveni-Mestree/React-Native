import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling.js";


const style=StyleSheet.create({
    header:{
        marginLeft:horizontalScale(27),
        marginRight:horizontalScale(17),
        marginTop:verticalScale(30),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    messageIcon:{
        padding:horizontalScale(12),
        borderRadius:horizontalScale(100),
        backgroundColor:'#f2f2f2'
    },
    messageNumberContainer:{
        backgroundColor:'#F35BAC',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        width:horizontalScale(10),
        height:horizontalScale(10),
        borderRadius:horizontalScale(10),
        position:'absolute',
        right:horizontalScale(10),
        top:verticalScale(9),
    },
    messageNumber:{
        color:'#ffffff',
        fontSize:scaleFontSize(6),
        fontFamily:getFontFamily('Inter','600'),
    },
    userStoryContainer:{
        marginTop:verticalScale(28),
        marginHorizontal:horizontalScale(28),
    },
    userPostContainer:{
        marginHorizontal:horizontalScale(24)
    }
});

export default style;