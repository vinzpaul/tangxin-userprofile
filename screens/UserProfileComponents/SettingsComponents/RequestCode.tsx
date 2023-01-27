import React, {useState} from 'react';
import {
    Dimensions,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Button,
    KeyboardAvoidingView,
} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const RequestCode = () => {

    const navigation = useNavigation<any>();

    const [message1, setMessage1] = useState('请填写邀请码');
    return (
        <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
            <ScrollView style={{
                flex: 1,
                maxHeight: Dimensions.get("window").height,
                marginVertical: 20,
                maxWidth: Dimensions.get("window").width,
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
                        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                            <AntDesign name="left" size={24} color="white"/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{color: '#FFFFFF', textAlign: 'center', fontSize: 20}}>填写邀请码</Text>
                    </View>
                </View>

                <View style={{marginTop: 20, marginHorizontal: 15}}>
                    <TextInput
                        onChangeText={setMessage1}
                        value={message1}
                        style={{
                            borderWidth: 1,
                            borderColor: '#FF474E',
                            color: '#FFFFFF',
                            padding: 10,
                            borderRadius: 5
                        }}
                    />
                </View>

                <View style={{marginTop: 150, marginHorizontal: 15}}>
                    <Button title="确定" color="#FF474E"></Button>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default RequestCode;
