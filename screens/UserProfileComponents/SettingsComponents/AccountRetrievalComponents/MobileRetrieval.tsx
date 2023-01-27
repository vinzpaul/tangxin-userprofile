import React, {useState, useEffect} from 'react';
import {Button, Dimensions, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const MobileRetrieval = () => {

    const navigation = useNavigation<any>();

    const [message1, setMessage1] = useState('请输入原来绑定的手机号');
    const [message2, setMessage2] = useState('请输入验证码');

    return (
        <ScrollView style={{
            flex: 1,
            maxHeight: Dimensions.get("window").height,
            marginVertical: 20,
            maxWidth: Dimensions.get("window").width,
        }}>
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
                    <TouchableOpacity onPress={() => navigation.navigate("AccountRetrieval")}>
                        <AntDesign name="left" size={24} color="white"/>
                    </TouchableOpacity>
                </View>
                <View style={{}}>
                    <Text style={{color: "#FFFFFF", textAlign: "center", fontSize: 20}}>
                        手机号找
                    </Text>
                </View>
            </View>

            <View style={{marginHorizontal: 25}}>
                <TextInput
                    onChangeText={setMessage1}
                    value={message1}
                    style={{
                        borderWidth: 1,
                        borderColor: '#FFFFFF',
                        color: '#FFFFFF',
                        padding: 10,
                        borderRadius: 5,
                        marginTop: 20
                    }}
                />
            </View>

            <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', marginHorizontal: 25}}>
                <View style={{flex: 6, flexDirection: 'row', alignItems: 'center'}}>
                    <TextInput
                        onChangeText={setMessage2}
                        value={message2}
                        style={{
                            borderWidth: 1,
                            borderColor: '#FFFFFF',
                            color: 'white',
                            padding: 10,
                            borderRadius: 5,
                            height: 50,
                        }}
                        placeholder="Enter your message here"
                    />
                </View>


                <View style={{flex: 4, backgroundColor: '#FF474E', borderRadius: 5}}>
                    <TouchableOpacity style={{height: 51, justifyContent: 'center'}}>
                        <Text style={{textAlign: 'center', color: '#FFFFFF'}}>获取验证码</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{marginTop: 20, marginHorizontal: 25}}>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        backgroundColor: '#FF474E',
                        width: 40,
                        height: 25,
                        borderRadius: 10,
                    }}>
                    <Text style={{textAlign: 'center', color: '#FFFFFF'}}>注意</Text>
                </TouchableOpacity>

                <Text style={{
                    color: 'white',
                    fontSize: 12,
                    marginTop: 5,
                    marginHorizontal: 2
                }}>手机号找回后将直接使用原手机号登录</Text>
            </View>

            <View style={{marginTop: 400, marginHorizontal: 25}}>
                <Button title="确定" color="#FF474E"></Button>
            </View>
        </ScrollView>
    )
}

export default MobileRetrieval;
