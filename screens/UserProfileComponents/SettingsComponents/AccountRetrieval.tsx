import React, {useState, useEffect} from 'react';
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    PanResponder, Button
} from "react-native";
import Modal from 'react-native-modal';
import {AntDesign, FontAwesome5} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {Camera, CameraType} from 'expo-camera';
import * as ImagePicker from "expo-image-picker";

const AccountRetrieval = () => {

    const navigation = useNavigation<any>();

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: (evt, gestureState) => {
            return gestureState.dy > 0;
        },
        onPanResponderMove: (evt, gestureState) => {
            // Update the position of the container based on the gesture
            setContainerPosition(gestureState.dy);
        },
        onPanResponderRelease: (evt, gestureState) => {
            // Update the position of the container based on the gesture
            setContainerPosition(gestureState.dy);
        },
    });

    const [containerPosition, setContainerPosition] = useState(0);

    const [isModalVisible, setModalVisible] = useState(false);

    const [image, setImage] = useState(null);
    const pickImageFromGallery = async () => {
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

    const ButtonModal = () => {
        return (
            <View style={{marginHorizontal: 20}}>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#262632',
                        height: 40,
                        justifyContent: 'center',
                        borderColor: 'grey',
                        borderWidth: 1,
                        borderRadius: 5
                    }}
                    onPress={() => {
                        setModalVisible(false);
                        navigation.navigate('CameraInit')
                    }}
                >
                    <Text style={{color: '#FFFFFF', textAlign: 'center'}}>扫描凭证</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: '#262632',
                        height: 40,
                        justifyContent: 'center',
                        borderColor: 'grey',
                        borderWidth: 1,
                        borderRadius: 5,
                        marginVertical: 7
                    }}
                    onPress={pickImageFromGallery}
                >
                    <Text style={{color: '#FFFFFF', textAlign: 'center'}}>上传凭证</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: '#262632',
                        height: 40,
                        justifyContent: 'center',
                        borderColor: 'grey',
                        borderWidth: 1,
                        borderRadius: 5
                    }}
                    onPress={() => setModalVisible(false)}
                >
                    <Text style={{color: '#FFFFFF', textAlign: 'center'}}>取消</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        // ===================================================================
        <View style={{
            flex: 1,
            maxHeight: Dimensions.get("window").height,
            marginVertical: 20,
            maxWidth: Dimensions.get("window").width,
        }}>

            {/*Modal*/}
            <Modal
                isVisible={isModalVisible}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                onBackdropPress={() => setModalVisible(false)}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection="down"
                style={styles.modalContainer}
            >
                <View style={styles.modal}>
                    <ButtonModal/>
                </View>
            </Modal>

            {/*============================================================================*/}

            {/*Title and Back Button  */}
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 10,
                    backgroundColor: "#262632",
                    height: 50,
                }}
            >
                <View style={{position: "absolute", left: 5}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                        <AntDesign name="left" size={24} color="white"/>
                    </TouchableOpacity>
                </View>
                <View style={{}}>
                    <Text style={{color: "#FFFFFF", textAlign: "center", fontSize: 20}}>
                        账号找回
                    </Text>
                </View>
            </View>

            <ScrollView
                contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}
            >
                <View {...panResponder.panHandlers} style={{height: 1000}}>
                    <View style={{transform: [{translateY: containerPosition}]}}>
                        <View>
                            <View
                                style={{
                                    backgroundColor: "#262632",
                                    height: 'auto',
                                    borderRadius: 5,
                                    padding: 0,
                                }}
                            >
                                <View
                                    style={{
                                        marginTop: 5,
                                    }}
                                >

                                    {/*FIRST BUTTON*/}
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('MobileRetrieval')}>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                padding: 3,
                                                marginHorizontal: 15,
                                            }}
                                        >
                                            <Text style={{color: "white", fontSize: 12}}>
                                                使用绑定手机号找回
                                            </Text>
                                            <FontAwesome5
                                                name="angle-right"
                                                size={20}
                                                color="#FFFFFF"
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            borderBottomColor: "white",
                                            borderBottomWidth: 1,
                                            marginTop: 10,
                                        }}
                                    ></View>
                                </View>

                                <View
                                    style={{
                                        marginVertical: 15,
                                    }}
                                >
                                    {/*SECOND BUTTON*/}
                                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                padding: 3,
                                                marginHorizontal: 15,
                                            }}
                                        >
                                            <Text style={{color: "white", fontSize: 12}}>
                                                使用原账号身份卡找回
                                            </Text>
                                            <FontAwesome5
                                                name="angle-right"
                                                size={20}
                                                color="#FFFFFF"
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            borderBottomColor: "white",
                                            borderBottomWidth: 1,
                                            marginTop: 10,
                                        }}
                                    ></View>
                                </View>

                                {/*THIRD BUTTON*/}
                                <View
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            padding: 3,
                                            marginHorizontal: 15,
                                        }}
                                    >
                                        <Text style={{color: "white", fontSize: 12}}>
                                            联系客服找回
                                        </Text>
                                        <FontAwesome5
                                            name="angle-right"
                                            size={20}
                                            color="#FFFFFF"
                                        />
                                    </View>
                                    <View
                                        style={{
                                            borderBottomColor: "white",
                                            borderBottomWidth: 1,
                                            marginTop: 10,
                                        }}
                                    ></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        marginBottom: Dimensions.get('window').height
    },
    modalContainer: {
        margin: 0,
        width: Dimensions.get('window').width,
    },
    modal: {
        backgroundColor: 'transparent',
        // padding: 22,
        height: Dimensions.get('window').height / 5,
        top: 270,
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    textContainer: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'transparent',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
    },
})
export default AccountRetrieval;
