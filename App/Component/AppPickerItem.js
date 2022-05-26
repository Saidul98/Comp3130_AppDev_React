import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

import AppText from './AppText';
import AppIcon from './AppIcon';


export default function AppPickerItem({onPress, label, icon, backgroundColor }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.pickerContainer}>
            <AppIcon name={icon} iconColor="white" backgroundColor={backgroundColor} size={60}/>
            <View style={styles.text}>
                <AppText>{label}</AppText>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    pickerContainer: {
        flex: 1,
        margin: 10,
        justifyContent: "center",
        alignItems: 'center',
        padding: 20,
    },
    text: {
        marginTop: 5,
    },
})


