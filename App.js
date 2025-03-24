import React from "react";
import { 
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
 } from "react-native";
import Title from "./components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import globalStyle from "./assets/styles/globalStyle";

 const App=()=>{
  return(
    <SafeAreaView>
      <Text></Text>
      <View style={globalStyle.header}>
        <Title title={'Lets Explore'}/>
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'}/>
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
 }

 export default App;