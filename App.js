import React from "react";
import { 
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
 } from "react-native";
import Title from "./components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import globalStyle from "./assets/styles/globalStyle";
import UserStory from "./components/UserStory/UserStory";

 const App=()=>{
  const userStories=[
    {
      firstName:'Krishna',
      id:1,
      profileImage:require('./assets/images/default_profile.png')
    },
    {
      firstName:'Sreekanth',
      id:2,
      profileImage:require('./assets/images/default_profile.png')
    },
    {
      firstName:'Vishnu',
      id:3,
      profileImage:require('./assets/images/default_profile.png')
    },
    {
      firstName:'Mohan',
      id:4,
      profileImage:require('./assets/images/default_profile.png')
    },
    {
      firstName:'shireesha',
      id:5,
      profileImage:require('./assets/images/default_profile.png')
    },
    {
      firstName:'Ameen',
      id:6,
      profileImage:require('./assets/images/default_profile.png')
    },
    {
      firstName:'Subham',
      id:7,
      profileImage:require('./assets/images/default_profile.png')
    },
    {
      firstName:'Kavya',
      id:8,
      profileImage:require('./assets/images/default_profile.png')
    },
    {
      firstName:'Shiva',
      id:9,
      profileImage:require('./assets/images/default_profile.png')
    },
  ]
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
      <View style={globalStyle.userStoryContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStories}
          renderItem={({item})=>(
            <UserStory
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          )}
        />
      </View>
    </SafeAreaView>
  )
 }

 export default App;