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
    const [success,setSuccess]=useState('');
    const [error,setError]=useState('');
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
                        onChangeText={(val)=>setFullName(val)}
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
                {error.length>0 && <Text style={style.error}>{error}</Text>}
                {success.length>0 && <Text style={style.success}>{success}</Text>}
                <View style={globalStyle.marginBottom24}>
                    <Button
                        title={'Register'}
                        isDisabled={fullName.length<=2 || email.length<=5 || password.length<8}
                        onPress={async ()=>{
                            let user = await createUser(fullName,email,password);
                            if(user.err){
                                setError(user.err)
                            }
                            else{
                                setSuccess("You have successfully registered.");
                                setTimeout(() => {
                                    if (navigation.canGoBack()) {
                                      navigation.goBack();
                                    } else {
                                      navigation.navigate("Login"); // or another fallback screen
                                    }
                                  }, 3000);
                            }
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Registration;