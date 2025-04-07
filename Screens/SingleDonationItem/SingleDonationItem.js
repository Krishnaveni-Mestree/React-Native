import React from "react";

import style from "./style";
import { SafeAreaView,ScrollView,Text } from "react-native";
import { useSelector } from "react-redux";
import globalStyle from "../../assets/styles/globalStyle";
import BackButton from "../../components/BackButton/BackButton";

const SingleDonationItem=({navigation})=>{
    const donationItemInformation=useSelector(state=>state.donations.selectedDonationInformation);
    console.log(donationItemInformation)
    return (
        <SafeAreaView style={[globalStyle.backGroundWhite,globalStyle.flex]}>
            <Text></Text>
            <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
                <BackButton onPress={()=>navigation.goBack()}/>
            </ScrollView>
        </SafeAreaView>
    );
};
export default SingleDonationItem;