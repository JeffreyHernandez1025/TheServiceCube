import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TextInput,
  Alert,
  Modal,
  Pressable,
  Linking,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import MapView, { Marker, AnimatedRegion, Circle } from "react-native-maps";
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  SetStateAction,
} from "react";
import * as Location from "expo-location";
import {
  ColorFormat,
  CountdownCircleTimer,
} from "react-native-countdown-circle-timer";
import BottomSheet from "@gorhom/bottom-sheet";
import Notification from "../components/notification";
import { useFonts } from "expo-font";
import { Stopwatch } from "react-native-stopwatch-timer";
import { LogBox } from "react-native";

import styles from "./styles/styles";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addBixon, getUser } from "../store/slices/userSlice";


const TAB_BAR_HEIGHT = 49;

const Play = require("../assets/images/Play.png");
const Pause = require("../assets/images/Pause.png");
const ErrorMessage: SetStateAction<any> =
  "Permission to access location was denied";

const colors: any[] = ["mediumspringgreen", "red"];

export default function Hours() {
  // alert
  const [showNotification, setShowNotification] = useState(false);
  // Location
  const [location, setLocation] = useState<null | Location.LocationObject>(
    null
  );
  // variables
  const snapPoints = useMemo(() => ["10%", "50%"], []);
  const [errorMsg, setErrorMsg] = useState(null);
  // Timer
  const [stopwatchStart, setStopwatchStart] = useState(false);

  const [totalDuration, setTotalDuration] = useState("");

  const [placeHolder, setPlaceHolder] = useState(Play);

  const dispatch = useAppDispatch();

  const user = useAppSelector(getUser);

  const bottomSheetRef = useRef(null);

  const toggleStopwatch = () => {
    setStopwatchStart(!stopwatchStart);
  };

  const getCurrentTime = (time: string) => {
    setTotalDuration(time);

  };

  useEffect(()=> {
    if (totalDuration === "00:00:03") {
      console.log("run");
      setShowNotification(true);
      dispatch(addBixon(60))
    }
  }, [totalDuration])

  // // callbacks
  // const handleSheetChanges = useCallback((index) => {
  //   console.log('handleSheetChanges', index)
  // }, [])
  // geolocation
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg(ErrorMessage);
        return;
      }

      let location: SetStateAction<any> =
        await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <View style={{ flex: 1 }}>
      {showNotification === true ? (
        <Notification setShowNotification={setShowNotification} />
      ) : null}
      {location === null ? null : (
        <MapView
          initialRegion={{
            latitude: 36.9632747576778,
            longitude: -122.02053803471556,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
          minZoomLevel={18}
        >
          <Marker
            coordinate={{
              latitude: 36.9632747576778,
              longitude: -122.02053803471556,
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              resizeMode="contain"
              source={require("../assets/images/POI.png")}
            />
          </Marker>
          <Circle
            center={{
              latitude: 36.9632747576778,
              longitude: -122.02053803471556,
            }}
            radius={35}
            fillColor={"rgba(30, 198, 119, 0.5)"}
            strokeColor={"white"}
            strokeWidth={2}
          />
        </MapView>
      )}
      <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View style={{ marginLeft: 40 }}>
              <Image
                style={{ width: 28, height: 28, alignSelf: "center" }}
                source={require("../assets/images/calendar.png")}
              />
              <Text
                style={{
                  fontFamily: "PoppinsSemiBold",
                  fontSize: 10,
                  color: "#808080",
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                {" "}
                schedule{" "}
              </Text>
            </View>
            <View style={{}}>
              <Text style={styles.info}> Time Tracker </Text>
              <Text style={styles.timerHeader}> Beach Cleaning </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "Helvetica",
                  fontSize: 20,
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                {user?.bixon}
              </Text>
              <Text
                style={{
                  fontFamily: "Arial",
                  fontSize: 15,
                  color: "#808080",
                  alignSelf: "center",
                  marginTop: 7,
                }}
              >
                {" "}
                bloxin{" "}
              </Text>
            </View>
          </View>
          <View style={styles.timerContainer}>
            <Stopwatch
              start={stopwatchStart}
              getTime={getCurrentTime}
              options={options}
            />
            <Text
              style={{
                alignSelf: "center",
                fontFamily: "Helvetica",
                fontWeight: "bold",
                fontSize: 20,
                marginTop: 5,
              }}
            >
              {" "}
              Time{" "}
            </Text>
          </View>
          <View style={styles.timerButtons}>
            <TouchableOpacity
              onPress={() => {
                toggleStopwatch();

                if (placeHolder === Pause) {
                  setPlaceHolder(Play);
                } else {
                  setPlaceHolder(Pause);
                  setShowNotification(false);
                }
              }}
            >
              <Image style={{ width: 63, height: 63 }} source={placeHolder} />
              {/* <Image source = {uri: variableName} /> */}
              {/* within image tag set source = {uri: variableName} */}
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}

const options = {
  container: {
    padding: 5,
    borderRadius: 5,
    width: 200,
    height: 52,
  },
  text: {
    fontSize: 45,
    color: "black",
    marginLeft: 7,
    alignSelf: "center",
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
};
