import React from 'react';
import {Dimensions, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {AntDesign, Entypo} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const UserHome = () => {

    const navigation = useNavigation<any>();

    return (
        <ScrollView style={{
            flex: 1, maxHeight: Dimensions.get("window").height,
            marginVertical: 25, maxWidth: Dimensions.get('window').width
        }}>

            <View style={{backgroundColor: 'red', height: 300}}>
                {/*Title and Back Button  */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: 10,
                    height: 50,
                }}>
                    <View style={{}}>
                        <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                            <AntDesign name="left" size={24} color="white"/>
                        </TouchableOpacity>
                    </View>
                    <View style={{}}>
                        <Entypo name="dots-three-vertical" size={24} color="white"/>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

export default UserHome;
