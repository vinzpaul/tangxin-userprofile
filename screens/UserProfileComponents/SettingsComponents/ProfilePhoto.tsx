import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    SafeAreaView,
    SectionList,
    StatusBar,
    Dimensions,
    Image,
    FlatList, TouchableOpacity
} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../UserProfile";
import {AntDesign} from "@expo/vector-icons";

import AsyncStorage from '@react-native-async-storage/async-storage'
const ProfilePhoto = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const [tempImage, setTempImage] = useState(require('../../../assets/profilePhoto.jpg'))
    const [mainImage, setMainImage] = useState(require('../../../assets/profilePhoto.jpg'));

    const tempMainImage = (newImage) => {
        setMainImage(newImage);
    }
    const changeMainImage = async (newImage) => {
        setMainImage(newImage);
        try {
            const jsonValue = JSON.stringify(newImage);
            await AsyncStorage.setItem('mainImage', jsonValue);

            navigation.navigate('Settings',{mainImage: mainImage});
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        async function getData() {
            try {
                const value = await AsyncStorage.getItem('mainImage');
                if(value !== null) {
                    setMainImage(value);
                }
            } catch(e) {
                console.log(e)
            }
        }
        getData();
    }, []);

    return (
        <ScrollView style={{flex: 1, maxHeight: Dimensions.get("window").height,
            marginVertical: 20}}>

            {/*Title and Back Button  */}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10, backgroundColor: '#262632', height: 50}}>
                <View style={{position: 'absolute', left: 5}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
                        <AntDesign name="left" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF', textAlign: 'center', fontSize: 20}}>修改头像</Text>
                </View>
                <TouchableOpacity style={{position: 'absolute', right: 23}} onPress={() => changeMainImage(mainImage)}>
                    <Text style={{color: '#FF474E'}}>完成</Text>
                </TouchableOpacity>
            </View>

            {/*Main Profile Photo*/}
            <View style={{alignItems: 'center', marginBottom: 20 }}>
                <Image source={mainImage} style={{ flex: 1, width: 360, height: 360, borderRadius: 200 }}/>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex: 1}}>
                    <TouchableOpacity onPress={() => tempMainImage(require("../../../assets/profilePhoto1.jpg"))}>
                        <Image source={require("../../../assets/profilePhoto1.jpg")} style={{ width: 90, height: 90, borderRadius: 50 }}/>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1}}>
                    <TouchableOpacity onPress={() => tempMainImage(require("../../../assets/profilePhoto2.jpg"))}>
                        <Image source={require("../../../assets/profilePhoto2.jpg")} style={{  width: 90, height: 90, borderRadius: 50 }}/>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1}}>
                    <TouchableOpacity onPress={() => tempMainImage(require("../../../assets/profilePhoto3.jpg"))}>
                        <Image source={require("../../../assets/profilePhoto3.jpg")} style={{  width: 90, height: 90, borderRadius: 50 }}/>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1}}>
                    <TouchableOpacity onPress={() => tempMainImage(require("../../../assets/profilePhoto4.jpg"))}>
                        <Image source={require("../../../assets/profilePhoto4.jpg")} style={{ width: 90, height: 90, borderRadius: 50 }}/>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default ProfilePhoto;
