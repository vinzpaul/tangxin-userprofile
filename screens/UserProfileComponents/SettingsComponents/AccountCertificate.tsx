import React, { useState, useEffect } from 'react';
import {
    Dimensions,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Image,
    FlatList,
    SafeAreaView,
    Button,
    Linking,
    Pressable
} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {useNavigation, Link} from "@react-navigation/native";

const data = [  { key: '官网地址:', text: 'txvlog.com' },  { key: '备用地址:', text: 'tangxin.one'},];
const AccountCertificate = () => {

    const navigation = useNavigation<any>();

    return (
        <ScrollView style={{flex: 1, maxHeight: Dimensions.get("window").height,
            marginVertical: 20, maxWidth: Dimensions.get('window').width}}>

            {/*Title and Back Button  */}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10, backgroundColor: '#262632', height: 50}}>
                <View style={{position: 'absolute', left: 5}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
                        <AntDesign name="left" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{}}>
                    <Text style={{color: '#FFFFFF', textAlign: 'center', fontSize: 20}}>账号凭证</Text>
                </View>
            </View>

            {/*QR CODE*/}
            <View style={{backgroundColor: '#FFFFFF', height: 400, marginHorizontal: 20, borderRadius: 7}}>

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                    <Image style={{
                        width: 35, height: 35
                    }} source={require('../../../assets/profilePhoto.jpg')} />
                    <Text style={{color: 'grey'}}>网黄UP主的性爱博客{"\n"}
                        分享你我的性福生活</Text>
                </View>

                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 200, height: 200}} source={require('../../../assets/qrcode.png')} />

                    <View style={{}}>
                        <Text style={{ color: 'grey', textAlign: 'justify' }}>官网地址: txvlog.com</Text>
                        <Text style={{ color: 'grey', textAlign: 'justify' }}>备用地址: tangxin.one</Text>
                        <Text style={{ color: 'grey', textAlign: 'justify', paddingLeft: 60 }}> tangxin.best</Text>
                    </View>
                </View>



                <View style={{
                    width: 20,
                    height: 20,
                    borderRadius: 60,
                    backgroundColor: '#191d26',
                    position: 'absolute',
                    bottom: 60,
                    left: -10,
                    zIndex: 1,
                }}>

                </View>

                <View style={{
                    borderTopWidth: 0.20,
                    borderTopColor: 'black',
                    marginHorizontal: 25,
                    top: 25,
                    padding: 5
                }}>
                    <Text style={{fontSize: 14, color: 'grey'}}>如果账号丢失,请到设置-找回账号-账号凭证
                        找回,上传凭证或扫描凭证</Text>
                </View>

                <View style={{
                    width: 20,
                    height: 20,
                    borderRadius: 60,
                    backgroundColor: '#191d26',
                    position: 'absolute',
                    bottom: 60,
                    right: -10,
                    zIndex: 1,
                }}>
                </View>
            </View>

            <View style={{marginTop: 20, marginHorizontal: 15}}>
                <Button title="保存账号凭证到手机" color="#FF474E"></Button>
            </View>

            <View style={{marginTop: 40}}>
                <Text style={{color: "#FF474E", textAlign: 'center', fontWeight: '600', fontSize: 17}}>账号丢失不用愁, 保存凭证解君忧!</Text>
            </View>

            <View style={{marginTop: 5, padding: 10}}>
                <Text style={{color: "#FFFFFF"}}>为什么要保存账号凭证?</Text>
                <Text style={{color: "#FFFFFF"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于行业特殊性,当app无法使用需要下载新的安装
                    包,以及系统升级等原因,用户进入app后自动生成了新
                    的账号,从而导致原账号丢失。</Text>
                <Text style={{color: "#FFFFFF"}}>对此,账号丢失的用户可在<TouchableOpacity onPress={() => Linking.openURL('https://example.com')} style={{justifyContent: 'center', alignItems:'center', padding: 0, margin: 0}}><Text style={{color: '#4362A5'}}>我的-设置-找回账号-账号
                    凭证找找</Text></TouchableOpacity>,扫描或上传该凭证二维码,即可找回升级更
                    新前的原账号,而原账号的VIP等级等全套资料也将得到
                    恢复。</Text>
            </View>
        </ScrollView>
    )
}

export default AccountCertificate;
