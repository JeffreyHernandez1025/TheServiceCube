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
  ScrollView,
} from "react-native";
import React, { useState, useCallback, Children } from "react";
import { Entypo } from "@expo/vector-icons";

const Logo = require("../assets/images/TSClogo.png");

export default function Notification({
  setShowNotification,
}: {
  setShowNotification: any;
}) {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: '#1EC677',
        position: 'absolute',
        zIndex: 2,
        top: 55,
        width: 393,
        height: 100,
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 20,
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: '#B6F5D8',
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image style={{ width: 40, height: 41 }} source={Logo} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          padding: 10,
          alignSelf: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: 'white',
            fontWeight: 'bold',
            paddingBottom: 5,
            fontFamily: 'Arial',
          }}
        >
          The Service Cube
        </Text>
        <Text style={{ color: 'white', fontSize: 15, fontFamily: 'Arial' }}>
          You completed 1 hour! You have recieved 60 cubes!
        </Text>
      </View>
      <View style={{ width: 25, height: 20 }}>
        <TouchableOpacity
          //@ts-ignore
          style={{ alignSelf: 'right' }}
          onPress={() => {
            setShowNotification(false)
          }}
        >
          <Entypo name='cross' size={24} color='black' />
        </TouchableOpacity>
      </View>
    </View>
  )
}
