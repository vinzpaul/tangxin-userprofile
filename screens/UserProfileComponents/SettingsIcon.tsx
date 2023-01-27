import React, {useEffect, useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    SafeAreaView,
    Dimensions,
    Image,
    TouchableOpacity
} from "react-native";
import Modal from 'react-native-modal';

import {
    Ionicons,
    AntDesign,
    SimpleLineIcons,
    MaterialCommunityIcons,
    MaterialIcons
} from "@expo/vector-icons";

import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";

import {RootStackParamList} from "../UserProfile";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {useSelector} from 'react-redux';

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
    const ChangeGenderModal = () => {

        const handlePress = async (id) => {
            setSelected(id);
        }

        const handlePress2 = async (id) => {
            if (selected) {
                setImage(id === 1 ? <Ionicons name="male" size={24} color="#4362A5"/> :
                    <Ionicons name="female" size={24} color="#FF474E"/>)
            }
        }

        return (
            <SafeAreaView>
                <View style={styles.changeGenderModal}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={styles.cancelBtn}>取消</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        handlePress2;
                        setModalVisible(false)
                    }}>
                        <Text style={styles.acceptBtn}>确定</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={[
                            styles.textContainer,
                            selected === 1 && styles.selectedTextHighlight
                        ]}
                        onPress={() => handlePress(1)}
                    >
                        <Text style={[styles.text, selected === 1 && styles.selectedTextChangeColor]}>男</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.textContainer,
                            selected === 2 && styles.selectedTextHighlight
                        ]}
                        onPress={() => handlePress(2)}
                    >
                        <Text style={[styles.text, selected === 2 && styles.selectedTextChangeColor]}>女</Text>
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
        <ScrollView style={styles.mainContainer}>

            {/*Title and Back Button  */}
            <View style={styles.titleContainer}>
                <View style={styles.backBtn}>
                    <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                        <AntDesign name="left" size={24} color="white"/>
                    </TouchableOpacity>
                </View>
                <View style={{}}>
                    <Text style={styles.title}>设置</Text>
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
                    <ChangeGenderModal/>
                </View>
            </Modal>

            <View style={styles.innerContainer}>

                {/*Profile Photo*/}
                <TouchableOpacity onPress={() => navigation.navigate('ProfilePhoto')}>
                    <View style={styles.profilePhotoContainer}>
                        <Text style={styles.sectionTitle}>头像</Text>
                        <View style={styles.profilePhotoInnerContainer}>
                            {!selectedImage ? (
                                <Image
                                    style={styles.profilePhoto}
                                    source={require('../../assets/profilePhoto.jpg')}
                                />
                            ) : (
                                <Image
                                    style={styles.profilePhoto}
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
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>昵称</Text>
                        <View style={styles.sectionInnerContainer}>
                            <Text style={styles.sectionDetails}>受伤的期待</Text>
                            <AntDesign name="right" size={18} color="white"/>
                        </View>
                    </View>
                </TouchableOpacity>

                {/*Gender*/}
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>性别</Text>
                        <View style={styles.sectionInnerContainer}>
                            <View style={styles.genderContainer}>
                                <Text>{image}</Text>
                            </View>
                            <AntDesign name="right" size={18} color="white"/>
                        </View>
                    </View>
                </TouchableOpacity>

                {/*Mobile Number*/}
                <TouchableOpacity onPress={() => navigation.navigate('MobileBindRequest')}>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>手机号</Text>
                        <View style={styles.sectionInnerContainer}>
                            <Text style={styles.sectionDetails}>去绑定</Text>
                            <AntDesign name="right" size={18} color="white"/>
                        </View>
                    </View>
                </TouchableOpacity>

                {/*Introduction*/}
                <TouchableOpacity onPress={() => navigation.navigate('Introduction')}>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>个人简介</Text>
                        <View style={styles.sectionInnerContainer}>
                            <Text style={styles.sectionDetails}>用户很懒,什么也没留下</Text>
                            <AntDesign name="right" size={18} color="white"/>
                        </View>
                    </View>
                </TouchableOpacity>

                {/*Account*/}
                <View style={styles.actionAndOthersContainer}>
                    <Text style={styles.accountAndOthersTitle}>账号</Text>
                </View>

                <View style={styles.sectionContainer}>
                    <View style={styles.sectionInnerContainer}>
                        <SimpleLineIcons name="user" size={20} color="white"/>
                        <Text style={styles.accountAndOthersSection}>账号ID</Text>
                    </View>
                    <View style={styles.sectionInnerContainer}>
                        <Text style={{color: 'white'}}>CDWQMC</Text>
                        <TouchableOpacity>
                            <View style={styles.copyBtnContainer}>
                                <Text style={styles.copyBtn}>复制</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/*Account Certificate*/}
                <TouchableOpacity onPress={() => navigation.navigate('AccountCertificate')}>
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionInnerContainer}>
                            <MaterialCommunityIcons name="file-certificate-outline" size={20} color="white"/>
                            <Text style={styles.accountAndOthersSection}>账号凭证</Text>
                        </View>
                        <AntDesign name="right" size={18} color="white"/>
                    </View>
                </TouchableOpacity>

                {/*ACCOUNT RETRIEVAL*/}
                <TouchableOpacity onPress={() => navigation.navigate('AccountRetrieval')}>
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionInnerContainer}>
                            <MaterialIcons name="person-search" size={20} color="white"/>
                            <Text style={styles.accountAndOthersSection}>找回账号</Text>
                        </View>
                        <View style={styles.sectionInnerContainer}>
                            <Text style={styles.sectionDetails}>账号丢失极速找回</Text>
                            <AntDesign name="right" size={18} color="white"/>
                        </View>
                    </View>
                </TouchableOpacity>

                {/*Code*/}
                <TouchableOpacity onPress={() => navigation.navigate('RequestCode')}>
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionInnerContainer}>
                            <AntDesign name="codesquareo" size={20} color="white"/>
                            <Text style={styles.accountAndOthersSection}>绑定邀请码</Text>
                        </View>
                        <View style={styles.sectionInnerContainer}>
                            <Text style={styles.sectionDetails}>去绑定</Text>
                            <AntDesign name="right" size={18} color="white"/>
                        </View>
                    </View>
                </TouchableOpacity>
                {/*Account Ends Here*/}

                {/*Others*/}
                <View style={styles.actionAndOthersContainer}>
                    <Text style={styles.accountAndOthersTitle}>其他</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionInnerContainer}>
                            <AntDesign name="customerservice" size={20} color="white"/>
                            <Text style={styles.accountAndOthersSection}>联系客服</Text>
                        </View>
                        <View style={styles.sectionInnerContainer}>

                            <AntDesign name="right" size={18} color="white"/>
                        </View>
                    </View>
                </TouchableOpacity>

                {/*Privacy Policy*/}
                <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionInnerContainer}>
                            <MaterialIcons name="policy" size={20} color="white"/>
                            <Text style={styles.accountAndOthersSection}>隐私政策</Text>
                        </View>
                        <View style={styles.sectionInnerContainer}>
                            <AntDesign name="right" size={18} color="white"/>
                        </View>
                    </View>
                </TouchableOpacity>

                {/*Service Provisions*/}
                <TouchableOpacity onPress={() => navigation.navigate('ServiceProvisions')}>
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionInnerContainer}>
                            <MaterialIcons name="notes" size={20} color="white"/>
                            <Text style={styles.accountAndOthersSection}>服务条款</Text>
                        </View>
                        <View style={styles.sectionInnerContainer}>

                            <AntDesign name="right" size={18} color="white"/>
                        </View>
                    </View>
                </TouchableOpacity>

                {/*About*/}
                <TouchableOpacity onPress={() => navigation.navigate('About')}>
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionInnerContainer}>
                            <MaterialCommunityIcons name="heart-pulse" size={20} color="white"/>
                            <Text style={styles.accountAndOthersSection}>关于糖心</Text>
                        </View>
                        <View style={styles.sectionInnerContainer}>

                            <AntDesign name="right" size={18} color="white"/>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.sectionContainer}>
                    <View style={styles.sectionInnerContainer}>
                        <SimpleLineIcons name="lock" size={20} color="white"/>
                        <Text style={styles.accountAndOthersSection}>应用锁</Text>
                    </View>
                    <View style={styles.sectionInnerContainer}>
                        <AntDesign name="right" size={18} color="white"/>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, maxHeight: Dimensions.get("window").height,
        marginVertical: 20
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        backgroundColor: '#262632',
        height: 50
    },
    backBtn: {
        position: 'absolute', left: 5
    },
    title: {
        color: '#FFFFFF', textAlign: 'center', fontSize: 20
    },
    //
    innerContainer: {
        padding: 5
    },

    //Profile Photo
    profilePhotoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    profilePhotoInnerContainer: {
        flexDirection: 'row', alignItems: 'center'
    },
    profilePhoto: {
        width: 40, height: 40, borderRadius: 20, marginRight: 10
    },

    //Section, Account & Others Container
    sectionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 20
    },
    actionAndOthersContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 30
    },
    sectionTitle: {
        color: 'white', fontSize: 14
    },
    accountAndOthersTitle: {
        color: 'white', fontSize: 12
    },
    sectionInnerContainer: {
        flexDirection: 'row', alignItems: 'center'
    },
    sectionDetails: {
        color: 'white', fontSize: 14, marginRight: 10
    },
    accountAndOthersSection: {
        color: 'white', fontSize: 14, marginLeft: 5
    },
    copyBtnContainer: {
        backgroundColor: "#FF474E",
        width: 55,
        height: 25,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 5
    },
    copyBtn: {
        color: "white",
        textAlign: "center",
        fontSize: 12,
    },

    genderContainer: {
        marginRight: 10
    },
    //
    modalContainer: {
        margin: 0,
        width: Dimensions.get('window').width,
    },
    modal: {
        backgroundColor: '#262632',
        height: Dimensions.get('window').height / 5,
        top: 290,
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

    //Modal Component
    changeGenderModal: {
        marginVertical: 10,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    cancelBtn: {
        color: 'white'
    },
    acceptBtn: {
        color: '#FF474E'
    },
    selectedTextHighlight: {
        backgroundColor: '#191d26'
    },
    selectedTextChangeColor: {
        color: '#FF474E'
    }
});

export default SettingsIcon;
