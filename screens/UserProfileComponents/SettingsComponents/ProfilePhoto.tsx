import React, {useState, useEffect} from 'react';
import {
    Text,
    View,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity, StyleSheet
} from "react-native";

import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";

import {RootStackParamList} from "../../UserProfile";

import {AntDesign} from "@expo/vector-icons";

import AsyncStorage from '@react-native-async-storage/async-storage';

//Redux
import {useSelector, useDispatch} from "react-redux";

const ProfilePhoto = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const [tempImage, setTempImage] = useState(require('../../../assets/profilePhoto.jpg'))
    const [mainImage, setMainImage] = useState(require('../../../assets/profilePhoto.jpg'));

    const dispatch = useDispatch();
    const models = useSelector((store) => store['models'].possible);
    const girls = useSelector((store) => store['models'].current);
    const selectedImage = useSelector((store) => store['models'].selectedImage);

    //Changes Main Profile Photo placeholder on hover
    const tempMainImage = (newImage) => {
        setMainImage(newImage);
    }

    //Stores image in API AsyncStorage
    const changeMainImage = async (newImage) => {
        setMainImage(newImage);
        try {
            const jsonValue = JSON.stringify(newImage);
            await AsyncStorage.setItem('mainImage', jsonValue);

            navigation.navigate('Settings', {mainImage: mainImage});
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        async function getData() {
            try {
                const value = await AsyncStorage.getItem('mainImage');
                if (value !== null) {
                    setMainImage(value);
                }
            } catch (e) {
                console.log(e)
            }
        }

        getData();
    }, []);

    return (
        <ScrollView style={styles.container}>

            {/*Title and Back Button  */}
            <View style={styles.titleAndBackBtn}>
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                        <AntDesign name="left" size={24} color="white"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.textDesign}>修改头像</Text>
                </View>
                <TouchableOpacity style={styles.acceptBtn} onPress={() => {
                    changeMainImage(mainImage);
                    dispatch({type: 'SET_IMAGE', payload: mainImage})
                }}>
                    <Text style={styles.acceptBtnColor}>完成</Text>
                </TouchableOpacity>
            </View>

            {/*Main Profile Photo*/}
            <View style={styles.mainPhotoContainer}>
                {girls.map((girl, index) => (
                    <Image key={girl} source={mainImage} style={styles.mainPhoto}/>
                ))}
            </View>

            {/*Model List*/}
            <View style={styles.modelContainer}>
                {models.map((model, index) => (
                    <View key={model}>
                        <TouchableOpacity onPress={() => tempMainImage(model)}>
                            <Image source={model} style={styles.modelPhotos}/>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, maxHeight: Dimensions.get("window").height,
        marginVertical: 20
    },
    titleAndBackBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        backgroundColor: '#262632',
        height: 50
    },
    btnContainer: {
        position: 'absolute', left: 5
    },
    titleContainer: {
        flexDirection: 'row', alignItems: 'center'
    },
    textDesign: {
        color: '#FFFFFF', textAlign: 'center', fontSize: 20
    },
    acceptBtn: {
        position: 'absolute', right: 23
    },
    acceptBtnColor: {
        color: '#FF474E'
    },
    mainPhotoContainer: {
        alignItems: 'center', marginBottom: 20
    },
    mainPhoto: {
        flex: 1, width: 360, height: 360, borderRadius: 200
    },
    modelContainer: {
        flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'
    },
    modelPhotos: {
        width: 90, height: 90, borderRadius: 50
    }
});

export default ProfilePhoto;
