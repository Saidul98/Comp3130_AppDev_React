import { NavigationContainer } from '@react-navigation/native';
import ScreenNav from './App/Navigator/ScreenNav';
import React from 'react';
import AddImageScreen from './App/Screen/AddImageScreen';


export default function App() {
  

  return (
    <NavigationContainer>
      <ScreenNav/>
    </NavigationContainer>

  );
}

