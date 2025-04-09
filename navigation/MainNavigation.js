import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../Screens/Home/Home.js';
import SingleDonationItem from '../Screens/SingleDonationItem/SingleDonationItem.js';
import Login from '../Screens/Login/Login.js';
import Registration from '../Screens/Registration/Registration.js';

const Stack = createStackNavigator();

export const NonAuthenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration}/>
    </Stack.Navigator>
  );
};

export const Authenticated=()=>{
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItem}
      />
    </Stack.Navigator>
  );
}
