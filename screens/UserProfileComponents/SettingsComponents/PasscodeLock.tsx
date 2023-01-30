import React from 'react';
import {Dimensions, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {AntDesign} from "@expo/vector-icons";

const PasscodeLock = () => {

    const navigation = useNavigation<any>();

    return (
        <ScrollView style={{
            flex: 1, maxHeight: Dimensions.get("window").height,
            marginVertical: 20, maxWidth: Dimensions.get('window').width
        }}>
            {/*Title and Back Button  */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 10,
                height: 50
            }}>
                <View style={{position: 'absolute', left: 5}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                        <AntDesign name="left" size={24} color="white"/>
                    </TouchableOpacity>
                </View>
                <View style={{}}>
                    <Text style={{color: '#FFFFFF', textAlign: 'center', fontSize: 20}}>Passcode Lock</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default PasscodeLock;
