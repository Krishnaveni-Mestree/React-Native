import {createStackNavigator} from '@react-navigation/stack';
import { Routes } from './Routes';
import Home from '../screens/Home/Home.js';
import Profile from '../screens/Profile/Profile.js';

import {createDrawerNavigator} from "@react-navigation/drawer";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle.js';
import ProfileTabContent from '../components/ProfileTabContent/ProfileTabContent.js';

const Stack=createStackNavigator();
const Drawer=createDrawerNavigator();
const ProfileTabs=createMaterialTopTabNavigator();


export const ProfieTabsNavigation=()=>{
    return(
      <ProfileTabs.Navigator style={{ flex: 1 }} screenOptions={
        {
            tabBarIndicatorStyle:{
                backgroundColor:'transparent'
            },
            tabBarStyle:{
                zIndex:0,
                elevation:0,
            }
        }
      }>
        <ProfileTabs.Screen 
            name={'Tab1'} 
            options={{
                tabBarLabel:({focused})=>(
                    <ProfileTabTitle title={'Photos'} isFocused={focused} />
                ),
            }}
            component={ProfileTabContent}/>
        <ProfileTabs.Screen 
            name={'Tab2'} 
            options={{
                tabBarLabel:({focused})=>(
                    <ProfileTabTitle title={'Videos'} isFocused={focused} />
                ),
            }}
            component={ProfileTabContent}/>
        <ProfileTabs.Screen 
            name={'Tab3'} 
            options={{
                tabBarLabel:({focused})=>(
                    <ProfileTabTitle title={'Saved'} isFocused={focused}/>
                ),
            }}
            component={ProfileTabContent}/>
      </ProfileTabs.Navigator>
    )
}

const MainMenuNavigation=()=>{
    return (
        <Drawer.Navigator initialRouteName={Routes.Home}  screenOptions={{ headerShown: false }} >
            <Drawer.Screen name={Routes.Home} component={Home} />
            <Drawer.Screen name={Routes.Profile} component={Profile}/>
        </Drawer.Navigator>
    );
};

const MainNavigation=()=>{
    return(
        <Stack.Navigator 
            screenOptions={{header:()=>null,headerShown:false}} >
            <Stack.Screen name={'Drawer'} component={MainMenuNavigation}/>
            
        </Stack.Navigator>
    );
};



export default MainNavigation;