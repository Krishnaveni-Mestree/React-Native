import React, { useState } from "react";
import { View,SafeAreaView, ScrollView,Text, Pressable } from "react-native";

import style from "./style";
import globalStyle from "../../assets/styles/globalStyle";
import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { Routes } from "../../navigation/Routes";
import { loginUser } from "../../api/user";

const Login=({navigation})=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    //console.log(email);
    return (
        <SafeAreaView style={[globalStyle.backGroundWhite,globalStyle.flex]}>
            <ScrollView
                contentContainerStyle={style.container}
                showsVerticalScrollIndicator={false}

            >
                <View style={globalStyle.marginBottom24}>
                    <Header type={1} title={'Welcome Back'}/>
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
                {error.length>0 && <Text style={style.error}>{error}</Text>}
                <View style={globalStyle.marginBottom24}>
                    <Button 
                        title={'Login'}
                        isDisabled={email.length<=5 || password.length<8}
                        onPress={async ()=>{ 
                            let user=await loginUser(email,password)
                            if(!user.status){
                                setError(user.error)
                            }
                            else{
                                setError('')
                                navigation.navigate(Routes.Home)
                            }
                        }}
                    />
                </View>
                <Pressable 
                    style={style.registrationButton}
                    onPress={()=>navigation.navigate(Routes.Registration)}    
                >
                    <Header type={3} title={"Don't have an account?"} color={'#156cf7'}/>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Login;