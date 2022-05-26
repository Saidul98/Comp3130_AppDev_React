import React ,{useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppTextInput from '../Component/AppTextInput';
import DataManager from '../Data/DataManager';
import AppIcon from '../Component/AppIcon';



const schema = Yup.object().shape(
  {
    username: Yup.string().required().label("User Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).max(15).label("Password"),
  }
);
  
export default function SignupScreen({navigation}) {


  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);


  const addUser = () => {
    let userData = DataManager.getInstance();
    let user = userData.getUser();
    let userID = user.length +1;

    const newUser ={
      username: username,
      useremail: useremail,
      password: password,
      userid: userID,
      userimage: image.path,
    }
    userData.addUser(newUser);
    console.log(newUser);
  }

  let openImagePickerAsync = async() =>{
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if(permissionResult.granted === false){
        alert("Permission to access camera roll is required !");
        return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if(pickerResult.cancelled === true){
        return;
    }
    setImage({path: pickerResult.uri}) 
  }
  
  
  return (

    <Formik


      initialValues={{username:'',email:'',password:''}}
      onSubmit = {values => console.log(values)}
      validationSchema={schema}>


        {({errors, setFieldTouched, touched})=> (


        <>
        <View style={styles.container}>

          <Image
            style={styles.stretch}
            source={require('../assets/hsicon_1.1.png')}
          />

          <Text style={styles.text}>Create an account to strat saving your memories.</Text>
          <Text style={styles.text}>Sign Up</Text>


          <View style={styles.inputContainerusername}> 
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="account-circle-outline"
              placeholder="Enter your UserName"
              onBlur= {()=> setFieldTouched("username")}
              onChangeText = {(inputText) => setUsername(inputText)}/>
              {touched.username && <Text style={{color:"red",fontSize:10}}>{errors.username}</Text>}
          </View> 


          <View style={styles.inputContaineremail}> 
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email-outline"
              placeholder="Enter your Email"
              onBlur= {()=> setFieldTouched("email")}
              onChangeText = {(inputText) => setUseremail(inputText)}/>
              {touched.email && <Text style={{color:"red",fontSize:10}}>{errors.email}</Text>}
          </View>


          <View style={styles.inputContainerpassword}> 
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock-outline"
              placeholder="Enter your Password"
              secureTextEntry
              onBlur= {()=> setFieldTouched("password")}
              onChangeText = {(inputText) => setPassword(inputText)}/>
              {touched.password && <Text style={{color:"red",fontSize:10}}>{errors.password}</Text>}
          </View>

          <TouchableOpacity style ={styles.imageButton} onPress={openImagePickerAsync}>
                <AppIcon name = "camera" size = {80}/>
                {image && <Image source = {{uri: image.path}} style={{height:50, width:50, borderRadius: 50}}/>}
          </TouchableOpacity>
        
        

          <TouchableOpacity style={styles.signupbutton} onPress={() =>{
              navigation.navigate("Login"); 
              addUser();}} >
              <Text style={styles.signupText}>Create an account</Text>
          </TouchableOpacity>


          <Text style={styles.text}>By signing up, you agree to our <Text style={styles.difftext}>Terms of Use</Text> and <Text style={styles.difftext}>Privacy Policy</Text></Text>

        </View>

        </>
      )}
    
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainerusername:{
    height:70,
  },

  inputContaineremail:{
    height:70,
  },

  inputContainerpassword:{
    height:70,
  },

  text: {
    fontFamily: "monospace",
    fontSize: 20,
    marginBottom:17,
    marginTop: 15,
    textAlign: 'center',
  },

  signupbutton: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#121212",
  },

  signupText: {
    color:"#ffffff",
    fontFamily: "monospace",
    fontWeight: "bold",
    fontSize: 20,
  },

  difftext: {
    color:"#38B6FF",
    fontFamily: "monospace",
    fontWeight: "bold",
    fontSize: 20,
  },

  imageButton:{
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
  }

});
