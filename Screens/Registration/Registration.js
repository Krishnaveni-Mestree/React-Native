import React, { useState } from "react";
import { View,SafeAreaView, ScrollView,Text, Pressable } from "react-native";

import style from "./style";
import globalStyle from "../../assets/styles/globalStyle";
import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import BackButton from "../../components/BackButton/BackButton";
import { createUser } from "../../api/user";

const Registration=({navigation})=>{
    const [fullName,setFullName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    //console.log(email);
    //console.log('hello');
    return (
        <SafeAreaView style={[globalStyle.backGroundWhite,globalStyle.flex]}>
            <View style={style.backButton}>
                <BackButton
                    onPress={()=>navigation.goBack()}
                />
            </View>
            <ScrollView
                contentContainerStyle={style.container}
                showsVerticalScrollIndicator={false}

            >
                <View style={globalStyle.marginBottom24}>
                    <Header type={1} title={'Hello and Welcome !'}/>
                </View>
                <View style={globalStyle.marginBottom24}>
                    <Input
                        label={'First & Last Name'} 
                        placeholder={'Enter Your Full Name..'}
                        onChangeText={(val)=>setEmail(val)}
                        keyboardType={'email-address'}
                        
                    />
                </View>
                <View style={globalStyle.marginBottom24}>
                    <Input
                        label={'Email'} 
                        placeholder={'Enter Your Email..'}
                        onChangeText={(val)=>setEmail(val)}
                        keyboardType={'email-address'}
                        
                    />
                </View>
                <View style={globalStyle.marginBottom24}>
                    <Input
                        secureTextEntry={true}
                        label={'Password'}
                        placeholder={'******'}
                        onChangeText={(val)=>setPassword(val)}
                    />
                </View>
                <View style={globalStyle.marginBottom24}>
                    <Button
                        title={'Register'}
                        onPress={async ()=> await createUser(fullName,email,password)}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Registration;