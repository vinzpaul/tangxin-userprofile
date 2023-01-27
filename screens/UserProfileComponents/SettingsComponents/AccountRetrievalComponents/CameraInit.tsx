import {Alert, Dimensions, ScrollView, Text, TouchableOpacity, View} from "react-native";
import React, {useState, useEffect} from "react";
import {Camera, CameraType} from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import {MaterialIcons, FontAwesome, Fontisto} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

const CameraInit = () => {

    const navigate = useNavigation<any>();

    // Camera
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [image, setImage] = useState(null);

    const [cameraRef, setCameraRef] = useState(null);
    const [hasPermission, setHasPermission] = useState(null);
    const toggleCameraType = () => {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    async function takePicture() {
        if (cameraRef) {
            const photo = await cameraRef.takePictureAsync();
            console.log(photo);
        }
    }

    async function pickImageFromGallery() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    }

    return (
        <ScrollView style={{
            flex: 1,
            maxHeight: Dimensions.get("window").height,
            marginVertical: 20,
            maxWidth: Dimensions.get("window").width,
        }}>
            {/*Camera*/}
            <View style={{}}>
                <Camera
                    style={{height: 500}}
                    type={type}
                    ref={ref => {
                        setCameraRef(ref);
                    }}
                >
                    <View
                        style={{
                            // flex: 1,
                            backgroundColor: 'transparent',
                            // flexDirection: 'row',
                        }}>
                    </View>

                    <TouchableOpacity onPress={() => navigate.navigate('AccountRetrieval')}
                                      style={{position: 'absolute', right: 25, top: 20}}>
                        <Fontisto name="close-a" size={24} color="white"/>
                    </TouchableOpacity>
                </Camera>

                <View style={{
                    marginTop: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly'
                }}>

                    <TouchableOpacity onPress={pickImageFromGallery}>
                        <FontAwesome name="photo" size={44} color="white"/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{}}
                        onPress={() => {
                            takePicture();
                        }}>
                        <MaterialIcons name="motion-photos-on" size={84} color="white"/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={toggleCameraType}>
                        <MaterialIcons name="flip-camera-android" size={54} color="white"/>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default CameraInit
