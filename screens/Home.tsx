import {
  Text,
  View,
  FlatList,
  Image,
  Linking,
  TouchableOpacity,
  ImageBackground,
  ImageSourcePropType,
  Alert,
} from "react-native";
import React, { useState, useCallback, Children } from "react";
import styles from "./styles/styles";
import { useFonts } from "expo-font";
import Modal from "react-native-modal";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Data, Row } from "../hooks/useOpportunities";
import useOpportunities from "../hooks/useOpportunities";

export default function Home({ navigation }: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>({});
  const [filter, setFilter] = useState("All");

  const { rows } = useOpportunities();

  const getData = (data: Data[]) => {
    return data.filter((data) => {
      if (filter === "All") return true;
      else {
        return data.category === filter;
      }
    });
  };

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <FlatList
        data={rows}
        renderItem={({ item }: { item: Row }) => (
          <View>
            {item.type === "card" ? (
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 10,
                    paddingBottom: 68,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "PoppinsSemiBold",
                      fontSize: 25,
                      marginRight: -14,
                    }}
                  >
                    {" "}
                    TheService{" "}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "PoppinsSemiBold",
                      fontSize: 25,
                      color: "#1EC677",
                    }}
                  >
                    {" "}
                    Cube{" "}
                  </Text>
                  <Image
                    style={{ marginLeft: 75, marginRight: 25 }}
                    source={require("../assets/images/settings.png")}
                  />
                  <Image
                    style={{}}
                    source={require("../assets/images/clipboard.png")}
                  />
                </View>
                <Text
                  style={{
                    fontFamily: "PoppinsSemiBold",
                    fontSize: 20,
                    textAlign: "left",
                    marginLeft: filter === "All" ? 10 : 15,
                    paddingBottom: 13,
                  }}
                >
                  {filter === "All" ? null : "Near You:"}{" "}
                  {filter === "All" ? item.label : filter}
                </Text>
                <FlatList
                  data={getData(item.data)}
                  renderItem={({ item }) => (
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          setSelectedItem(item);
                          setModalVisible(true);
                        }}
                        style={{}}
                      >
                        <View style={styles.itemContainer}>
                          <Image
                            style={styles.image}
                            source={{
                              uri: item.uri,
                            }}
                          />
                          <View style={{ position: "absolute" }}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontFamily: "PoppinsBold",
                                backgroundColor: "rgba(67, 182, 99, 0.7)",
                                paddingHorizontal: 15,
                                paddingVertical: 5,
                                marginLeft: 19,
                                marginTop: 19,
                                color: "white",
                              }}
                            >
                              {" "}
                              {item.category}{" "}
                            </Text>
                          </View>
                          <View style={styles.TextContainer}>
                            <View>
                              <Image
                                style={{
                                  width: 35,
                                  height: 35,
                                  borderWidth: 1,
                                  borderRadius: 1000,
                                  marginTop: 23,
                                }}
                                source={item.profile}
                              />
                            </View>
                            <View style={{ marginTop: 23 }}>
                              <Text style={styles.item}>
                                {item.opportunity}
                              </Text>
                              <Text style={styles.add}>{item.info}</Text>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                  keyExtractor={(item, index) => `${index}`}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            ) : null}
            {item.type === "menu" ? (
              <View>
                <Text style={styles.label}> {item.label} </Text>
                <FlatList
                  data={item.data}
                  renderItem={({ item }) => (
                    <View>
                      <TouchableOpacity
                        style={{
                          borderRadius: 5,
                          marginLeft: 11,
                          marginRight: 7,
                          backgroundColor:
                            filter === item.menuLabel ? "#1EC677" : "white",
                        }}
                        onPress={() => {
                          setFilter(item.menuLabel);
                        }}
                      >
                        <View>
                          <Text
                            style={{
                              fontFamily: "Poppins",
                              fontSize: 15,
                              paddingVertical: 6,
                              paddingHorizontal: 15,
                              color:
                                filter === item.menuLabel ? "white" : "black",
                            }}
                          >
                            {item.menuLabel}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                  keyExtractor={(item, index) => `${index}`}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            ) : null}
            {item.type === "card2" ? (
              <View>
                <Text style={styles.label}> {item.label} </Text>
                <FlatList
                  data={item.data}
                  renderItem={({ item }) => (
                    <View>
                      <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <View style={styles.itemContainer}>
                          <Image
                            style={styles.image}
                            source={{
                              uri: item.uri,
                            }}
                          />
                          <View style={{ position: "absolute" }}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontFamily: "PoppinsBold",
                                backgroundColor: "rgba(67, 182, 99, 0.7)",
                                paddingHorizontal: 15,
                                paddingVertical: 5,
                                marginLeft: 19,
                                marginTop: 19,
                                color: "white",
                              }}
                            >
                              {" "}
                              {item.category}{" "}
                            </Text>
                          </View>
                          <View style={styles.TextContainer}>
                            <View>
                              <Image
                                style={{
                                  width: 35,
                                  height: 35,
                                  borderWidth: 1,
                                  borderRadius: 1000,
                                  marginTop: 23,
                                }}
                                source={{ uri: item.profile }}
                              />
                            </View>
                            <View style={{ marginTop: 23 }}>
                              <Text style={styles.item}>
                                {item.opportunity}
                              </Text>
                              <Text style={styles.add}>{item.info}</Text>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                  keyExtractor={(item, index) => `${index}`}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            ) : null}
          </View>
        )}
      />

      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        coverScreen={true}
        style={{ margin: 0, backgroundColor: "white" }}
        isVisible={modalVisible}
        // @ts-ignore
        onRequestClose={() => {
          Alert.alert("modal was closed");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 1 }}>
          {/* "https://beaches.lacounty.gov/wp-content/uploads/2021/09/Redondo-Beach-BCB_5409-1920x1105.jpg",*/}
          <ImageBackground
            style={{ width: "100%", height: 300, alignSelf: "center" }}
            source={{
              uri: selectedItem.uri,
            }}
          >
            <SimpleLineIcons
              name="arrow-left"
              size={30}
              color="#CACACA"
              style={{ marginTop: 58, marginLeft: 14 }}
              onPress={() => setModalVisible(!modalVisible)}
            />
            {/*require("../assets/saveourshores.png") */}
            <Image
              style={{
                width: 40,
                height: 40,
                borderWidth: 1,
                borderRadius: 300,
                borderColor: "#0F490E",
                marginTop: 157,
                marginLeft: 10,
              }}
              source={selectedItem.profile}
            />
          </ImageBackground>
        </View>
        <View style={{ flex: 1, paddingBottom: 295 }}>
          <View style={styles.desContainer}>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <View>
                <Text
                  style={{
                    fontFamily: "PoppinsSemiBold",
                    color: "#43B663",
                    fontSize: 12,
                    letterSpacing: 2,
                    backgroundColor: "#DDF2E3",
                    paddingVertical: 10,
                    paddingHorizontal:
                      selectedItem.category === "Business" ? 10 : 20,
                    marginTop: 15,
                    alignSelf: "center",
                  }}
                >
                  {selectedItem.category}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    marginTop: 20,
                    alignSelf: "center",
                    fontFamily: "PoppinsSemiBold",
                    fontSize: 12,
                    color: "#898989",
                    textAlign: "center",
                    width: 70,
                    marginHorizontal: 60,
                  }}
                >
                  {selectedItem.vb}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderWidth: 1,
                  borderColor: "#A7A7A7",
                  marginTop: 15,
                  paddingHorizontal: 10,
                  alignSelf: "center",
                  paddingVertical: 10,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../assets/images/clockIcon.png")}
                />
                <Text
                  style={{
                    fontFamily: "PoppinsMedium",
                    fontSize: 10,
                    color: "#898989",
                    alignSelf: "center",
                    marginLeft: 5,
                  }}
                >
                  {" "}
                  21 days left{" "}
                </Text>
              </View>
            </View>
            <Text style={styles.name2}>{selectedItem.opportunity2}</Text>
            <Text style={styles.des}>{selectedItem.des}</Text>
          </View>
          <TouchableOpacity onPress={() => Linking.openURL(selectedItem.url)}>
            <View style={styles.websiteContainer}>
              <Image
                style={{ width: 22, height: 22, alignSelf: "center" }}
                source={require("../assets/images/world.png")}
              />
              <View style={{ marginLeft: 15 }}>
                <Text style={styles.website}>{selectedItem.url}</Text>
                <Text style={styles.comment}> *Preferred Way to Sign Up* </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  flex: 1,
                  marginRight: 15,
                }}
              >
                <SimpleLineIcons
                  style={{ alignSelf: "center" }}
                  name="arrow-right"
                  size={15}
                  color="#BBBBBB"
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("maps://app?saddr=100+101&daddr=100+102")
            }
          >
            <View style={styles.locationContainer}>
              <Image
                style={{
                  width: 19,
                  height: 22,
                  alignSelf: "center",
                  marginLeft: 15,
                }}
                source={require("../assets/images/location.png")}
              />
              <View style={{ marginLeft: 15 }}>
                <Text style={styles.location}>
                  {" "}
                  21 Municipal Wharf, Santa Cruz, CA 95060{" "}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "mailto:alejandro@saveourshores.org?subject=SendMail&body=Description"
              )
            }
          >
            <View style={styles.emailContainer}>
              <Image
                style={{ marginLeft: 15, width: 21, height: 15 }}
                source={require("../assets/images/mail.png")}
              />
              <View style={{ marginLeft: 19 }}>
                <Text style={styles.email}> {selectedItem.email} </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:$831-462-5660")}
          >
            <View style={styles.phoneNumberContainer}>
              <Image
                style={{ marginLeft: 17, width: 18, height: 18 }}
                source={require("../assets/images/phone.png")}
              />
              <View style={{ marginLeft: 17 }}>
                <Text style={styles.phoneNumber}> {selectedItem.contact} </Text>
                <Text style={styles.comment2}> Tap to Call </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
              navigation.navigate("Hours");
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: "PoppinsSemiBold",
                  fontSize: 20,
                  backgroundColor: "#1D9F62",
                  alignSelf: "center",
                  color: "white",
                  marginTop: 15,
                  paddingHorizontal: 80,
                  paddingVertical: 10,
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                {" "}
                Volunteer{" "}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
