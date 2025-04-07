import React, { useState } from "react";
import { SafeAreaView, ScrollView,Text } from "react-native";

import style from "./style";
import globalStyle from "../../assets/styles/globalStyle";
import Input from "../../components/Input/Input";

const Login=()=>{
    const [email,setEmail]=useState('');
    console.log(email);
    return (
        <SafeAreaView style={[globalStyle.backGroundWhite,globalStyle.flex]}>
            <Text></Text>
            <ScrollView
                contentContainerStyle={style.container}
                showsVerticalScrollIndicator={false}

            >
                <Input
                    label={'Email'} 
                    placeholder={'Enter Your Email..'}
                    onChangeText={(val)=>setEmail(val)}
                    keyboardType={'email-address'}
                    
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Login;