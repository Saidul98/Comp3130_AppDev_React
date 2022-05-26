import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';


  
export default function HomeScreen({navigation}) {

  

  return (


    <View style={styles.container}>
      
      <Image
        style={styles.stretch}
        source={require('../assets/hsicon_1.1.png')}
      />


      <View style={styles.textContainer}>
        <Text style={styles.homeScreenText}>Manage your <Text style={styles.galleryText}>Gallery</Text> </Text>
        <Text style={styles.homeScreenText}>Seamlessly</Text>
      </View>

      <TouchableOpacity style={styles.signupBtn} onPress={()=> navigation.navigate("Create Account")}>
        <Text style={styles.signupText}>Sign UP with Email ID</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.homeScreenText}>Already have an account?</Text>
        <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
          <Text style={styles.homeScreenText} >Sign In</Text>
        </TouchableOpacity>
      </View>

    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textContainer:{
    marginBottom:50,
    marginTop: 25,
  },

  signupContainer:{
    marginBottom:25,
    marginTop: 25,
  },

  galleryText:{
    color:'#38B6FF',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: 20,
  },

  signupBtn: {
    width: '80%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    backgroundColor: '#121212',

  },

  signupText: {
    color:'#ffffff',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: 20,
  },

  signinText: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: 20,
  },
  
  homeScreenText: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  }
});
