import React from 'react';
import  {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screen/HomeScreen';
import LoginScreen from '../Screen/LoginScreen';
import SignupScreen from '../Screen/SignupScreen';
import UserScreen from '../Screen/UserScreen';
import AddImageScreen from '../Screen/AddImageScreen';
import FilterImageScreen from '../Screen/FilterImageScreen';


const AppStack = createStackNavigator();

const ScreenNav = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Welcome" component={HomeScreen}/>
        <AppStack.Screen name="Login" component={LoginScreen}/>
        <AppStack.Screen name="Create Account" component={SignupScreen}/>
        <AppStack.Screen name="Home" component={UserScreen}/>
        <AppStack.Screen name="Create Memories" component={AddImageScreen}/>
        <AppStack.Screen name="Gallery" component={FilterImageScreen}/>
    </AppStack.Navigator>
)

export default ScreenNav;
