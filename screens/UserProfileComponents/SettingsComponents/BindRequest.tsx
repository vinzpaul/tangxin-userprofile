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
    FlatList, TouchableOpacity, ActivityIndicator, Button, TextInput
} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../UserProfile";
const BindRequest = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const [message1, setMessage1] = useState('请输入需要绑定的手机号');
    const [message2, setMessage2] = useState('请输入短信验证码');


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
                    <Text style={{color: '#FFFFFF', textAlign: 'center', fontSize: 20}}>绑定邀请码</Text>
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
                        borderRadius: 5
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
                        <Text style={{textAlign: 'center', color: '#FFFFFF'}}>获取短信验证码</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{marginTop: 20, marginHorizontal: 25}}>
                <Button title="绑定邀请码" color="#FF474E"></Button>
            </View>
        </ScrollView>
    )
}

export default BindRequest;
