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
    FlatList, TouchableOpacity, ActivityIndicator, TextInput, Button
} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../UserProfile";

const PetName = () => {

    const [text, setText] = useState('请输入新的昵称');
    const [charactersLeft, setCharactersLeft] = useState(10);
    const handleTextChange = (input) => {
        if (input.length > 10){
            return
        }
        setText(input);
        setCharactersLeft(  10 - input.length)
    }

    const [message, setMessage] = useState(`受伤的期待`);

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <ScrollView style={{flex: 1, maxHeight: Dimensions.get("window").height,
            marginVertical: 20}}>

            {/*Title and Back Button  */}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10, backgroundColor: '#262632', height: 50}}>
                <View style={{position: 'absolute', left: 5}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
                        <AntDesign name="left" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF', textAlign: 'center', fontSize: 20}}>昵称</Text>
                </View>
            </View>

            <View style={{marginTop: 50}}>
                <TextInput
                    style={{borderBottomWidth: 1, borderBottomColor: '#FF474E', marginHorizontal: 40, color: 'white'}}
                    onChangeText={handleTextChange}
                    value={text}
                    maxLength={10}
                />
                <Text style={{textAlign: 'right', marginHorizontal: 40, color: 'white', fontSize: 10}}>{charactersLeft}/10</Text>

                <Text style={{textAlign: 'center',marginTop: 50, marginHorizontal: 40, color: 'white', fontSize: 12}}>每个自然月仅允许修改一次
                    </Text>

                <Text style={{textAlign: 'center',marginHorizontal: 40, color: 'white', fontSize: 12}}>请勿设置任何广告相关内容,可能导致禁止留言。</Text>

                <View style={{marginTop: 20, marginHorizontal: 20}}>
                    <Button title="提交" color="#FF474E"></Button>
                </View>
            </View>

        </ScrollView>
    )
}

export default PetName;
