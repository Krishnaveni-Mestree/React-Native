import React from "react";
import { SafeAreaView,View,Text } from "react-native";
import TimeOfDay from "./components/TimeOfDay.js";

const App=()=>{
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <Text>Hii, Krishna</Text>
            <TimeOfDay/>
        </SafeAreaView>
    );
}

export default App;