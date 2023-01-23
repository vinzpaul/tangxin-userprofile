import * as React from "react";
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
  FlatList,
} from "react-native";

import { EvilIcons, FontAwesome5 } from "@expo/vector-icons";
import { transform } from "typescript";

const UserProfile = () => {
  const gap = 8;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#191d26" }}>
      <View
        style={{
          flex: 1,
          maxHeight: Dimensions.get("window").height,
          marginHorizontal: 15,
          marginVertical: 20,
          // backgroundColor: "#FFFFFF",
        }}
      >
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              display: "flex",
              alignItems: "flex-end",
              padding: 10,
              flex: 1,
            }}
          >
            <EvilIcons name="gear" size={28} color="white" />
          </View>
          <View
            style={{
              backgroundColor: "#262632",
              borderRadius: 10,
              height: 100,
              flex: 1,
            }}
          >
            <View style={{ flexDirection: "row", padding: 10 }}>
              <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={require("../assets/profilePhoto.jpg")}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 8,
                }}
              >
                <View>
                  <Text
                    style={{ color: "white", fontSize: 15, fontWeight: "600" }}
                  >
                    受伤的期待
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      paddingHorizontal: gap / -2,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 11,
                        // marginHorizontal: gap / 2,
                      }}
                    >
                      金币: 0
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 11,
                        marginHorizontal: gap / 2,
                      }}
                    >
                      观影券: 0
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 11,
                        marginHorizontal: gap / 2,
                      }}
                    >
                      免费观看 : 0
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    position: "absolute",
                    left: 220,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 13,
                      marginRight: 5,
                    }}
                  >
                    主页
                  </Text>
                  <FontAwesome5 name="angle-right" size={15} color="white" />
                </View>
              </View>
            </View>
            <View
              style={{
                borderTopColor: "white",
                borderTopWidth: StyleSheet.hairlineWidth,
                marginHorizontal: 10,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 50,
                paddingTop: 5,
              }}
            >
              <Text style={{ color: "white", fontSize: 13, fontWeight: "600" }}>
                动态 0
              </Text>
              <Text style={{ color: "white", fontSize: 13, fontWeight: "600" }}>
                关注 0
              </Text>
              <Text style={{ color: "white", fontSize: 13, fontWeight: "600" }}>
                粉丝 0
              </Text>
            </View>
          </View>
          <View style={{ backgroundColor: "brown" }}>
            <Text>Second Container</Text>
          </View>
          <View style={{ backgroundColor: "brown" }}>
            <Text>Third Container</Text>
          </View>
          <View style={{ backgroundColor: "brown" }}>
            <Text>Fourth Container</Text>
          </View>
          <View style={{ backgroundColor: "brown" }}>
            <Text>Fifth Container</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default UserProfile;
