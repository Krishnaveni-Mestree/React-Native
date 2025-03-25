import React, { useEffect, useState } from "react";
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
    {//id1  //0
      firstName:'Krishna',
      id:1,
      profileImage:require('./assets/images/default_profile.png')
    },
    {//id2
      firstName:'Sreekanth',
      id:2,
      profileImage:require('./assets/images/default_profile.png')
    },
    {//id3
      firstName:'Vishnu',
      id:3,
      profileImage:require('./assets/images/default_profile.png')
    },
    {//id4
      firstName:'Mohan',
      id:4,
      profileImage:require('./assets/images/default_profile.png')
    },
    {//id5  //4
      firstName:'shireesha',
      id:5,
      profileImage:require('./assets/images/default_profile.png')
    },
    {//id6
      firstName:'Ameen',
      id:6,
      profileImage:require('./assets/images/default_profile.png')
    },
    {//id7
      firstName:'Subham',
      id:7,
      profileImage:require('./assets/images/default_profile.png')
    },
    {//id8
      firstName:'Kavya',
      id:8,
      profileImage:require('./assets/images/default_profile.png')
    },
    {//id9  //8
      firstName:'Shiva',
      id:9,
      profileImage:require('./assets/images/default_profile.png')
    },
  ];

  const userStoriesPageSize=4;
  const [userStoriesCurrentPage,setUserStoriesCurrentPage]=useState(1);
  const [userStoriesRenderedData,setUserStoriesRenderedData]=useState([]);
  const [isLoadingUserStories,setIsLoadingUserStories]=useState(false);
  //Now what we want to do is create a function that is actually going to populate the data inside the user stories rendered and data.
  // //For that, we're going to create a function and call it pagination.
  //What it's going to do is it's going to take the whole database of the users.
  const pagination=(database,currentPage,pageSize)=>{
      console.log('current page ',currentPage)
    //The first time we fetch it, we want it to be index zero.
    //The second time we fetch it, we want it to be index four.
    //The third time we fetch it, we want it to be index eight.
        //Therefore, what we have to come up is a formula of the starting index.
    const startIndex=(currentPage-1)*pageSize; //0
    const endIndex=startIndex + pageSize;
    if(startIndex>=database.length){
      return [];
    }
    return database.slice(startIndex,endIndex);
  };



  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);
  }, []);
  /* eslint-disable react-hooks/exhaustive-deps */  

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
          onEndReachedThreshold={0.5}
          onEndReached={()=>{
            // console.log('we have reeached the end')
            if(isLoadingUserStories) {
              return;
            }
            setIsLoadingUserStories(true);
            const contentToAppend=pagination(userStories,userStoriesCurrentPage+1,userStoriesPageSize);
            if(contentToAppend.length>0){
              setUserStoriesCurrentPage(userStoriesCurrentPage+1);
              setUserStoriesRenderedData(prev=>[...prev, ...contentToAppend]);
            }
            setIsLoadingUserStories(false)
          }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStoriesRenderedData}
          renderItem={({item})=>(
            <UserStory
              key={'userStory'+ item.id}
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