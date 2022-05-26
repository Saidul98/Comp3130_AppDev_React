import React from 'react';
import { StyleSheet,View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import DataManager from '../Data/DataManager';
import AppCard from '../Component/AppCard';
import { FlatList } from 'react-native-gesture-handler';
import AppUserCard from '../Component/AppUserCard';


let commonData = DataManager.getInstance();


const getuser =() =>{
    let commonData = DataManager.getInstance();
    let user= commonData.getUserID();
    return commonData.getuser(user);     
}

const filterPics = (user, category) =>{
    let commonData = DataManager.getInstance();
    return commonData.filterpics(user, category);
}

const categories =()=>{
    let commonData = DataManager.getInstance();
    return commonData.getCategory();
}



export default function FilterImageScreen({navigation, route}) {

    const userID= commonData.getUserID();
    const user = getuser();
    const category = categories();
    const filterpic = filterPics(userID, category);
    
    return (

        <View style={styles.screenConatiner}>
            <FlatList
                data = {user}
                keyExtractor = {user => user.userid}
                renderItem ={({item})=> 
                    <View style={styles.profileContainer}>
                        <AppUserCard 
                            image={item.userimage} 
                            title={item.username} 
                            subtitle={item.useremail}
                            onPress={()=> navigation.navigate("Welcome")}
                        />
                    </View>
                }
            />


            <FlatList
                data = {filterpic}
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
    },
    profileContainer:{
        padding: 20,
    }

})
