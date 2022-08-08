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
import MapView, { Marker, AnimatedRegion } from "react-native-maps";
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
import { Stopwatch } from 'react-native-stopwatch-timer'

import styles from "./styles/styles";

const TAB_BAR_HEIGHT = 49;

const Play = require("../assets/images/play.png");
const Pause = require("../assets/images/pause.png");
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
  const [errorMsg, setErrorMsg] = useState(null);
  // Timer
  const [isPlaying, setIsPlaying] = useState(false);
  const [placeHolder, setPlaceHolder] = useState(Play);

  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["5%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const timerFormat = ({ remainingTime }: { remainingTime: any }) => {
    var hours = Math.floor(remainingTime / 3600);
    var minutes = Math.floor((remainingTime % 3600) / 60);
    var seconds = remainingTime % 60;

    if (hours < 10 && minutes < 10 && seconds < 10) {
      return `${hours}:0${minutes}:0${seconds}`;
    }
    if (hours < 10 && minutes >= 10 && seconds < 10) {
      return `${hours}:${minutes}:0${seconds}`;
    }
    if (hours < 10 && minutes < 10 && seconds >= 10) {
      return `${hours}:0${minutes}:${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
  };

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
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
          showsUserLocation={true}
          followsUserLocation={true}
        ></MapView>
      )}
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.info}> Hour Tracker </Text>
          <Text style={styles.timerHeader}> Beach Cleaning </Text>
          <Text style={styles.timerHeader}> Hour block: 1 hr </Text>
          <View style={styles.timerContainer}>
            <CountdownCircleTimer
              key={`${showNotification}${new Date().getTime}`}
              duration={3}
              onComplete={() => {
                setShowNotification(true);
                setIsPlaying(false);
                setPlaceHolder(Play);
                return {
                  shouldRepeat: false,
                };
              }}
              // @ts-ignore
              colors={colors}
              isPlaying={isPlaying}
              style={{ justifyContent: "center" }}
            >
              {({ remainingTime, color }) => (
                <Text style={styles.timer}>
                  {timerFormat({ remainingTime })}
                </Text>
              )}
            </CountdownCircleTimer>
          </View>
          <View style={styles.timerButtons}>
            <TouchableOpacity
              onPress={() => {
                setIsPlaying(!isPlaying);

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
