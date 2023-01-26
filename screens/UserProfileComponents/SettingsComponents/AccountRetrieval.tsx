import React, {useState, useEffect} from 'react';
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    PanResponder
} from "react-native";
import {AntDesign, FontAwesome5} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const AccountRetrieval = () => {

    const navigation = useNavigation<any>();

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: (evt, gestureState) => {
            return gestureState.dy > 0;
        },
        onPanResponderMove: (evt, gestureState) => {
            // Update the position of the container based on the gesture
            setContainerPosition(gestureState.dy);
        },
        onPanResponderRelease: (evt, gestureState) => {
            // Update the position of the container based on the gesture
            setContainerPosition(gestureState.dy);
        },
    });

    const [containerPosition, setContainerPosition] = useState(0);

    return (
        <View style={{
            flex: 1,
            maxHeight: Dimensions.get("window").height,
            marginVertical: 20,
            maxWidth: Dimensions.get("window").width,
        }}>

            {/*Title and Back Button  */}
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
                    <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                        <AntDesign name="left" size={24} color="white"/>
                    </TouchableOpacity>
                </View>
                <View style={{}}>
                    <Text style={{color: "#FFFFFF", textAlign: "center", fontSize: 20}}>
                        账号找回
                    </Text>
                </View>
            </View>

            <ScrollView
                contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}
            >
                <View {...panResponder.panHandlers} style={{height: 1000}}>
                    <View style={{transform: [{translateY: containerPosition}]}}>
                        <View>
                            <View
                                style={{
                                    backgroundColor: "#262632",
                                    height: 'auto',
                                    borderRadius: 5,
                                    padding: 0,
                                }}
                            >
                                <View
                                    style={{
                                        marginTop: 5,
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            padding: 3,
                                            marginHorizontal: 15,
                                        }}
                                    >
                                        <Text style={{color: "white", fontSize: 12}}>
                                            使用绑定手机号找回
                                        </Text>
                                        <FontAwesome5
                                            name="angle-right"
                                            size={20}
                                            color="#FFFFFF"
                                        />
                                    </View>
                                    <View
                                        style={{
                                            borderBottomColor: "white",
                                            borderBottomWidth: 1,
                                            marginTop: 10,
                                        }}
                                    ></View>
                                </View>

                                <View
                                    style={{
                                        marginVertical: 15,
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            padding: 3,
                                            marginHorizontal: 15,
                                        }}
                                    >
                                        <Text style={{color: "white", fontSize: 12}}>
                                            使用原账号身份卡找回
                                        </Text>
                                        <FontAwesome5
                                            name="angle-right"
                                            size={20}
                                            color="#FFFFFF"
                                        />
                                    </View>
                                    <View
                                        style={{
                                            borderBottomColor: "white",
                                            borderBottomWidth: 1,
                                            marginTop: 10,
                                        }}
                                    ></View>
                                </View>

                                <View
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            padding: 3,
                                            marginHorizontal: 15,
                                        }}
                                    >
                                        <Text style={{color: "white", fontSize: 12}}>
                                            联系客服找回
                                        </Text>
                                        <FontAwesome5
                                            name="angle-right"
                                            size={20}
                                            color="#FFFFFF"
                                        />
                                    </View>
                                    <View
                                        style={{
                                            borderBottomColor: "white",
                                            borderBottomWidth: 1,
                                            marginTop: 10,
                                        }}
                                    ></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        marginBottom: Dimensions.get('window').height
    }
})
export default AccountRetrieval;
