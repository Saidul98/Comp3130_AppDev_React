import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';


function AppButton({title, onPress, color}) {
    return (
        <TouchableOpacity onPress ={onPress}  style={styles.buttonContainer} >
            <View style={styles.button} backgroundColor ={color} >
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    
    buttonContainer:{
        marginTop: 10,
        padding:15,
    },
    
    button: {
        width:70,
        borderRadius: 20,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color:'#ffffff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default AppButton;