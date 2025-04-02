import { Dimensions } from "react-native";
import DeviceInfo from "react-native-device-info";

//width and height of our window
const {width,height}=Dimensions.get('window');

//Anotch on  the device refers to a cutout or indentation at the top of the screen
const isSmall=width<=375 && !DeviceInfo.hasNotch();

//this base width is going to be a number that we're going to use to determine the ratio between our actual width of the screen with the guideline base
const guideLineBaseWidth=()=>{
    if(isSmall){
        return 330;
    }
    return 350;
}

const horizontalScale=(size)=>(width / guideLineBaseWidth()) * size;
//it will scale the horizontal items according to this ratio

//this is going to be use for vertical items
const guideLineBaseHeight=()=>{
    if(isSmall){
        return 550;
    }
    else if(width>410){
        return 620;
    }
    return 680;
};

//vertical scaling function
const verticalScale=size=>(height / guideLineBaseHeight()) * size;

//for fonts
const guideLineBaseFonts=()=>{
    if(width>410){
        return 430;
    }
    return 400;
};

const scaleFontSize=(size)=>Math.round(width/guideLineBaseFonts())*size;

export {horizontalScale,verticalScale,scaleFontSize}