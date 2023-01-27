import React, {useState} from 'react';
import {
    View,
    TextInput,
    ScrollView,
    Image,
    TouchableOpacity,
    CameraRoll,
    Alert,
    Text,
    Button,
    Dimensions, SafeAreaView
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {Camera, CameraType} from "expo-camera";
import {useNavigation} from "@react-navigation/native";
import {AntDesign} from "@expo/vector-icons";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const navigation = useNavigation<any>();

    const getCurrentDate = (separator = '') => {

        let date = new Date();

        const d = new Date();
        const monthNames = [
            `January`,
            `February`,
            `March`,
            `April`,
            `May`,
            `June`,
            `July`,
            `August`,
            `September`,
            `October`,
            `November`,
            `December`,
        ];

        function formatTime() {
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let day = date.getDate();
            let year = date.getFullYear();
            let amOrPm = hours >= 12 ? `PM` : `AM`;

            hours = hours % 12 || 12;

            hours = formatZeroes(hours);
            minutes = formatZeroes(minutes);
            seconds = formatZeroes(seconds);

            return `${
                monthNames[d.getMonth()]
            } ${day}, ${year} at ${hours}:${minutes}:${seconds} ${amOrPm}`;
        }

        function formatZeroes(time) {
            time = time.toString();
            return time.length < 2 ? `0` + time : time;
        }

        return (
            `${formatTime(date)}`
        )
    }

    const handleSend = () => {
        if (!input) {
            return;
        }
        setMessages([...messages, {
            text: input,
            user: 'You',
            profile: "https://randomuser.me/api/portraits/women/2.jpg"
        }]);
        setInput('');
    };

    const handleCamera = async () => {
        const {status} = await Camera.requestCameraPermissionsAsync();
        if (status === 'granted') {
            const image = await ImagePicker.launchImageLibraryAsync();
            if (!image.cancelled) {
                setMessages([...messages, {
                    image: image.uri,
                    user: 'You',
                    profile: "https://randomuser.me/api/portraits/women/2.jpg"
                }]);
            }
        } else {
            Alert.alert('Permission not granted');
        }
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            maxHeight: Dimensions.get("window").height,
            marginVertical: 20,
            maxWidth: Dimensions.get("window").width,
            justifyContent: 'flex-end',
            backgroundColor: '#191d26',
        }}>
            <SafeAreaView style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 10,
                backgroundColor: '#262632',
                height: 50,
                position: 'absolute',
                zIndex: 1,
                top: 0,
                left: 0,
                right: 0,
            }}>
                <View style={{position: 'absolute', left: 5}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                        <AntDesign name="left" size={24} color="white"/>
                    </TouchableOpacity>
                </View>
                <View style={{}}>
                    <Text style={{color: '#FFFFFF', textAlign: 'center', fontSize: 20}}>绑定邀请码</Text>
                </View>
            </SafeAreaView>

            <SafeAreaView style={{flex: 0}}>
                <ScrollView style={{}}>
                    {messages.map((message, index) => (
                        <View key={index} style={{
                            flexDirection: 'row-reverse',
                            margin: 10,
                            marginHorizontal: 40,
                            alignItems: 'center'
                        }}>
                            <Image
                                style={{width: 50, height: 50, borderRadius: 25}}
                                source={{uri: message.profile}}
                            />
                            <View style={{flex: 0, marginRight: 0}}>
                                <View style={{
                                    padding: 10,
                                    backgroundColor: '#262632',
                                    borderRadius: 20,
                                    maxWidth: '95%',
                                }}>
                                    <Text style={{
                                        color: 'white',
                                        textAlign: 'right',
                                    }}>{`${message.text}`}</Text>
                                    {message.image &&
                                        <Image source={{uri: message.image}} style={{width: 200, height: 200}}/>}
                                    <Text style={{color: '#FFFFFF', fontSize: 10, textAlign: 'right'}}>
                                        {getCurrentDate()}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </SafeAreaView>
            <View style={{flex: 0, alignItems: 'center'}}>
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderColor: '#FFFFFF',
                        color: '#FFFFFF',
                        padding: 10,
                        borderRadius: 5,
                        width: '80%'
                    }}
                    placeholder={"Enter message here"}
                    value={input}
                    onChangeText={text => setInput(text)}
                />
                <View style={{flexDirection: 'row', margin: 10}}>
                    <TouchableOpacity onPress={handleSend}
                                      style={{backgroundColor: '#000000', padding: 10, marginRight: 10}}>
                        <Text style={{color: 'white'}}>Send</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCamera} style={{backgroundColor: '#000000', padding: 10}}>
                        <Text style={{color: 'white'}}>Camera</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Chat;
