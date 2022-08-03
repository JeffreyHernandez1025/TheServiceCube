import {
  Text,
  View,
  FlatList,
  Image,
  Linking,
  TouchableOpacity,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";
import React, { useState, useCallback, Children } from "react";
import styles from "./styles/styles";
import { useFonts } from "expo-font";
import Modal from "react-native-modal";
import { SimpleLineIcons } from "@expo/vector-icons";

export interface Data {
  id: string;
  info: string;
  opportunity: string;
  opportunity2: string;
  vb: string;
  uri: string;
  category: string;
  profile: ImageSourcePropType;
  url: string;
  email: string;
  contact: string;
  address: string;
}

export interface Row {
  id: string;
  label: string;
  data: any; //Data[] | { menuLabel: string }[];
  type: string;
}
export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [filter, setFilter] = useState("All");

  // Fonts
  const [loaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins.ttf"),
    PoppinsSemiBold: require("../assets/fonts/PoppinsSemiBold.ttf"),
    PoppinsBold: require("../assets/fonts/PoppinsBold.ttf"),
    PoppinsMedium: require("../assets/fonts/PoppinsMedium.ttf"),
  });

  const [query, setQuery] = useState("");

  const [opportunities, setOpportunities] = useState<Data[]>([
    {
      id: "1",
      info: "Save Our Shores",
      opportunity: "Help clean up the beach!",
      opportunity2: "Help clean up the beach in Los Angeles!",
      vb: "Hour Block 1 hr.",
      uri: "https://beaches.lacounty.gov/wp-content/uploads/2021/09/Redondo-Beach-BCB_5409-1920x1105.jpg",
      category: "Beach",
      profile: require("../assets/images/saveourshores.png"),
      url: "https://saveourshores.org/beachcleanups/",
      email: "alejandro@saveourbeach.org",
      contact: "3239097890",
      address: "123 Los Angeles Street, 90014",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      info: "Clean Trails",
      opportunity: "Help pick up trash in your streets!",
      opportunity2: "Help clean up the beach in Los Angeles!",
      vb: "Hour Block 1 hr.",
      uri: "https://img.hoodline.com/uploads/story/image/569140/photo_-_volunteers_help_CleanMission_spruce_up_outside_Zoe_Bikini_18th_and_Mission_8-2019.jpeg",
      category: "Trash",
      profile: require("../assets/images/cleantrails.jpeg"),
      url: "https://saveourshores.org/beachcleanups/",
      email: "alejandro@saveourbeach.org",
      contact: "3239097890",
      address: "123 Los Angeles Street, 90014",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      info: "CalOSBA",
      opportunity: "Help out your local businesses!",
      opportunity2: "Help clean up the beach in Los Angeles!",
      vb: "Hour Block 1 hr.",
      uri: "https://mcdonaldpaper.com/media/wysiwyg/blog/blog_21-10-20-2.jpg",
      category: "Business",
      profile: require("../assets/images/calosba.png"),
      url: "https://saveourshores.org/beachcleanups/",
      email: "alejandro@saveourbeach.org",
      contact: "3239097890",
      address: "123 Los Angeles Street, 90014",
    },
    {
      id: "4",
      info: "California State Parks",
      opportunity: "Help clean up your local parks!",
      opportunity2: "Help clean up the beach in Los Angeles!",
      vb: "Hour Block 1 hr.",
      uri: "https://media.istockphoto.com/photos/picking-up-a-plastic-bottle-during-park-cleanup-picture-id1161008212?k=20&m=1161008212&s=612x612&w=0&h=ll4BiuqmO003r2LQ66PKurXnA1rD_gbdR1wQ7K-VKOs=",
      category: "Trash",
      profile: require("../assets/images/parksca.png"),
      url: "https://saveourshores.org/beachcleanups/",
      email: "alejandro@saveourbeach.org",
      contact: "3239097890",
      address: "123 Los Angeles Street, 90014",
    },
    {
      id: "5",
      info: "National Gardening Club",
      opportunity: "Help keep the Earth green!",
      opportunity2: "Help clean up the beach in Los Angeles!",
      vb: "Hour Block 1 hr.",
      uri: "https://www.popsci.com/uploads/2022/04/21/garden.jpg?auto=webp&width=1440&height=1080",
      category: "Earth",
      profile: require("../assets/images/ngc.png"),
      url: "https://saveourshores.org/beachcleanups/",
      email: "alejandro@saveourbeach.org",
      contact: "3239097890",
      address: "123 Los Angeles Street, 90014",
    },
    {
      id: "6",
      info: "Woodcrest Elementary School",
      opportunity: "Help the youth in this school!",
      opportunity2: "Help clean up the beach in Los Angeles!",
      vb: "Hour Block 1 hr.",
      uri: "https://s3-media0.fl.yelpcdn.com/bphoto/SyOO6VEokLNa9WKLvbV0lw/348s.jpg",
      category: "School",
      profile: require("../assets/images/wes.png"),
      url: "https://saveourshores.org/beachcleanups/",
      email: "alejandro@saveourbeach.org",
      contact: "3239097890",
      address: "123 Los Angeles Street, 90014",
    },
  ]);

  const rows: Row[] = [
    { id: "1", label: "Near You", data: opportunities, type: "card" },
    {
      id: "",
      label: "Categories",
      data: [
        {
          menuLabel: "All",
        },
        {
          menuLabel: "Earth",
        },
        {
          menuLabel: "Beach",
        },
        {
          menuLabel: "Trash",
        },
        {
          menuLabel: "Business",
        },
        {
          menuLabel: "School",
        },
      ],
      type: "menu",
    },
    {
      id: "3",
      label: "Popular",
      data: opportunities,
      type: "card2",
    },
    {
      id: "4",
      label: "Cooking",
      data: opportunities,
      type: "card2",
    },
    {
      id: "5",
      label: "Cleaning",
      data: opportunities,
      type: "card2",
    },
  ];

  const [nearYou, setNearYou] = useState([
    {
      id: "11",
      info: "Save Our Shores",
      opportunity: "Help clean up the beach!",
      uri: "https://beaches.lacounty.gov/wp-content/uploads/2021/09/Redondo-Beach-BCB_5409-1920x1105.jpg",
      category: "Beach",
      profile: require("../assets/images/saveourshores.png"),
    },
    {
      id: "22",
      info: "Clean Trails",
      opportunity: "Help pick up trash in your streets!",
      uri: "https://img.hoodline.com/uploads/story/image/569140/photo_-_volunteers_help_CleanMission_spruce_up_outside_Zoe_Bikini_18th_and_Mission_8-2019.jpeg",
      category: "Trash",
      profile: require("../assets/images/cleantrails.jpeg"),
    },
    {
      id: "33",
      info: "CalOSBA",
      opportunity: "Help out your local businesses!",
      uri: "https://mcdonaldpaper.com/media/wysiwyg/blog/blog_21-10-20-2.jpg",
      category: "Business",
      profile: require("../assets/images/calosba.png"),
    },
    {
      id: "44",
      info: "California State Parks",
      opportunity: "Help clean up your local parks!",
      uri: "https://media.istockphoto.com/photos/picking-up-a-plastic-bottle-during-park-cleanup-picture-id1161008212?k=20&m=1161008212&s=612x612&w=0&h=ll4BiuqmO003r2LQ66PKurXnA1rD_gbdR1wQ7K-VKOs=",
      category: "Trash",
      profile: require("../assets/images/parksca.png"),
    },
    {
      id: "55",
      info: "National Gardening Club",
      opportunity: "Help keep the Earth green!",
      uri: "https://www.popsci.com/uploads/2022/04/21/garden.jpg?auto=webp&width=1440&height=1080",
      category: "Earth",
      profile: require("../assets/images/ngc.png"),
    },
    {
      id: "66",
      info: "Woodcrest Elementary School",
      opportunity: "Help the youth in this school!",
      uri: "https://s3-media0.fl.yelpcdn.com/bphoto/SyOO6VEokLNa9WKLvbV0lw/348s.jpg",
      category: "School",
      profile: require("../assets/images/wes.png"),
    },
  ]);

  const rows2 = [
    {
      title: "Near You",
      data2: nearYou,
    },
  ];

  // const rows = [
  //   {
  //     title: "Near You",
  //     data2: nearYou,
  //   },
  //   {
  //     title2: "Popular",
  //     data: opportunities,
  //   },
  //   {
  //     title2: "Cooking",
  //     data: opportunities,
  //   },
  //   {
  //     title2: "Cleaning",
  //     data: opportunities,
  //   },
  // ];

  const getData = (data: Data[]) => {
    return data.filter((data) => {
      if (filter === "All") return true;
      else {
        return data.category === filter;
      }
    });
  };

  if (!loaded) return null;

  function MyModal({ item, visible }: { item: any; visible: boolean }) {
    return (
      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        coverScreen={true}
        style={{ margin: 0, backgroundColor: "white" }}
        isVisible={visible}
        // onRequestClose={() => {
        //   return Alert.alert("Modal has been closed.")(!modalVisible);
        // }}
      >
        <View style={{ flex: 1 }}>
          {/* "https://beaches.lacounty.gov/wp-content/uploads/2021/09/Redondo-Beach-BCB_5409-1920x1105.jpg",*/}
          <ImageBackground
            style={{ width: "100%", height: 300, alignSelf: "center" }}
            source={{
              uri: item.uri,
            }}
          >
            <SimpleLineIcons
              name="arrow-left"
              size={30}
              color="#CACACA"
              style={{ marginTop: 58, marginLeft: 14 }}
              onPress={() => setModalVisible(!visible)}
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
              source={item.profile}
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
                    paddingHorizontal: 20,
                    marginTop: 15,
                    alignSelf: "center",
                  }}
                >
                  {item.category}
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
                    width: 75,
                    marginHorizontal: 60,
                  }}
                >
                  {" "}
                  Hour Block 1 hr{" "}
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
            <Text style={styles.name2}>
              {" "}
              Help clean up the beach in Los Angeles!{" "}
            </Text>
            <Text style={styles.des}>
              On the 21st of August, our team will need extra hands to clean the
              beach of LA in order to conserve the nature. Your help will be
              greatly appreciated.
            </Text>
          </View>
          <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            <View style={styles.websiteContainer}>
              <Image
                style={{ width: 22, height: 22, alignSelf: "center" }}
                source={require("../assets/images/world.png")}
              />
              <View style={{ marginLeft: 15 }}>
                <Text style={styles.website}>{item.url}</Text>
                <Text style={styles.comment}> *Preferred Way to Sign Up* </Text>
              </View>
              <SimpleLineIcons
                style={{ alignSelf: "center", marginLeft: 10 }}
                name="arrow-right"
                size={15}
                color="#BBBBBB"
              />
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
                  width: 22,
                  height: 22,
                  alignSelf: "center",
                  marginLeft: 15,
                }}
                source={require("../assets/images/POI.png")}
              />
              <View style={{ marginLeft: 15 }}>
                <Text style={styles.location}>
                  {" "}
                  123 Los Angeles Street,90014{" "}
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
                style={{ marginLeft: 15 }}
                source={require("../assets/images/mail.png")}
              />
              <View style={{ marginLeft: 19 }}>
                <Text style={styles.email}>alejandro@saveourshores.org</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:$831-462-5660")}
          >
            <View style={styles.phoneNumberContainer}>
              <Image
                style={{ marginLeft: 14 }}
                source={require("../assets/images/phone.png")}
              />
              <View style={{ marginLeft: 17 }}>
                <Text style={styles.phoneNumber}> (831) 462-5660 </Text>
                <Text style={styles.comment2}> Tap to Call </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

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
                  keyExtractor={(item) => item.id}
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
                  keyExtractor={(item) => item.id}
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
                  keyExtractor={(item) => item.id}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            ) : null}
          </View>
        )}
      />
      <MyModal item={selectedItem} visible={modalVisible} />
    </View>
  );
}
