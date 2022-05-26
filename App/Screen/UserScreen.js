import React from 'react';
import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import AppUserCard from '../Component/AppUserCard';
import AppButton from '../Component/AppButton';
import DataManager from '../Data/DataManager';
import AppCard from '../Component/AppCard';
import Color from '../config/Color';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


let commonData = DataManager.getInstance();



const getPics = () => {
    let commonData = DataManager.getInstance();
    let user= commonData.getUserID();
    return commonData.getPics(user); 
}


const getuser =() =>{
    let commonData = DataManager.getInstance();
    let user= commonData.getUserID();
    return commonData.getuser(user);     
}


export default function UserScreen({navigation}) {

    const picslist = getPics(); 
    const user = getuser();
    

    return (

        <View style={styles.screenConatiner}>

            <View style={styles.profileContainer}>
                <FlatList
                    data = {user}
                    keyExtractor = {user => user.userid}
                    renderItem ={({item})=> 
                        <AppUserCard 
                            image={item.userimage} 
                            title={item.username} 
                            onPress={()=> navigation.navigate("Welcome")}
                        />
                    }
                />
            </View>


            <View style={styles.addpicBtnContainer}>
                <TouchableOpacity style={styles.addpicBtn} onPress={()=> navigation.navigate("Create Memories")}>
                    <View style={styles.addPicContainer}>
                        <MaterialCommunityIcons name = "image-plus" size = {50} backgroundColor="gray" color="white"/>
                        <Text style={styles.addPicText}>Add Picture</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.categoryBtnConatiner}>

                <AppButton style={styles.categoryBtn}
                    title="Nature"
                    color= "green"
                    onPress={ ()=> {   
                        commonData.setCategory("Nature");
                        navigation.navigate("Gallery");}
                    }
                />

                <AppButton style={styles.categoryBtn}
                    title="Food"
                    color= "#fac775"
                    onPress={ ()=>{   
                        commonData.setCategory("Food");
                        navigation.navigate("Gallery");}
                    }
                />

                <AppButton style={styles.categoryBtn}
                    title="Family"
                    color= "red"
                    onPress={ ()=>{   
                        commonData.setCategory("Family");
                        navigation.navigate("Gallery");}
                    }
                /> 

                <AppButton style={styles.categoryBtn}
                    title="Event"
                    color= "blue"
                    onPress={ ()=>{   
                        commonData.setCategory("Event");
                        navigation.navigate("Gallery");}
                    }
                />           
            </View>

            

            <FlatList
                data = {picslist}
                keyExtractor = {pic => pic.picsID}
                renderItem ={({item})=> 
                <View style={styles.picsContainer} >
                    <AppCard style={styles.picsview}
                        title={item.title}
                        subtitle={item.category}
                        image={item.image}
                        detail = {item.detail}
                        location = {item.location}
                    />
                </View>
                } 
            /> 


        </View>
    );
}
const styles = StyleSheet.create({

    screenConatiner:{
        height:'100%',
        width: '100%',
        padding:10,
    },

    addPicContainer:{
        backgroundColor: Color.defaultcolor,
        borderRadius: 12,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'flex-start',
        height: 50,
        width: "100%",
    },

    addPicText:{
        color:'#ffffff',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft:30,
    },

    categoryBtnConatiner:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },

    picsview:{
        justifyContent:'center'
    },
    profileContainer:{
        padding: 20,
    }

})

