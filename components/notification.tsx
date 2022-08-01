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
} from 'react-native'
import React, { useState, useCallback, Children } from 'react'
import { Entypo } from '@expo/vector-icons' 

const Logo = require('../assets/TSClogo.png')

export default function Notification({setShowNotification}) {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: '#48C7C6',
        position: 'absolute',
        zIndex: 2,
        top: 35,
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
          backgroundColor: '#A3E3E2',
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image style={{ width: 42, height: 37 }} source={Logo} />
      </View>
      <View style={{ flex: 1, flexDirection: 'column', padding: 10, alignSelf: 'center' }}>
        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', paddingBottom: 5, }}>
          The Service Cube
        </Text>
        <Text style={{color: 'white', fontSize: 15 }} >
          You have completed your Hour Block! You have recieved 60 Cube Points!
        </Text>
      </View>
      <View style={{width: 25, hieght: 20,}}>
        <TouchableOpacity style={{ alignSelf: 'right' }} onPress={() =>{
         setShowNotification(false)
        }}>
          <Entypo name='cross' size={24} color='black' />
        </TouchableOpacity>
      </View>
    </View>
  )
}
