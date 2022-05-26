import React from 'react';
import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import DataManager from '../Data/DataManager';
import AppTextInput from '../Component/AppTextInput';



const schema = Yup.object().shape(
  {
    username: Yup.string().required(),
    password: Yup.string().required().min(4).max(15),
  }
);



let userData = DataManager.getInstance();
let users= userData.getUser();



const validateUser = ({ username, password }) => {
  return (
    users.filter((user) => user.username === username && user.password === password).length > 0
  );
};


const getUser = ({username}) => {
  return users.find((user) => user.username === username);
}


const createUser = ({username}) => {
  let commonData = DataManager.getInstance();
  let userID = getUser({username}).userid;
  commonData.setUserID(userID);
  
}



export default function LoginScreen({navigation}) {
  return (
  
    <Formik

      initialValues={{username:' ',password:' '}}

      onSubmit = {(values, {resetForm}) => { 
        if(validateUser(values)){
            createUser(values);
            resetForm();
            navigation.navigate("Home", {
              paramUsername: values.username,
              paramUseremail: getUser(values).useremail,
            })
        }else {
            resetForm();
            alert("Invalid Login Details")
        }
      }}


      validationSchema={schema}>
      
      {({handleChange, handleSubmit, errors, setFieldTouched, touched})=> (
      <>
      <View style={styles.container}>

        <Text style={styles.headingText}><Text style={styles.headingWelcome}>Welcome</Text> Back</Text>
        <Text style={styles.text}>Sign in to your accoount</Text>

        <View style={styles.inputContainerusername}> 
          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="email-outline"
            placeholder="Enter your UserName"
            onBlur= {()=> setFieldTouched("username")}
            onChangeText = {handleChange("username")}
          />

          {touched.username && <Text style={{color:"red",fontSize:10}}>{errors.username}</Text>}

        </View>


        <View style={styles.inputContainerpassword}>
          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock-outline"
            placeholder="Enter your Password"
            secureTextEntry
            onBlur= {()=> setFieldTouched("password")}
            onChangeText = {handleChange("password")}
          />

          {touched.password && <Text style={{color:"red",fontSize:10}}>{errors.password}</Text>}

        </View>

        <View style={styles.signipContainer} >
          <TouchableOpacity style={styles.signipbutton} onPress={handleSubmit} >
            <Text style={styles.signipText}>Continue</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.signupContainer}>
          <Text style={styles.text}>Don't have an account ?  </Text>
          <TouchableOpacity onPress={()=> navigation.navigate("Create Account")}>
            <Text style={styles.text}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>
      </>
      )}
    
    </Formik>
    
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    padding:20,
  },

  inputContainerusername:{
    height: 100,
    alignItems: 'center',
  },

  inputContainerpassword:{
    height: 100,
    alignItems: 'center',
  },

  text: {
    fontFamily: 'monospace',
    fontSize: 20,
    marginBottom:40,
    marginTop: 15,
    textAlign: 'left',
  },

  headingText:{
    fontFamily: 'monospace',
    fontSize: 45,
    marginBottom:0,
    marginTop: 15,
    textAlign: 'left',
    fontWeight: 'bold',
  },

  headingWelcome:{
    color:'#38B6FF',
  },

  signipContainer:{
    alignItems: 'center',
  },

  signipbutton: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: "#121212",
  },

  signipText: {
    color:"#ffffff",
    fontFamily: "monospace",
    fontWeight: "bold",
    fontSize: 20,
  },

  signupContainer:{
    marginTop: 40,
    flexDirection:'row',
    alignItems: 'center',
  }
  
});