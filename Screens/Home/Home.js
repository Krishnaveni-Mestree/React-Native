import React from "react";
import { SafeAreaView, Text, View } from "react-native";

import Header from "../../components/Header/Header";

import globalStyle from "../../assets/styles/globalStyle";
import style from "./style";
import Button from "../../components/Button/Button";
import Tab from "../../components/Tab/Tab";
import Badge from "../../components/Badge/Badge";

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Home=()=>{
    return(
        <SafeAreaView style={[globalStyle.backGroundWhite,globalStyle.flex]}>
            <Text></Text>
            <View>
                
            </View>
        </SafeAreaView>
    );
};

export default Home;