import React, {useState, useEffect} from 'react';
import {Button, Dimensions, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const Introduction = () => {

    const navigation = useNavigation<any>();

    const [text, setText] = useState('用户很懒,什么也没留下');
    const [charactersLeft, setCharactersLeft] = useState(100);
    const handleTextChange = (input) => {
        if (input.length > 100){
            return
        }
        setText(input);
        setCharactersLeft(  100 - input.length)
    }

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
                    <Text style={{color: '#FFFFFF', textAlign: 'center', fontSize: 20}}>签名</Text>
                </View>
            </View>

            <View style={{borderWidth: 1,
                borderColor: '#FFFFFF', marginHorizontal: 15, borderRadius: 5, height: 300}}>
                <TextInput
                    style={{
                        color: 'white',
                        padding: 10,
                        borderRadius: 5,
                    }}
                    onChangeText={handleTextChange}
                    value={text}
                    maxLength={100}
                />

                <Text style={{textAlign: 'right', position: 'absolute', bottom: 20, right: 20, color: '#FFFFFF'}}>{charactersLeft}/100</Text>
            </View>

            <View style={{marginTop: 20, marginHorizontal: 15}}>
                <Button title="提交" color="#FF474E"></Button>
            </View>


        </ScrollView>
    )
}

export default Introduction;
