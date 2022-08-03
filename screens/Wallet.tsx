import {
  Text,
  View,
  FlatList,
  Image,
  Linking,
  TouchableOpacity,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native'
import React, { useState, useCallback, Children } from 'react'
import styles from './styles/styles'
import { useFonts } from 'expo-font'
import Modal from 'react-native-modal'
import { SimpleLineIcons } from '@expo/vector-icons'
import { WebView } from 'react-native-webview'

export default function Wallet() {
  return (
    <View style={{ marginTop: 40 }}>
      <Text> Hello From Wallet </Text>
      <WebView
      style={{height: 800, width: 428}}
        source={{
          uri: 'https://testnets.opensea.io/account?tab=created',
        }}
      />
    </View>
  )
}
