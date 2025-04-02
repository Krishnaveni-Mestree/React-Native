import React, {  useEffect, useState } from "react";
import { 
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
 } from "react-native";
import Title from "../../components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import style from "./style";
import UserStory from "../../components/UserStory/UserStory";
import UserPost from "../../components/UserPost/UserPost";
import { scaleFontSize } from "../../assets/styles/scaling";
import globalStyle from "../../assets/styles/globalStyle";

//To use the navigation on a screen level, 
// what we can do is make sure that we grab a prop that comes with every screen that's available inside the Stack.screen.
 const Home=()=>{
  const userStories=[
    {//id1  //0
      firstName:'Krishna',
      id:1,
      profileImage:require('../../assets/images/default_profile.png'),
    },
    {//id2
      firstName:'Sreekanth',
      id:2,
      profileImage:require('../../assets/images/default_profile.png'),
    },
    {//id3
      firstName:'Vishnu',
      id:3,
      profileImage:require('../../assets/images/default_profile.png'),
    },
    {//id4
      firstName:'Mohan',
      id:4,
      profileImage:require('../../assets/images/default_profile.png'),
    },
    {//id5  //4
      firstName:'shireesha',
      id:5,
      profileImage:require('../../assets/images/default_profile.png'),
    },
    {//id6
      firstName:'Ameen',
      id:6,
      profileImage:require('../../assets/images/default_profile.png'),
    },
    {//id7
      firstName:'Subham',
      id:7,
      profileImage:require('../../assets/images/default_profile.png'),
    },
    {//id8
      firstName:'Kavya',
      id:8,
      profileImage:require('../../assets/images/default_profile.png'),
    },
    {//id9  //8
      firstName:'Shiva',
      id:9,
      profileImage:require('../../assets/images/default_profile.png'),
    },
  ];

  //user Posts
  const userPosts=[
    {
      firstName:'Krishnaveni',
      lastName:'mestree',
      location:'Hyderabad,India',
      likes:1201,
      comments:24,
      bookmarks:55,
      image:require('../../assets/images/default_post.png'),
      profileImage:require('../../assets/images/default_profile.png'),
      id:1,
    },
    {
      firstName:'Mohan',
      lastName:'Rajaa',
      location:'Chennai,India',
      likes:1301,
      comments:25,
      bookmarks:70,
      image:require('../../assets/images/default_post.png'),
      profileImage:require('../../assets/images/default_profile.png'),
      id:2,
    },
    {
      firstName:'Shireesha',
      lastName:'Vanise',
      location:'vanise,MA',
      likes:130,
      comments:8,
      bookmarks:6,
      image:require('../../assets/images/default_post.png'),
      profileImage:require('../../assets/images/default_profile.png'),
      id:3,
    },
    {
      firstName:'Ameen',
      lastName:'Shaik',
      location:'saudi, UAE',
      likes:200,
      comments:47,
      bookmarks:90,
      image:require('../../assets/images/default_post.png'),
      profileImage:require('../../assets/images/default_profile.png'),
      id:4,
    },
    {
      firstName:'Subham',
      lastName:'Subrajith',
      location:'Daka, BN',
      likes:302,
      comments:53,
      bookmarks:3,
      image:require('../../assets/images/default_post.png'),
      profileImage:require('../../assets/images/default_profile.png'),
      id:5,
    },
];


  const userStoriesPageSize=4;
  const [userStoriesCurrentPage,setUserStoriesCurrentPage]=useState(1);
  const [userStoriesRenderedData,setUserStoriesRenderedData]=useState([]);
  const [isLoadingUserStories,setIsLoadingUserStories]=useState(false);
  //Now what we want to do is create a function that is actually going to populate the data inside the user stories rendered and data.
  // //For that, we're going to create a function and call it pagination.
  //What it's going to do is it's going to take the whole database of the users.

  const userPostsPageSize=2;
  const [userPostsCurrentPage,setUserPostsCurrentPage]=useState(1);
  const [userPostsRenderedData,setUserPostsRenderedData]=useState([]);
  const [isLoadingUserPosts,setIsLoadingUserPosts]=useState(false);


  const pagination=(database,currentPage,pageSize)=>{
      //console.log('current page ',currentPage)
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

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);
  }, []);
  /* eslint-disable react-hooks/exhaustive-deps */  

  return(
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <StatusBar barStyle={"dark-content"} />
      <View>
        <FlatList
          ListHeaderComponent={
          <>
            <View style={style.header}>
              <Title title={'Lets Explore'}/>
              <TouchableOpacity style={style.messageIcon}>
                <FontAwesomeIcon 
                  icon={faEnvelope} 
                  size={scaleFontSize(20)} 
                  color={'#898DAE'}
                />
                <View style={style.messageNumberContainer}>
                  <Text style={style.messageNumber}>2</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={style.userStoryContainer}>
              <FlatList
                onEndReachedThreshold={0.5}
                onEndReached={()=>{
                  // console.log('we have reeached the end')
                  console.log('End reached for user stories');
                  if(isLoadingUserStories) {
                    return;
                  }
                  setIsLoadingUserStories(true);
                  const contentToAppend=pagination(
                    userStories,
                    userStoriesCurrentPage+1,
                    userStoriesPageSize,
                  );
                  console.log('Content to Append:', contentToAppend);
                  if(contentToAppend.length>0){
                    setUserStoriesCurrentPage((prev) => prev + 1);
                    setUserStoriesRenderedData(prev=>[...prev, ...contentToAppend]);
                  }
                  setIsLoadingUserStories(false);
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
          </>}
          onEndReachedThreshold={0.5}
          onEndReached={()=>{
            //console.log('We have reached the end of posts')
            if(isLoadingUserPosts) {
              return;
            }
            setIsLoadingUserPosts(true);
            console.log('fetching more data for u', userPostsCurrentPage+1)
            const contentToAppend=pagination(
              userPosts,
              userPostsCurrentPage+1,
              userPostsPageSize
            );
            if(contentToAppend.length>0){
              setUserPostsCurrentPage(userPostsCurrentPage+1);
              setUserPostsRenderedData(prev=>[
                ...prev, 
                ...contentToAppend
              ]);
            }
            setIsLoadingUserPosts(false)
          }}
          showsVerticalScrollIndicator={false}
          data={userPostsRenderedData}
          renderItem={({item})=>(
            <View style={style.userPostContainer}>
              <UserPost
                firstName={item.firstName}
                lastName={item.lastName}
                image={item.image}
                profileImage={item.profileImage}
                likes={item.likes}
                comments={item.comments}
                bookmarks={item.bookmarks}
                location={item.location}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
 }

 export default Home;