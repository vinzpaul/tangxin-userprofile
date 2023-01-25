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

import {
  EvilIcons,
  FontAwesome5,
  Ionicons,
  Feather,
  Foundation,
  Entypo,
} from "@expo/vector-icons";
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
        }}
      >
        <ScrollView
          style={{ flex: 1, paddingVertical: gap / -2 }}
          showsVerticalScrollIndicator={false}
        >
          {/* First Container */}
          <View style={{ marginVertical: gap / 1 }}>
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
                borderRadius: 5,
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
                      style={{
                        color: "white",
                        fontSize: 15,
                        fontWeight: "600",
                      }}
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
                <Text
                  style={{ color: "white", fontSize: 13, fontWeight: "600" }}
                >
                  动态 0
                </Text>
                <Text
                  style={{ color: "white", fontSize: 13, fontWeight: "600" }}
                >
                  关注 0
                </Text>
                <Text
                  style={{ color: "white", fontSize: 13, fontWeight: "600" }}
                >
                  粉丝 0
                </Text>
              </View>
            </View>
          </View>

          {/* Second Container */}
          <View style={{ marginVertical: gap / 1 }}>
            <View
              style={{
                backgroundColor: "#FDE5C3",
                borderRadius: 10,
                height: 50,
                padding: 5,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginHorizontal: 10,
                }}
              >
                <FontAwesome5 name="medal" size={28} color="#996B3C" />
                <View style={{ marginLeft: 5 }}>
                  <Text style={{ color: "#996B3C", fontWeight: "600" }}>
                    开通会员
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderRadius: 5,
                      borderColor: "#996B3C",
                    }}
                  >
                    <Text
                      style={{
                        color: "#996B3C",
                        marginHorizontal: 10,
                      }}
                    >
                      享无限观看，购片折扣等权益
                    </Text>
                  </View>
                </View>
                <View style={{ position: "absolute", right: 5 }}>
                  <FontAwesome5 name="angle-right" size={25} color="#996B3C" />
                </View>
              </View>
            </View>
          </View>

          {/* Third Container */}
          <View style={{ marginVertical: gap / 1 }}>
            <View
              style={{
                backgroundColor: "#262632",
                height: 80,
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginHorizontal: -15,
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons name="ribbon-sharp" size={25} color="white" />
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 12,
                      marginTop: 5,
                    }}
                  >
                    升级会员
                  </Text>
                </View>

                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Ionicons name="md-wallet-outline" size={25} color="white" />
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 12,
                      marginTop: 5,
                    }}
                  >
                    我的卡包
                  </Text>
                </View>

                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <FontAwesome5
                    name="envelope-open-text"
                    size={25}
                    color="white"
                  />
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 12,
                      marginTop: 5,
                    }}
                  >
                    我的收藏
                  </Text>
                </View>

                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Feather name="shopping-cart" size={25} color="white" />
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 12,
                      marginTop: 5,
                    }}
                  >
                    我的购买
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Fourth Container */}
          <View style={{ marginVertical: gap / 1 }}>
            <View
              style={{
                backgroundColor: "#262632",
                height: 50,
                borderRadius: 5,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginHorizontal: -15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Foundation name="clipboard-pencil" size={25} color="white" />
                  <Text style={{ color: "white", fontSize: 12, marginLeft: 5 }}>
                    发布动态
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Entypo name="video" size={25} color="white" />
                  <Text style={{ color: "white", fontSize: 12, marginLeft: 5 }}>
                    视频投稿
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FontAwesome5 name="gem" size={18} color="white" />
                  <Text style={{ color: "white", fontSize: 12, marginLeft: 5 }}>
                    我要认证
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Fifth Container */}
          <View style={{ marginVertical: gap / 1 }}>
            <View
              style={{
                backgroundColor: "#262632",
                height: 500,
                borderRadius: 5,
                padding: 12,
              }}
            >
              <View
                style={{
                  marginHorizontal: 5,
                  marginTop: 5,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 3,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 12 }}>历史记录</Text>
                  <FontAwesome5 name="angle-right" size={20} color="#FFFFFF" />
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
                  marginHorizontal: 5,
                  marginVertical: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 3,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 12 }}>离线缓存</Text>
                  <FontAwesome5 name="angle-right" size={20} color="#FFFFFF" />
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
                  marginHorizontal: 5,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 3,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 12 }}>分享推广</Text>
                  <FontAwesome5 name="angle-right" size={20} color="#FFFFFF" />
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
                  marginHorizontal: 5,
                  marginVertical: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 3,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 12 }}>账号凭证</Text>
                  <FontAwesome5 name="angle-right" size={20} color="#FFFFFF" />
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
                  marginHorizontal: 5,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 3,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 12 }}>在线客服</Text>
                  <FontAwesome5 name="angle-right" size={20} color="#FFFFFF" />
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
                  marginHorizontal: 5,
                  marginVertical: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 3,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 12 }}>精品应用</Text>
                  <FontAwesome5 name="angle-right" size={20} color="#FFFFFF" />
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
                  marginHorizontal: 5,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 3,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 12 }}>官方群组</Text>
                  <FontAwesome5 name="angle-right" size={20} color="#FFFFFF" />
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
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 15,
                }}
              >
                <Text style={{ color: "white", fontSize: 12 }}>
                  官方邮箱linnannan101@gmail.com
                </Text>
                <View
                  style={{
                    backgroundColor: "#FF474E",
                    width: 55,
                    height: 25,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 12,
                    }}
                  >
                    复制
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default UserProfile;
