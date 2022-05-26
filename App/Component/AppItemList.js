
import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';

import AppColour from '../config/AppColour';
import Color from '../config/Color';
import AppText from './AppText';




export default function AppItemList({image, title, subtile, iconComponent, onPress }) {
    return (
        <TouchableHighlight onPress={onPress} underlayColor={Color.defaultcolor}>

            <View style={styles.listContainer}>
                {iconComponent}

                {image && <Image source={image} style={styles.image}/>}

                <View style={styles.textContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    {subtile && <AppText style={styles.subtitle}>{subtile}</AppText>}           
                </View>
            </View>

        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    image: {
        height:70,
        width:70,
        borderRadius: 40,
        marginLeft: 10, 
        borderColor: Color.defaultcolor,
        borderWidth: 2,
    },
    listContainer:{
        padding: 10,
        flexDirection: 'row',
    },
    textContainer: {
        justifyContent: 'center',
        marginLeft: 20,
    },
    title: {
        fontSize: 18,
    },
    subtile: {
        fontWeight: 'normal',
    }
})