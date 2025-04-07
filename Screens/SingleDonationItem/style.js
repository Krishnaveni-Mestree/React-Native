import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

const style=StyleSheet.create({
    container:{
        marginHorizontal:horizontalScale(20),
        marginTop:verticalScale(10)
    }
});

export default style;