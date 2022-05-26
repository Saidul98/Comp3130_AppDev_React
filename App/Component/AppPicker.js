import React, {useState} from 'react';
import { View, StyleSheet, Platform, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from './AppText';
import AppScreen from './AppScreen';
import AppPickerItem from './AppPickerItem';
import Color from '../config/Color';



function AppPicker({ data, icon, placeholder, numColumns, selectedItem, onSelectItem }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                        {icon && <MaterialCommunityIcons name={icon} size={30} color={Color.defaultcolor}/>}
                        <AppText style={styles.text}>{selectedItem? selectedItem.label : placeholder}</AppText>
                        <MaterialCommunityIcons name="chevron-down" size={30} color={Color.defaultcolor}/>
                </View>
            </TouchableWithoutFeedback>
            
            <Modal visible={modalVisible} animationType="slide">
                <AppScreen style={styles.slideScreen}>
                    <Button title="Close" onPress={() => setModalVisible(false)}/>
                    <FlatList
                        numColumns={numColumns}
                        data={data}
                        keyExtractor={item => item.value.toString()}
                        renderItem = {({item}) =>
                        <AppPickerItem
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                                }
                            }
                            label={item.label}
                            icon={item.icon}
                            backgroundColor={item.backgroundColor}
                            //iconSize = '30'
                        />}
                        
                    />
                </AppScreen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 15,
        padding: 10,
        margin: 10,
        alignItems: 'center',
    },
    text: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'android' ? "monospace" : "Avenir-Roman",
        marginLeft: 5,
    },
    slideScreen: {
        backgroundColor: 'white',
        marginTop: 0,
    }
})

export default AppPicker;
