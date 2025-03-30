import React from "react";

import { 
    SafeAreaView,
    Text,
    TouchableOpacity,
 } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import { Routes } from "../../navigation/Routes";

 const Profile=({navigation})=>{
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex]}>
            <Text></Text>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Text style={{color:'blue'}}>Go Back</Text>
            </TouchableOpacity>
            <Text>Welcome to Profile page</Text>
        </SafeAreaView>
    );
 };

 export default Profile;