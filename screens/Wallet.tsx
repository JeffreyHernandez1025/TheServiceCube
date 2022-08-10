import {
  Text,
  View,
  FlatList,
  Image,
  Linking,
  TouchableOpacity,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native'
import React, { useState, useCallback, Children } from 'react'
import { useFonts } from 'expo-font'
import Modal from 'react-native-modal'
import { SimpleLineIcons } from '@expo/vector-icons'
import { useWalletConnect } from '@walletconnect/react-native-dapp'
// Tabs
export interface Data {
  id: string
  NFT_Image: ImageSourcePropType
  description: string
}

export interface Tabs {
  id: string
  tabName: string
  status: boolean
  data: Data[]
}

export interface TabData2 {
  id: string
  NFT_Image: ImageSourcePropType
  description: string
}
// Wallet
const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length
  )}`
}

export default function Wallet() {
  //fonts
  const connector = useWalletConnect()

  const connectWallet = React.useCallback(() => {
    return connector.connect()
  }, [connector])

  const disconnect = React.useCallback(() => {
    return connector.killSession()
  }, [connector])

  const [loaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins.ttf'),
    PoppinsSemiBold: require('../assets/fonts/PoppinsSemiBold.ttf'),
    PoppinsBold: require('../assets/fonts/PoppinsBold.ttf'),
    PoppinsMedium: require('../assets/fonts/PoppinsMedium.ttf'),
  })
  // Tabs
  const [isPress, setIsPress] = useState(false)

  const [tabInfo2, setTabInfo2] = useState<TabData2[]>([])

  const [tabInfo1, setTabInfo1] = useState<TabData2[]>([
    {
      id: '1',
      NFT_Image: require('../assets/images/NFTcoin.png'),
      description:
        'This NFT shows that this person has completed 100 hours of community service!',
    },
    {
      id: '2',
      NFT_Image: require('../assets/images/NFTcoin.png'),
      description:
        'This NFT shows that this person has completed 200 hours of community service!',
    },
    {
      id: '3',
      NFT_Image: require('../assets/images/NFTcoin.png'),
      description:
        'This NFT shows that this person has completed 300 hours of community service!',
    },
    {
      id: '4',
      NFT_Image: require('../assets/images/NFTcoin.png'),
      description:
        'This NFT shows that this person has completed 400 hours of community service!',
    },
    {
      id: '5',
      NFT_Image: require('../assets/images/NFTcoin.png'),
      description:
        'This NFT shows that this person has completed 500 hours of community service!',
    },
  ])

  const [tabs, setTabs] = useState<Tabs[]>([
    {
      id: '1',
      tabName: 'Your NFTs',
      status: true,
      data: tabInfo1,
    },
    {
      id: '2',
      tabName: 'Your Wallet',
      status: false,
      data: tabInfo2,
    },
  ])
  const getTabData = () => {
    // get index of tab with status=true
    const i = tabs.map((t) => t.status).indexOf(true)
    // make that its not -1
    if (i > -1) {
      return tabs[i].data
    }

    return []
  }

  if (!loaded) {
    return null
  }
  // Wallet

  return (
    <View style={{ marginTop: 40 }}>
      <View>
        <View
          style={{
            justifyContent: 'flex-end',
            flexDirection: 'row',
            marginRight: 26,
            marginTop: 15,
          }}
        >
          <Image
            style={{ width: 33, height: 33 }}
            source={require('../assets/images/dotsVertical.png')}
          />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/images/profilePic.png')}
            style={{ width: 150, height: 150 }}
          />
          <Text style={{ fontFamily: 'Poppins', fontSize: 18, marginTop: 8 }}>
            {' '}
            Joe Hernandez{' '}
          </Text>
        </View>
        <View style={{ marginLeft: 50 }}>
          <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 15 }}>
            {' '}
            Bio{' '}
          </Text>
          <Text
            style={{
              fontFamily: 'PoppinsMedium',
              fontSize: 16,
              color: '#B7B7B7',
              marginTop: 8,
            }}
          >
            {' '}
            Call me Joe Sir aka Jeffrey Hernandez{' '}
          </Text>
        </View>
      </View>
      <View style={{ paddingBottom: 59 }}>
        <FlatList
          data={tabs}
          style={{ alignSelf: 'center' }}
          horizontal={true}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <Text
                style={{
                  fontFamily: 'PoppinsSemiBold',
                  fontSize: 20,
                  marginHorizontal: 50,
                  marginTop: 43,
                  textDecorationLine:
                    item.status === true ? 'underline' : 'none',
                  textDecorationColor: '#1D9F62',
                  textDecorationStyle: 'double',
                }}
                onPress={() => {
                  setTabs(
                    tabs.filter((t) => {
                      if (t.id === item.id) {
                        t.status = true
                      } else {
                        t.status = false
                      }

                      return t
                    })
                  )
                }}
              >
                {item.tabName}
              </Text>
            </View>
          )}
        />
      </View>
      <FlatList
        data={getTabData()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              width: 100,
              height: 100,
              marginBottom: 32,
              alignContent: 'center',
              paddingVertical: 0,
            }}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
                overflow: 'hidden',
                marginBottom: 32,
                marginLeft: 10,
              }}
              source={item.NFT_Image}
            />
            <View
              style={{
                width: 280,
                height: 100,
                alignSelf: 'center',
                backgroundColor: '#1D9F62',
                borderRadius: 10,
                overflow: 'hidden',
                marginLeft: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: 'PoppinsSemiBold',
                  fontSize: 15,
                  alignSelf: 'center',
                  marginBottom: 35,
                  marginLeft: 10,
                  marginTop: 15,
                  width: 280,
                  height: 100,
                }}
              >
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />
      {tabs[1].status === true ? (
      <View style={styles.container}>
        <Text style={styles.title}>Tab One</Text>
        <View style={styles.separator} />
        {!connector.connected && (
          <TouchableOpacity onPress={connectWallet} style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Connect a Wallet</Text>
          </TouchableOpacity>
        )}
        {!!connector.connected && (
          <>
            <Text>{shortenAddress(connector.accounts[0])}</Text>
            <Text>
              Currently Connected to:
              {connector.chainId === 1 ? 'Ethereum' : 'other'}
            </Text>
            <Text>Chain Id: {connector.chainId}</Text>
            <TouchableOpacity onPress={disconnect} style={styles.buttonStyle}>
              <Text style={styles.buttonTextStyle}>Log out</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttonStyle: {
    backgroundColor: '#3399FF',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#3399FF',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight: '600',
  },
})
