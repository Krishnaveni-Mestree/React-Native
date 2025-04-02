import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Home from "../Screens/Home/Home.js";

const Stack=createStackNavigator();

const MainNavigation=()=>{
    return(
      <Stack.Navigator screenOptions={{header:()=>null,headerShown:false}}>
        <Stack.Screen name={Routes.Home} component={Home}/>
      </Stack.Navigator>
    );
};

export default MainNavigation;