import * as React from "react";
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
  FlatList, TouchableOpacity,
} from "react-native";

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
import { transform } from "typescript";
import {NavigationContainer} from "@react-navigation/native";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../UserProfile";

const SettingsIcon = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return(
      <ScrollView style={{flex: 1, maxHeight: Dimensions.get("window").height,
        marginVertical: 20}}>

        {/*Title and Back Button  */}
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10, backgroundColor: '#262632', height: 50}}>
           <View style={{position: 'absolute', left: 5}}>
               <TouchableOpacity onPress={()=>navigation.navigate('UserProfile')}>
                   <AntDesign name="left" size={24} color="white" />
               </TouchableOpacity>
           </View>
            <View style={{}}>
                <Text style={{color: '#FFFFFF', textAlign: 'center', fontSize: 20}}>设置</Text>
            </View>
        </View>

        <View style={{padding: 5}}>
            {/*Profile Photo*/}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10}}>
                <Text style={{color: 'white', fontSize: 15}}>头像</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ProfilePhoto')}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
                            source={require("../../assets/profilePhoto.jpg")}
                        />
                        <AntDesign name="right" size={18} color="white" />
                    </View>
                </TouchableOpacity>
            </View>

            {/*System Name Given*/}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 20}}>
                <Text style={{color: 'white', fontSize: 14}}>昵称</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize: 14, marginRight: 10}}>受伤的期待</Text>
                    <AntDesign name="right" size={18} color="white" />
                </View>
            </View>

            {/*Gender*/}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 5}}>
                <Text style={{color: 'white', fontSize: 14}}>性别</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <AntDesign name="right" size={18} color="white" />
                </View>
            </View>

            {/*Mobile Number*/}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 20}}>
                <Text style={{color: 'white', fontSize: 14}}>手机号</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize: 14, marginRight: 10}}>去绑定</Text>
                    <AntDesign name="right" size={18} color="white" />
                </View>
            </View>

            {/*Introduction*/}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 5}}>
                <Text style={{color: 'white', fontSize: 14}}>个人简介</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize: 14, marginRight: 10}}>用户很懒,什么也没留下</Text>
                    <AntDesign name="right" size={18} color="white" />
                </View>
            </View>

            {/*Account*/}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 25}}>
                <Text style={{color: 'white', fontSize: 12}}>账号</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <SimpleLineIcons name="user" size={20} color="white" />
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
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialCommunityIcons name="file-certificate-outline" size={20} color="white" />
                    <Text style={{color: 'white', fontSize: 14, marginLeft: 5}}>账号凭证</Text>
                </View>
                <AntDesign name="right" size={18} color="white" />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialIcons name="person-search" size={20} color="white" />
                    <Text style={{color: 'white', fontSize: 14, marginLeft: 5}}>找回账号</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize: 14, marginRight: 10}}>账号丢失极速找回</Text>
                    <AntDesign name="right" size={18} color="white" />
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <AntDesign name="codesquareo" size={20} color="white" />
                    <Text style={{color: 'white', fontSize: 14, marginLeft: 5}}>绑定邀请码</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize: 14, marginRight: 10}}>去绑定</Text>
                    <AntDesign name="right" size={18} color="white" />
                </View>
            </View>
            {/*Account Ends Here*/}

            {/*Others*/}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 30}}>
                <Text style={{color: 'white', fontSize: 12}}>其他</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <AntDesign name="customerservice" size={20} color="white" />
                    <Text style={{color: 'white', fontSize: 14, marginLeft: 5}}>联系客服</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>

                    <AntDesign name="right" size={18} color="white" />
                </View>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialIcons name="policy" size={20} color="white" />
                    <Text style={{color: 'white', fontSize: 14, marginLeft: 5}}>隐私政策</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <AntDesign name="right" size={18} color="white" />
                </View>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialIcons name="notes" size={20} color="white" />
                    <Text style={{color: 'white', fontSize: 14, marginLeft: 5}}>服务条款</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>

                    <AntDesign name="right" size={18} color="white" />
                </View>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialCommunityIcons name="heart-pulse" size={20} color="white" />
                    <Text style={{color: 'white', fontSize: 14, marginLeft: 5}}>关于糖心</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>

                    <AntDesign name="right" size={18} color="white" />
                </View>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <SimpleLineIcons name="lock" size={20} color="white" />
                    <Text style={{color: 'white', fontSize: 14, marginLeft: 5}}>应用锁</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <AntDesign name="right" size={18} color="white" />
                </View>
            </View>
        </View>
      </ScrollView>
  )
};

export default SettingsIcon;
