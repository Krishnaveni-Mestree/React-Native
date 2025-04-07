import React from "react";

import style from "./style";
import {View, Image, SafeAreaView,ScrollView,Text } from "react-native";
import { useSelector } from "react-redux";
import globalStyle from "../../assets/styles/globalStyle";
import BackButton from "../../components/BackButton/BackButton";
import Badge from "../../components/Badge/Badge";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

const SingleDonationItem=({navigation,route})=>{
    const donationItemInformation=useSelector(state=>state.donations.selectedDonationInformation);
    //console.log(donationItemInformation)

    const categoryInformation=route.params.categoryInformation;
    console.log(route.params)
    return (
        <SafeAreaView style={[globalStyle.backGroundWhite,globalStyle.flex]}>
            <Text></Text>
            <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
                <BackButton onPress={()=>navigation.goBack()}/>
                <Image source={{uri:donationItemInformation.image}} style={style.image} />
                <View style={style.badge}>
                    <Badge title={categoryInformation.name}/>
                </View>
                <Header title={donationItemInformation.name} type={1}/>
                <Text style={style.description}>
                    {donationItemInformation.description}
                    {donationItemInformation.description}
                    {donationItemInformation.description}
                    {donationItemInformation.description}
                    {donationItemInformation.description}
                    {donationItemInformation.description}
                </Text>
            </ScrollView>
            <View style={style.button}>
                <Button title={"Donate"}/>
            </View>
        </SafeAreaView>
    );
};
export default SingleDonationItem;