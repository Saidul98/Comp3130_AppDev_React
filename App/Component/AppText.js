import React from 'react';

import { Text, StyleSheet } from 'react-native';
import Color from '../config/Color';


function Apptext({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'monospace',
        fontSize: 20,
    },
})

export default Apptext;