import React from 'react';
import {View, StyleSheet, TextInput, Platform} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Color from '../config/Color';


function AppTextInput({icon, ...otherProps}){
    return(
        <View style={styles.container}>
            <MaterialCommunityIcons name = {icon} size={25} color={Color.defaultcolor}/>
            <TextInput style ={styles.textInput} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        backgroundColor:'#f2f2f2',
        flexDirection: 'row',
        borderRadius: 20,
        padding: 7,
        width: "80%",
        
        alignContent: 'center',

    },
    
    textInput:{
        flex: 1,
        color:'#000000',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 50,
    },
    
})
export default AppTextInput;