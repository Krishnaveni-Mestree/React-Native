import {createStackNavigator} from '@react-navigation/stack';
import { Routes } from './Routes';
import Home from '../screens/Home/Home.js';
import Profile from '../screens/Profile/Profile.js';

import {createDrawerNavigator} from "@react-navigation/drawer";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import { Text, View } from 'react-native';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle.js';

const Stack=createStackNavigator();
const Drawer=createDrawerNavigator();
const ProfileTabs=createMaterialTopTabNavigator();

const Tab1=()=>{
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>This is Tab1</Text>
        </View>
    );
};
const Tab2=()=>{
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>This is Tab2</Text>
        </View>
    );
};
const Tab3=()=>{
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>This is Tab3</Text>
        </View>
    );
};
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
            component={Tab1}/>
        <ProfileTabs.Screen 
            name={'Tab2'} 
            options={{
                tabBarLabel:({focused})=>(
                    <ProfileTabTitle title={'Videos'} isFocused={focused} />
                ),
            }}
            component={Tab2}/>
        <ProfileTabs.Screen 
            name={'Tab3'} 
            options={{
                tabBarLabel:({focused})=>(
                    <ProfileTabTitle title={'Saved'} isFocused={focused}/>
                ),
            }}
            component={Tab3}/>
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