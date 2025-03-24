import React, { useState } from "react";
import { 
    SafeAreaView,
    ScrollView,
    TextInput,
    Pressable,
    Switch,
    Text
 } from "react-native";

 const App=()=>{
    const [userName,setUserName]=useState('');
    const [age,setAge]=useState('');
    const [isOn,setIsOn]=useState(false);
    return(
        <SafeAreaView>
            <Text>Status bar</Text>
            <ScrollView>
                <TextInput
                    style={{borderWidth:1,padding:15}}
                    value={userName}
                    placeholder="Enter your name"
                    onChangeText={(text)=>{
                        setUserName(text)
                    }}
                />
                <TextInput
                    style={{borderWidth:1,padding:15}}
                    value={age}
                    placeholder="Enter your age"
                    onChangeText={(val)=>{
                        setAge(val)
                    }}
                />
                <Pressable
                    style={{
                    marginTop: 20,
                    backgroundColor: 'blue',
                    padding: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}
                    onPress={() => alert('Hi ' + userName + '. You are ' + age + ' years old')}>
                    <Text>Submit</Text>
                </Pressable>
                <Switch
                    value={isOn}
                    onValueChange={value => setIsOn(value)}
                    style={{marginTop: 20}}
                />
                {isOn && <Text>{'Hi ' + userName + '. You are ' + age + ' years old'} </Text>}
            </ScrollView>
        </SafeAreaView>
    )
 }

 export default App;