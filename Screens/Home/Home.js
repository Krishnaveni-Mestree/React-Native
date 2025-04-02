import React from "react";
import { SafeAreaView, Text, View } from "react-native";

import globalStyle from "../../assets/styles/globalStyle";
import style from "./style";

const Home=()=>{
    return(
        <SafeAreaView style={[globalStyle.backGroundWhite,globalStyle.flex]}>
            <Text></Text>
            <View>
                <Text>Hello World!</Text>
            </View>
        </SafeAreaView>
    );
};

export default Home;