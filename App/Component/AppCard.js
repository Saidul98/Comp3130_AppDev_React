import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Color from '../config/Color';




export default function AppCard({title, subtitle, image, detail, location, onPress}) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardContentContainer}>
                {isFinite(image)? <Image source={image} style={styles.image}/> : <Image source={{uri: image}} style={styles.image}/>}
                
                <View style={styles.detailContainer}>
                    <MaterialCommunityIcons name = "tag-outline" icon = "blur" size = {20}  color={Color.defaultcolor}/>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
                
                <View style={styles.detailContainer}> 
                    <MaterialCommunityIcons name = "apps" size = {20}  color={Color.defaultcolor}/>
                    <Text style={styles.subtitle}>
                        {subtitle}
                    </Text> 
                </View>
                
                <View style={styles.detailContainer}>
                    <MaterialCommunityIcons name = "text" size = {20}  color={Color.defaultcolor}/>
                    <Text style={styles.subtitle}>
                        {detail}
                    </Text> 
                </View>


                <View style={styles.detailContainer}>
                    <MaterialCommunityIcons name = "map-marker-radius-outline" size = {20}  color={Color.defaultcolor}/>
                    <Text style={styles.subtitle}>
                        {location}
                    </Text> 
                </View>

            </View>

                <TouchableOpacity style={styles.logOutBtn} onPress={onPress}>
                    <MaterialCommunityIcons name = "delete" size = {35}  color='white'/>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        paddingVertical:25,
        paddingHorizontal: 25,
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden',
        width: "100%",
        flexWrap: 'wrap',
    },

    cardContentContainer:{
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    image: {
        height: 150,
        width: 300,
        borderRadius: 10,
    },
    
    title: {
        marginLeft: 10,
        fontSize: 22,
        padding: 5,
        fontWeight: 'bold',
    },
    subtitle: {
        marginLeft: 10,
        padding: 5,
        fontSize: 20,
        fontWeight: 'normal',
        alignItems: 'center'
    },
    detailContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,

    },
    logOutBtn:{
        width:"10%",
        backgroundColor: Color.defaultcolor,
        borderRadius: 8,
        marginTop: 10,
        marginLeft: 50,
    },
})