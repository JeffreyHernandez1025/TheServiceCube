/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { ColorSchemeName, Pressable, Image, View, Text } from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import Home from '../screens/Home'
import Hours from '../screens/Hours'
import ModalScreen from '../screens/ModalScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import Rewards from '../screens/Rewards'
import Wallet from '../screens/Wallet'
import TabOneScreen from '../screens/TabOneScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types'
import LinkingConfiguration from './LinkingConfiguration'

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName
}) {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  )
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Root'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name='Modal' component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>()

function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: 'blue',
      }}
    >
      <BottomTab.Screen
        name='Home'
        component={Home}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/images/focusedHomeIcon.png')
                  : require('../assets/images/homeIcon.png')
              }
              style={{ marginTop: 25, width: 50, height: 50 }}
            />
          ),
          header: () => null,
        })}
      />
      <BottomTab.Screen
        name='Hours'
        component={Hours}
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/images/focusedClockIcon.png')
                  : require('../assets/images/clockIcon.png')
              }
              style={{ width: 35, height: 35, marginTop: 30 }}
            />
          ),
          header: () => null,
        }}
      />
      <BottomTab.Screen
        name='Rewards'
        component={Rewards}
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/images/focusedRewardIcon.png')
                  : require('../assets/images/rewardIcon.png')
              }
              style={{ marginTop: 30, width: 27, height: 40 }}
            />
          ),
          header: () => null,
        }}
      />
      <BottomTab.Screen
        name='Wallet'
        component={Wallet}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/images/focusedWalletIcon.png')
                  : require('../assets/images/walletIcon.png')
              }
              style={{ width: 35, height: 35, marginTop: 30 }}
            />
          ),
          header: () => null,
        }}
      />
    </BottomTab.Navigator>
  )
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
}
