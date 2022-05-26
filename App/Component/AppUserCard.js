import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import Color from '../config/Color';


export default function AppUserCard({title, image, onPress}) {
    return (
        <View style={styles.cardContainer}>
            {isFinite(image)? <Image source={image} style={styles.image}/> : <Image source={{uri: image}} style={styles.image}/>}
            <Text style={styles.title}>{title}'s<Text style={styles.title2}> Memories</Text></Text>
            <TouchableOpacity style={styles.logOutBtn} onPress={onPress}>
                <MaterialCommunityIcons name = "logout" size = {35}  color='white'/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },

    image: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    
    title: {
        fontSize: 22,
        color: 'black',
        fontFamily: 'monospace',
        fontWeight: 'bold'
    },
    title2: {
        fontSize: 26,
        color: Color.defaultcolor,
        fontFamily: 'monospace',
        fontWeight: 'bold'
    },


    logOutBtn:{
        width:"8%",
        backgroundColor: 'red',
        borderRadius: 8,
    },
})