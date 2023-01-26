import React, {useEffect, useState} from "react";
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
    FlatList, TouchableOpacity, ActivityIndicator, Button
} from "react-native";
import Modal from 'react-native-modal';

import {
    EvilIcons,
    FontAwesome5,
    Ionicons,
    Feather,
    Foundation,
    Entypo,
    AntDesign,
    SimpleLineIcons,
    MaterialCommunityIcons,
    MaterialIcons
} from "@expo/vector-icons";
import {transform} from "typescript";
import {NavigationContainer, useRoute} from "@react-navigation/native";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../UserProfile";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {useSelector, useDispatch, useStore} from 'react-redux';

const SettingsIcon = (props) => {

    const [isModalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const [mainImage, setMainImage] = useState(require('../../assets/profilePhoto.jpg'));
    const [tempImage, setTempImage] = useState(require('../../assets/profilePhoto.jpg'))

    const [loading, setIsLoading] = useState(false);

    const models = useSelector((store) => store['models'].current)
    const selectedImage = useSelector((store) => store['models'].selectedImage);

    useEffect(() => {
        async function getData() {
            setIsLoading(true);
            try {
                const value = await AsyncStorage.getItem('mainImage');
                if (value !== null) {
                    setIsLoading(false);
                    setTempImage(value);
                }
            } catch (e) {
                console.log(e)
                setIsLoading(false)
            }
        }

        getData();
    }, []);

    const [image, setImage] = useState(null);
    const [selected, setSelected] = useState(null);
    const MyText = () => {

        const handlePress = async (id) => {
            setSelected(id);
            // setImage(id === 1 ? <Ionicons name="male" size={24} color="#4362A5" /> : <Ionicons name="female" size={24} color="#FF474E" /> )
        }

        const handlePress2 = async (id) => {
            if (selected) {
                setImage(id === 1 ? <Ionicons name="male" size={24} color="#4362A5"/> :
                    <Ionicons name="female" size={24} color="#FF474E"/>)
            }
        }

        return (
            <SafeAreaView>
                <View style={{
                    marginVertical: 10,
                    padding: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20
                }}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={{color: 'white'}}>取消</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        handlePress2;
                        setModalVisible(false)
                    }}>
                        <Text style={{color: '#FF474E'}}>确定</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={[
                            styles.textContainer,
                            selected === 1 && {backgroundColor: '#191d26'}
                        ]}
                        onPress={() => handlePress(1)}
                    >
                        <Text style={[styles.text, selected === 1 && {color: '#FF474E'}]}>男</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.textContainer,
                            selected === 2 && {backgroundColor: '#191d26'}
                        ]}
                        onPress={() => handlePress(2)}
                    >
                        <Text style={[styles.text, selected === 2 && {color: '#FF474E'}]}>女</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    };

    useEffect(() => {
        async function saveSelected() {
            try {
                await AsyncStorage.setItem('selected', JSON.stringify(selected));
                await AsyncStorage.setItem('image', JSON.stringify(image));
            } catch (error) {
                console.log(error);
            }
        }

        return () => {
            saveSelected();
        };
    }, [selected, image]);

    useEffect(() => {
        const loadSelected = async () => {
            try {
                const selected = await AsyncStorage.getItem('selected');
                if (selected) {
                    setSelected(JSON.parse(selected));
                    setImage(JSON.parse(selected) === 1 ? <Ionicons name="male" size={24} color="#4362A5"/> :
                        <Ionicons name="female" size={24} color="#FF474E"/>)
                }
            } catch (e) {
                console.log(e)
            }
        }
        loadSelected();
    }, [])

    return (
        <ScrollView style={{
            flex: 1, maxHeight: Dimensions.get("window").height,
            marginVertical: 20
        }}>

            {/*Title and Back Button  */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 10,
                backgroundColor: '#262632',
                height: 50
            }}>
                <View style={{position: 'absolute', left: 5}}>
                    <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                        <AntDesign name="left" size={24} color="white"/>
                    </TouchableOpacity>
                </View>
                <View style={{}}>
                    <Text style={{color: '#FFFFFF', textAlign: 'center', fontSize: 20}}>设置</Text>
                </View>
            </View>

            {/*Modal for Gender*/}
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
                    <MyText/>
                </View>
            </Modal>

            <View style={{padding: 5}}>
                {/*Profile Photo*/}
                <TouchableOpacity onPress={() => navigation.navigate('ProfilePhoto')}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginHorizontal: 10
                    }}>
                        <Text style={{color: 'white', fontSize: 15}}>头像</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            {!selectedImage ? (
                                <Image
                                    style={{width: 40, height: 40, borderRadius: 20}}
                                    source={require('../../assets/profilePhoto.jpg')}
                                />
                            ) : (
                                <Image
                                    style={{width: 40, height: 40, borderRadius: 20, marginRight: 10}}
                                    source={selectedImage}
                                    defaultSource={selectedImage}
                                />
                            )}
                            <AntDesign name="right" size={18} color="white"/>
                        </View>
                    </View>
                </TouchableOpacity>

                {/*System Name Given*/}
                <TouchableOpacity onPress={() => navigation.navigate('PetName')}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginHorizontal: 10,
                        marginVertical: 20
                    }}>
                        <Text style={{color: 'white', fontSize: 14}}>昵称</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{color: 'white', fontSize: 14, marginRight: 10}}>受伤的期待</Text>
                            <AntDesign name="right" size={18} color="white"/>
                        </View>
                    </View>
                </TouchableOpacity>

                {/*Gender*/}
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginHorizontal: 10,
                        marginVertical: 5
                    }}>
                        <Text style={{color: 'white', fontSize: 14}}>性别</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            {/*<Image*/}
                            {/*    style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}*/}
                            {/*    source={image}*/}
                            {/*/>*/}
                            <View style={{marginRight: 10}}>
                                <Text>{image}</Text>
                            </View>
                            <AntDesign name="right" size={18} color="white"/>
                        </View>
                    </View>
                </TouchableOpacity>

                {/*Mobile Number*/}
                <TouchableOpacity onPress={() => navigation.navigate('BindRequest')}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginHorizontal: 10,
                        marginVertical: 20
                    }}>
                        <Text style={{color: 'white', fontSize: 14}}>手机号</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{color: 'white', fontSize: 14, marginRight: 10}}>去绑定</Text>
                            <AntDesign name="right" size={18} color="white"/>
                        </View>
                    </View>
                </TouchableOpacity>

                {/*Introduction*/}
                <TouchableOpacity onPress={() => navigation.navigate('Introduction')}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginHorizontal: 10,
                        marginVertical: 5
                    }}>
                        <Text style={{color: 'white', fontSize: 14}}>个人简介</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{color: 'white', fontSize: 14, marginRight: 10}}>用户很懒,什么也没留下</Text>
                            <AntDesign name="right" size={18} color="white"/>
                        </View>
                    </View>
                </TouchableOpacity>

                {/*Account*/}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    marginTop: 25
                }}>
                    <Text style={{color: 'white', fontSize: 12}}>账号</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    marginTop: 10
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <SimpleLineIcons name="user" size={20} color="white"/>
                        <Text style={{color: 'white', fontSize: 14, marginLeft: 5}}>账号ID</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{color: 'white'}}>CDWQMC</Text>
                        <View
                            style={{
                                backgroundColor: "#FF474E",
                                width: 55,
                                height: 25,
                                justifyContent: "center",
                                alignItems: "center",
                                marginLeft: 10,
                                marginRight: 5
                            }}
                        >
                            <Text
                                style={{
                                    color: "white",
                                    textAlign: "center",
                                    fontSize: 12,
                                }}
                            >
                                复制
                            </Text>
                        </View>
                    </View>
                </View>

                {/*Account Certificate*/}
                <TouchableOpacity onPress={() => navigation.navigate('AccountCertificate')}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginHorizontal: 10,
                        marginTop: 20
                    }}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <MaterialCommunityIcons name="file-certificate-outline" size={20} color="white"/>
                            <Text style={{color: 'white', fontSize: 14, marginLeft: 5}}>账号凭证</Text>
                        </View>
                        <AntDesign name="right" size={18} color="white"/>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('AccountRetrieval')}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginHorizontal: 10,
                        marginTop: 20
                    }}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <MaterialIcons name="person-search" size={20} color="white"/>
                            <Text style={{color: 'white', fontSize: 14, marginLeft: 5}}>找回账号</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{color: 'white', fontSize: 14, marginRight: 10}}>账号丢失极速找回</Text>
                            <AntDesign name="right" size={18} color="white"/>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    marginTop: 20
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <AntDesign name="codesquareo" size={20} color="white"/>
                        <Text style={{color: 'white', fontSize: 14, marginLeft: 5}}>绑定邀请码</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{color: 'white', fontSize: 14, marginRight: 10}}>去绑定</Text>
                        <AntDesign name="right" size={18} color="white"/>
                    </View>
                </View>
                {/*Account Ends Here*/}

                {/*Others*/}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    marginTop: 30
                }}>
                    <Text style={{color: 'white', fontSize: 12}}>其他</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    marginTop: 20
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <AntDesign name="customerservice" size={20} color="white"/>
                        <Text style={{color: 'white', fontSize: 14, marginLeft: 5}}>联系客服</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>

                        <AntDesign name="right" size={18} color="white"/>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    marginTop: 20
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialIcons name="policy" size={20} color="white"/>
                        <Text style={{color: 'white', fontSize: 14, marginLeft: 5}}>隐私政策</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <AntDesign name="right" size={18} color="white"/>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    marginTop: 20
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialIcons name="notes" size={20} color="white"/>
                        <Text style={{color: 'white', fontSize: 14, marginLeft: 5}}>服务条款</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>

                        <AntDesign name="right" size={18} color="white"/>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    marginTop: 20
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialCommunityIcons name="heart-pulse" size={20} color="white"/>
                        <Text style={{color: 'white', fontSize: 14, marginLeft: 5}}>关于糖心</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>

                        <AntDesign name="right" size={18} color="white"/>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    marginTop: 20
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <SimpleLineIcons name="lock" size={20} color="white"/>
                        <Text style={{color: 'white', fontSize: 14, marginLeft: 5}}>应用锁</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <AntDesign name="right" size={18} color="white"/>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 0,
        width: Dimensions.get('window').width,
    },
    modal: {
        backgroundColor: '#262632',
        // padding: 22,
        height: Dimensions.get('window').height / 5,
        top: 310,
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
});

export default SettingsIcon;
