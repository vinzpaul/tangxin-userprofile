import React from "react";
import {StyleSheet} from "react-native";

//Navigation
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const myTheme = {
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(255, 45, 85)',
        background: '#191d26',
    },
}

//Redux
import {Provider} from 'react-redux';
import {store} from './redux/store/store';

import UserProfile from "./screens/UserProfile";
import SettingsIcon from "./screens/UserProfileComponents/SettingsIcon";
import ProfilePhoto from "./screens/UserProfileComponents/SettingsComponents/ProfilePhoto";
import PetName from "./screens/UserProfileComponents/SettingsComponents/PetName";
import MobileBindRequest from "./screens/UserProfileComponents/SettingsComponents/MobileBindRequest";
import Introduction from "./screens/UserProfileComponents/SettingsComponents/Introduction";
import AccountCertificate from "./screens/UserProfileComponents/SettingsComponents/AccountCertificate";
import AccountRetrieval from "./screens/UserProfileComponents/SettingsComponents/AccountRetrieval";
import MobileRetrieval
    from "./screens/UserProfileComponents/SettingsComponents/AccountRetrievalComponents/MobileRetrieval";
import CameraInit from './screens/UserProfileComponents/SettingsComponents/AccountRetrievalComponents/CameraInit'
import RequestCode from "./screens/UserProfileComponents/SettingsComponents/RequestCode";
import PrivacyPolicy from "./screens/UserProfileComponents/SettingsComponents/PrivacyPolicy";
import ServiceProvisions from "./screens/UserProfileComponents/SettingsComponents/ServiceProvisions";
import About from "./screens/UserProfileComponents/SettingsComponents/About";
import Chat from "./screens/UserProfileComponents/SettingsComponents/Chat";

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
                        <Stack.Screen name="MobileBindRequest" component={MobileBindRequest}/>
                        <Stack.Screen name="Introduction" component={Introduction}/>

                        {/*Account */}
                        <Stack.Screen name="AccountCertificate" component={AccountCertificate}/>
                        <Stack.Screen name="AccountRetrieval" component={AccountRetrieval}/>
                        <Stack.Screen name="MobileRetrieval" component={MobileRetrieval}/>
                        <Stack.Screen name="CameraInit" component={CameraInit}/>
                        <Stack.Screen name="RequestCode" component={RequestCode}/>

                        {/*Others*/}
                        <Stack.Screen name="Chat" component={Chat}/>
                        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy}/>
                        <Stack.Screen name='ServiceProvisions' component={ServiceProvisions}/>
                        <Stack.Screen name="About" component={About}/>
                    </Stack.Group>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
};

const styles = StyleSheet.create({});

export default App;
