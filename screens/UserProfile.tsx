import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    SafeAreaView,
    Dimensions,
    Image,
    TouchableOpacity,
} from "react-native";

import {
    EvilIcons,
    FontAwesome5,
    Ionicons,
    Feather,
    Foundation,
    Entypo,
} from "@expo/vector-icons";

import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
    Settings: undefined;
    UserProfile: undefined;
    ProfilePhoto: undefined;
    PetName: undefined;
    MobileBindRequest: undefined;
    Introduction: undefined;
    AccountCertificate: undefined;
    AccountRetrieval: undefined;
    MobileRetrieval: undefined;
    CameraInit: undefined;
    RequestCode: undefined;
    PrivacyPolicy: undefined;
    ServiceProvisions: undefined;
    About: undefined;
    Chat: undefined;
};
import {useSelector} from "react-redux";

//Used for CSS Custom Gap
const gap = 8;
const UserProfile = ({}) => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const selectedImage = useSelector((store) => store['models'].selectedImage);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View
                style={styles.container}
            >
                <ScrollView
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                >
                    {/* First Container and Settings Icon */}
                    <View style={styles.innerContainer}>
                        <View
                            style={styles.settingsIcon}
                        >
                            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                                <EvilIcons name="gear" size={28} color="white"/>
                            </TouchableOpacity>
                        </View>

                        <View
                            style={styles.firstContainer}
                        >
                            <View style={styles.profilePhotoContainer}>
                                {!selectedImage ? (
                                    <Image
                                        style={styles.profilePhoto}
                                        source={require('../assets/profilePhoto.jpg')}
                                    />
                                ) : (
                                    <Image
                                        style={styles.profilePhoto}
                                        source={selectedImage}
                                        defaultSource={selectedImage}
                                    />
                                )}
                                <View
                                    style={styles.profileDetails}
                                >
                                    <View>
                                        <Text
                                            style={styles.profileName}
                                        >
                                            受伤的期待
                                        </Text>
                                        <View
                                            style={styles.coinTicketFreeWatchContainer}
                                        >
                                            <Text
                                                style={styles.goldCoin}
                                            >
                                                金币: 0
                                            </Text>
                                            <Text
                                                style={styles.profileDetails2}
                                            >
                                                观影券: 0
                                            </Text>
                                            <Text
                                                style={styles.profileDetails2}
                                            >
                                                免费观看 : 0
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={styles.homeButtonContainer}
                                    >
                                        <Text
                                            style={styles.homeButton}
                                        >
                                            主页
                                        </Text>
                                        <FontAwesome5
                                            name="angle-right"
                                            size={15}
                                            color="white"
                                        />
                                    </View>
                                </View>
                            </View>
                            <View
                                style={styles.horizontalRule}
                            ></View>
                            <View
                                style={styles.profileDetails3}
                            >
                                <Text
                                    style={styles.profileDetails3Text}
                                >
                                    动态 0
                                </Text>
                                <Text
                                    style={styles.profileDetails3Text}
                                >
                                    关注 0
                                </Text>
                                <Text
                                    style={styles.profileDetails3Text}
                                >
                                    粉丝 0
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Second Container */}
                    <View style={styles.innerContainer}>
                        <View
                            style={styles.secondContainer}
                        >
                            <View
                                style={styles.vipContainer}
                            >
                                <FontAwesome5 name="medal" size={28} color="#996B3C"/>
                                <View style={styles.medalToTextMargin}>
                                    <Text style={styles.secondContainerTitle}>
                                        开通会员
                                    </Text>
                                    <View
                                        style={styles.secondContainerDetailsBorder}
                                    >
                                        <Text
                                            style={styles.secondContainerDetails}
                                        >
                                            享无限观看，购片折扣等权益
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.secondContainerArrowBtn}>
                                    <FontAwesome5
                                        name="angle-right"
                                        size={25}
                                        color="#996B3C"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Third Container */}
                    <View style={styles.innerContainer}>
                        <View
                            style={styles.thirdContainer}
                        >
                            <View
                                style={styles.thirdContainerContent}
                            >
                                <View
                                    style={styles.iconAndTextArrangement}
                                >
                                    <Ionicons name="ribbon-sharp" size={25} color="white"/>
                                    <Text
                                        style={styles.thirdContainerText}
                                    >
                                        升级会员
                                    </Text>
                                </View>

                                <View
                                    style={styles.iconAndTextArrangement}
                                >
                                    <Ionicons
                                        name="md-wallet-outline"
                                        size={25}
                                        color="white"
                                    />
                                    <Text
                                        style={styles.thirdContainerText}
                                    >
                                        我的卡包
                                    </Text>
                                </View>

                                <View
                                    style={styles.iconAndTextArrangement}
                                >
                                    <FontAwesome5
                                        name="envelope-open-text"
                                        size={25}
                                        color="white"
                                    />
                                    <Text
                                        style={styles.thirdContainerText}
                                    >
                                        我的收藏
                                    </Text>
                                </View>

                                <View
                                    style={styles.iconAndTextArrangement}
                                >
                                    <Feather name="shopping-cart" size={25} color="white"/>
                                    <Text
                                        style={styles.thirdContainerText}
                                    >
                                        我的购买
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Fourth Container */}
                    <View style={styles.innerContainer}>
                        <View
                            style={styles.fourthContainer}
                        >
                            <View
                                style={styles.fourthContainerContent}
                            >
                                <View
                                    style={styles.fourthIconsAndTextArrangement}
                                >
                                    <Foundation
                                        name="clipboard-pencil"
                                        size={25}
                                        color="white"
                                    />
                                    <Text
                                        style={styles.fourthText}
                                    >
                                        发布动态
                                    </Text>
                                </View>

                                <View style={styles.fourthIconsAndTextArrangement}>
                                    <Entypo name="video" size={25} color="white"/>
                                    <Text
                                        style={styles.fourthText}
                                    >
                                        视频投稿
                                    </Text>
                                </View>

                                <View style={styles.fourthIconsAndTextArrangement}>
                                    <FontAwesome5 name="gem" size={18} color="white"/>
                                    <Text
                                        style={styles.fourthText}
                                    >
                                        我要认证
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Fifth Container */}
                    <View style={styles.innerContainer}>
                        <View
                            style={styles.fifthContainer}
                        >
                            <View
                                style={styles.sectionContainer}
                            >
                                <View
                                    style={styles.textAndBtn}
                                >
                                    <Text style={styles.fifthText}>
                                        历史记录
                                    </Text>
                                    <FontAwesome5
                                        name="angle-right"
                                        size={20}
                                        color="#FFFFFF"
                                    />
                                </View>
                                <View
                                    style={styles.fifthHorizontalRule}
                                ></View>
                            </View>

                            <View
                                style={styles.sectionContainer}
                            >
                                <View
                                    style={styles.textAndBtn}
                                >
                                    <Text style={styles.fifthText}>
                                        离线缓存
                                    </Text>
                                    <FontAwesome5
                                        name="angle-right"
                                        size={20}
                                        color="#FFFFFF"
                                    />
                                </View>
                                <View
                                    style={styles.fifthHorizontalRule}
                                ></View>
                            </View>

                            <View
                                style={styles.sectionContainer}
                            >
                                <View
                                    style={styles.textAndBtn}
                                >
                                    <Text style={styles.fifthText}>
                                        分享推广
                                    </Text>
                                    <FontAwesome5
                                        name="angle-right"
                                        size={20}
                                        color="#FFFFFF"
                                    />
                                </View>
                                <View
                                    style={styles.fifthHorizontalRule}
                                ></View>
                            </View>

                            <View
                                style={styles.sectionContainer}
                            >
                                <View
                                    style={styles.textAndBtn}
                                >
                                    <Text style={styles.fifthText}>
                                        账号凭证
                                    </Text>
                                    <FontAwesome5
                                        name="angle-right"
                                        size={20}
                                        color="#FFFFFF"
                                    />
                                </View>
                                <View
                                    style={styles.fifthHorizontalRule}
                                ></View>
                            </View>

                            <View
                                style={styles.sectionContainer}
                            >
                                <View
                                    style={styles.textAndBtn}
                                >
                                    <Text style={styles.fifthText}>
                                        在线客服
                                    </Text>
                                    <FontAwesome5
                                        name="angle-right"
                                        size={20}
                                        color="#FFFFFF"
                                    />
                                </View>
                                <View
                                    style={styles.fifthHorizontalRule}
                                ></View>
                            </View>

                            <View
                                style={styles.sectionContainer}
                            >
                                <View
                                    style={styles.textAndBtn}
                                >
                                    <Text style={styles.fifthText}>
                                        精品应用
                                    </Text>
                                    <FontAwesome5
                                        name="angle-right"
                                        size={20}
                                        color="#FFFFFF"
                                    />
                                </View>
                                <View
                                    style={styles.fifthHorizontalRule}
                                ></View>
                            </View>

                            <View
                                style={styles.sectionContainer}
                            >
                                <View
                                    style={styles.textAndBtn}
                                >
                                    <Text style={styles.fifthText}>
                                        官方群组
                                    </Text>
                                    <FontAwesome5
                                        name="angle-right"
                                        size={20}
                                        color="#FFFFFF"
                                    />
                                </View>
                                <View
                                    style={styles.fifthHorizontalRule}
                                ></View>
                            </View>

                            <View
                                style={styles.emailContainer}
                            >
                                <Text style={styles.fifthText}>
                                    官方邮箱linnannan101@gmail.com
                                </Text>
                                <TouchableOpacity>
                                    <View
                                        style={styles.copyBtnContainer}
                                    >
                                        <Text
                                            style={styles.copyBtn}
                                        >
                                            复制
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    },
    scrollView: {
        flex: 1,
        paddingVertical: gap / -2
    },
    container: {
        flex: 1,
        maxHeight: Dimensions.get("window").height,
        marginHorizontal: 15,
        marginVertical: 20,
    },
    innerContainer: {
        marginVertical: gap / 1
    },
    settingsIcon: {
        display: "flex",
        alignItems: "flex-end",
        padding: 10,
        flex: 1,
    },

    // First Container
    firstContainer: {
        backgroundColor: "#262632",
        borderRadius: 5,
        height: 100,
        flex: 1,
    },
    profilePhotoContainer: {
        flexDirection: "row", padding: 10
    },
    profilePhoto: {
        width: 40, height: 40, borderRadius: 20
    },
    profileDetails: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 8,
    },
    profileName: {
        color: "white",
        fontSize: 15,
        fontWeight: "600",
    },
    coinTicketFreeWatchContainer: {
        flexDirection: "row",
        paddingHorizontal: gap / -2,
    },
    goldCoin: {
        color: "white",
        fontSize: 11,
    },
    profileDetails2: {
        color: "white",
        fontSize: 11,
        marginHorizontal: gap / 2,
    },
    homeButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        right: -100,
    },
    homeButton: {
        color: "white",
        fontSize: 13,
        marginRight: 5,
    },
    horizontalRule: {
        borderTopColor: "white",
        borderTopWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 10,
    },
    profileDetails3: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 50,
        paddingTop: 5,
    },
    profileDetails3Text: {
        color: "white", fontSize: 13, fontWeight: "600"
    },

    // Second Container
    secondContainer: {
        backgroundColor: "#FDE5C3",
        borderRadius: 10,
        height: 50,
        padding: 5,
    },
    vipContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
    },
    medalToTextMargin: {
        marginLeft: 5
    },
    secondContainerTitle: {
        color: "#996B3C", fontWeight: "600"
    },
    secondContainerDetailsBorder: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#996B3C",
    },
    secondContainerDetails: {
        color: "#996B3C",
        marginHorizontal: 10,
    },
    secondContainerArrowBtn: {
        position: "absolute", right: 5
    },

    //Third Container
    thirdContainer: {
        backgroundColor: "#262632",
        height: 80,
        borderRadius: 5,
    },
    thirdContainerContent: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginHorizontal: -15,
    },
    iconAndTextArrangement: {
        justifyContent: "center",
        alignItems: "center",
    },
    thirdContainerText: {
        color: "white",
        textAlign: "center",
        fontSize: 12,
        marginTop: 5,
    },

    // Fourth Container
    fourthContainer: {
        backgroundColor: "#262632",
        height: 50,
        borderRadius: 5,
        justifyContent: "center",
    },
    fourthContainerContent: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginHorizontal: -15,
    },
    fourthIconsAndTextArrangement: {
        flexDirection: "row",
        alignItems: "center",
    },
    fourthText: {
        color: "white", fontSize: 12, marginLeft: 5
    },

    // Fifth Container
    fifthContainer: {
        backgroundColor: "#262632",
        height: 450,
        borderRadius: 5,
        padding: 12,
    },
    sectionContainer: {
        marginHorizontal: 5,
        marginTop: 10,
    },
    textAndBtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 3,
    },
    fifthText: {
        color: "white", fontSize: 12
    },
    fifthHorizontalRule: {
        borderBottomColor: "white",
        borderBottomWidth: 1,
        marginTop: 10,
    },
    emailContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
    },
    copyBtnContainer: {
        backgroundColor: "#FF474E",
        width: 55,
        height: 25,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
    },
    copyBtn: {
        color: "white",
        textAlign: "center",
        fontSize: 12,
    }
});

export default UserProfile;
