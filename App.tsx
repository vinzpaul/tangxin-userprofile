import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View, SafeAreaView} from "react-native";

import UserProfile from "./screens/UserProfile";
import SettingsIcon from "./screens/UserProfileComponents/SettingsIcon";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import {Transition} from 'react-native-reanimated';
import ProfilePhoto from "./screens/UserProfileComponents/SettingsComponents/ProfilePhoto";

const myTheme = {
    dark: true,
    // backgroundColor: "#191d26",
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(255, 45, 85)',
        background: '#191d26',
    },
}

//Redux
import {Provider} from 'react-redux';
import {store} from './redux/store/store';
import PetName from "./screens/UserProfileComponents/SettingsComponents/PetName";
import BindRequest from "./screens/UserProfileComponents/SettingsComponents/BindRequest";
import Introduction from "./screens/UserProfileComponents/SettingsComponents/Introduction";
import AccountCertificate from "./screens/UserProfileComponents/SettingsComponents/AccountCertificate";
import AccountRetrieval from "./screens/UserProfileComponents/SettingsComponents/AccountRetrieval";
import MobileRetrieval
    from "./screens/UserProfileComponents/SettingsComponents/AccountRetrievalComponents/MobileRetrieval";

type Props = {};
const App: React.FC = (props: Props) => {
    return (
        <Provider store={store}>
            <NavigationContainer theme={myTheme}>
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                    animation: 'none'
                }}
                >
                    <Stack.Screen name="UserProfile" component={UserProfile}/>

                    {/*UserProfile Settings and its contents*/}
                    <Stack.Group>
                        <Stack.Screen name="Settings" component={SettingsIcon}/>
                        <Stack.Screen name="ProfilePhoto" component={ProfilePhoto}/>
                        <Stack.Screen name="PetName" component={PetName}/>
                        <Stack.Screen name="BindRequest" component={BindRequest}/>
                        <Stack.Screen name="Introduction" component={Introduction}/>

                        <Stack.Screen name="AccountCertificate" component={AccountCertificate}/>
                        <Stack.Screen name="AccountRetrieval" component={AccountRetrieval}/>
                        <Stack.Screen name="MobileRetrieval" component={MobileRetrieval}/>
                    </Stack.Group>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
};

const styles = StyleSheet.create({});

export default App;
