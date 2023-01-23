import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import UserProfile from "./screens/UserProfile";

type Props = {};

const App: React.FC = (props: Props) => {
  return <UserProfile />;
};

const styles = StyleSheet.create({});

export default App;
