import React ,{useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';


import DataManager from '../Data/DataManager';
import AppTextInput from '../Component/AppTextInput'
import AppPicker from '../Component/AppPicker';
import AppButton from '../Component/AppButton';
import AppIcon from '../Component/AppIcon';


const categories =[
    {label: "Nature", value:1, icon:"image-filter-hdr", backgroundColor:"green"},
    {label: "Food", value:2, icon:"food", backgroundColor:"#fac775"},
    {label: "Family", value:3, icon:"home-heart", backgroundColor:"red"},
    {label: "Event", value:4, icon:"calendar-multiple-check", backgroundColor:"blue"},
]; 

  
export default function AddImageScreen({navigation}) {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [detail, setDetail] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState(null);

    const [titleError, setTitleError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [imageError, setImageError] = useState("");

 
    const doErrorCheck =() =>{
        setTitleError( title.length>0? " ": "Please set a valid caption");
        setCategoryError( category? " ": "Please select a category from the list");  
        setImageError(image? " ": "Please select an image");
        return (( title.length>0) && (category) && (image)? true: false)
    }

    let openImagePickerAsync = async() =>{
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(permissionResult.granted === false){
            alert("Permission to access camera roll is required !");
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        
        if(pickerResult.cancelled === true){
            return;
        }
        setImage({path: pickerResult.uri}) 
    }


    const addpic = () => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();

        const pics = commonData.getPics(user);
        const picsid = pics.length+1;

        const newPic ={
            title: title,
            category: category.label,
            detail: detail,
            location: location,
            picsID: picsid.toString(),
            userid: user,
            image:image.path,
        }
            commonData.addPic(newPic);
            console.log(newPic);
    }
  
  
    return (
        <View style={styles.container}>



            <AppTextInput 
                icon ="tag-outline"
                placeholder = "Caption"
                value = {title}
                onChangeText = {(inputText) => setTitle(inputText)}
            />

            {titleError.length>0 ? <Text style={{margin:5, color:"red", fontSize:15}}>{titleError}</Text>: <></>}

            <AppTextInput 
                icon ="text"
                placeholder = "Detail"
                value = {detail}
                onChangeText = {(inputText) => setDetail(inputText)}
            />

            <AppTextInput 
                icon ="map-marker-radius-outline"
                placeholder = "Location"
                value = {location}
                onChangeText = {(inputText) => setLocation(inputText)}
            />

            <AppPicker
                selectedItem = {category}
                onSelectItem = {item => setCategory(item)}
                data = {categories}
                icon = "blur"
                placeholder="Categories"
                numColumns={2}
            />
            
            {categoryError.length>0 ? <Text style={{margin:5, color:"red", fontSize:15}}>{categoryError}</Text>: <></>}

            
            <TouchableOpacity style ={styles.imageButton} onPress={openImagePickerAsync}>
                <AppIcon name = "camera" size = {80}/>
                {image && <Image source = {{uri: image.path}} style={{height:200, width:300}}/>}
                {imageError.length>0 ? <Text style={{margin:5, color:"red", fontSize:15}}>{imageError}</Text>: <></>}
            </TouchableOpacity>


            <TouchableOpacity style={styles.addPicBtn} onPress={()=>{
                    if(doErrorCheck()){
                        addpic();
                        navigation.navigate("Home"); 
                    }
                }}
            >
                <Text style={styles.addPicText}>Save Memories</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        marginTop: 15,
    },

    addPicBtn:{
        width: '100%',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        backgroundColor: '#121212',
    },
    addPicText:{
        color:'#ffffff',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 20,
    },
    imageButton:{
        flexDirection:'row'

    }

});
