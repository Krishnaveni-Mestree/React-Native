import React from "react";
import { SafeAreaView, Text, View } from "react-native";

import Header from "../../components/Header/Header";

import globalStyle from "../../assets/styles/globalStyle";
import style from "./style";

const Home=()=>{
    return(
        <SafeAreaView style={[globalStyle.backGroundWhite,globalStyle.flex]}>
            <Text></Text>
            <View>
                <Header title={'Azzahri A.'} type={1}/>
                <Header title={'Azzahri A.'} type={2}/>
                <Header title={'Azzahri A.'} type={3}/>
            </View>
        </SafeAreaView>
    );
};

export default Home;