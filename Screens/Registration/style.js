import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize, verticalScale} from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    flex:1,
    justifyContent:'center',
  },
  backButton:{
    marginLeft:horizontalScale(14),
    marginTop:verticalScale(20),
  },
  error:{
    fontFamily:getFontFamily('Inter','400'),
    fontSize:scaleFontSize(16),
    color:'#ff0000',
    marginBottom:verticalScale(24),
  },
  success:{
    fontFamily:getFontFamily('Inter','400'),
    fontSize:scaleFontSize(16),
    color:'#28a745',
    marginBottom:verticalScale(24),
  }
});

export default style;
