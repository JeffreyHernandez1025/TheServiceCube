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
  Pressable,
  Linking,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  ImageSourcePropType,
  AlertStatic,
} from 'react-native'
import React, { useState, useCallback, Children } from 'react'
import { useFonts } from 'expo-font'
import DropShadow from 'react-native-drop-shadow'
import { AntDesign } from '@expo/vector-icons'
import Modal from 'react-native-modal'

export interface TabData3{
  NFT_Image: ImageSourcePropType
  NFT_Des: string
}
export interface Data {
  source: ImageSourcePropType
  name: string
  price: string
  points: string
  giftCard: string
}
export interface Data2 {
  NFT_Image: ImageSourcePropType
  NFT_Des: string
}
export interface TabData {
  id: string
  source: ImageSourcePropType
  name: string
  price: string
  points: string
  giftCard: string
  status: boolean
}
export interface TabData2 {
  id: string
  source: string
  name: string
  price: string
  points: string
  giftCard: string
  status: boolean
}
export interface Tabs {
  id: string
  tabName: string
  status: boolean
  data: Data[]
  data2: Data2[]
}

export default function Rewards() {
  // Tabs
  const [isPress, setIsPress] = useState(false)
  // Pressable List
  const [modalVisible, setModalVisible] = useState(false)
  // List Data
  const [tabInfo4, setTabInfo4] = useState([])

  const [tabInfo1, setTabInfo1] = useState<TabData[]>([
    {
      id: '1',
      source: require('../assets/images/starbucks.png'),
      name: 'Starbucks Raffle',
      price: '$15',
      points: '300',
      giftCard: '$15 Starbucks Gift Card',
      status: true,
    },
    {
      id: '2',
      source: require('../assets/images/mcdonalds.png'),
      name: 'Mcdonalds Raffle',
      price: '$15',
      points: '300',
      giftCard: '$15 Mcdonalds Gift Card',
      status: false,
    },
    {
      id: '3',
      source: require('../assets/images/bestbuy.png'),
      name: 'Best Buy Raffle',
      price: '$15',
      points: '300',
      giftCard: '$15 Best Buy Gift Card',
      status: false,
    },
    {
      id: '4',
      source: require('../assets/images/target.png'),
      name: 'Target Raffle',
      price: '$15',
      points: '300',
      giftCard: '$15 Target Gift Card',
      status: false,
    },
  ])

  const [tabInfo2, setTabInfo2] = useState<TabData2[]>([
    {
      id: '1',
      source:
        'https://static.kinguin.net/cdn-cgi/image/w=1140,q=80,fit=scale-down,f=auto/media/category/g/g/ggplay_1573147519.jpg',
      name: 'Google Play Raffle',
      price: '$15',
      points: '300',
      giftCard: '$15 Google Play Gift Card',
      status: true,
    },
    {
      id: '2',
      source:
        'https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/a_generic_white_10_us_noto_email_v2016_us-main._CB627448186_.png',
      name: 'Amazon Raffle',
      price: '$15',
      points: '300',
      giftCard: '$15 Amazon Gift Card',
      status: false,
    },
    {
      id: '3',
      source:
        'https://www.paypalobjects.com/digitalassets/c/gifts/media/catalog/product/c/h/chilis_egift_image_82914_002_.png',
      name: 'Chilis Raffle',
      price: '$15',
      points: '300',
      giftCard: '$15 Chilis Gift Card',
      status: false,
    },
    {
      id: '4',
      source:
        'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/XBOX_fp01.png',
      name: 'Xbox Raffle',
      price: '$15',
      points: '300',
      giftCard: '$15 Xbox Gift Card',
      status: false,
    },
  ])

  const [tabInfo3, setTabInfo3] = useState<TabData3[]>([
    {
      NFT_Image: require('../assets/images/NFTcoin.png'),
      NFT_Des:
        'The NFT badge can be put in your crytpo wallet and will be a way to show your dedication to helping your community. It is awarded only to those who have volunteered for 12 hours.',
    },
    {
      NFT_Image: require('../assets/images/NFTsilvercoin.png'),
      NFT_Des:
        'The NFT badge can be put in your crytpo wallet and will be a way to show your dedication to helping your community. It is awarded only to those who have volunteered for 24 hours.',
    },
    {
      NFT_Image: require('../assets/images/NFTgoldcoin.png'),
      NFT_Des: 'The NFT badge can be put in your crytpo wallet and will be a way to show your dedication to helping your community. It is awarded only to those who have volunteered for 50 hours.'
    },
  ])

  const [tabs, setTabs] = useState<Tabs[]>([
    {
      id: '1',
      tabName: 'Raffles',
      status: true,
      data: tabInfo1,
      data2: tabInfo4
    },
    {
      id: '2',
      tabName: 'NFTs',
      status: false,
      data: tabInfo4,
      data2: tabInfo3,
    },
  ])

  // Fonts
  const [loaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins.ttf'),
    PoppinsSemiBold: require('../assets/fonts/PoppinsSemiBold.ttf'),
    PoppinsBold: require('../assets/fonts/PoppinsBold.ttf'),
    PoppinsMedium: require('../assets/fonts/PoppinsMedium.ttf'),
  })

  const onClose: any = () => {
    Alert.alert('Modal has been closed.')
    setModalVisible(!modalVisible)
  }

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
  return (
    <View style={{}}>
      <Text style={styles.rewardsTitle}> Rewards </Text>
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20,
          flexDirection: 'row',
          width: 340,
          height: 40,
          alignSelf: 'center',
        }}
      >
        <Image
          style={{ width: 20, height: 20 }}
          source={require('../assets/images/Search.png')}
        />
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          clearButtonMode='always'
          placeholder='Search'
          inlineImageLeft='../assets/Search.png'
          style={{
            backgroundColor: '#fff',
            marginHorizontal: 0,
            fontSize: 20,
            color: 'black',
          }}
        />
      </View>
      <View style={styles.pointsContainer}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'PoppinsSemiBold',
            marginTop: 18,
            marginLeft: 16,
          }}
        >
          {' '}
          Current points{' '}
        </Text>
        <Text
          style={{
            color: 'white',
            fontFamily: 'PoppinsSemiBold',
            fontSize: 25,
            marginLeft: 15,
          }}
        >
          {' '}
          1080{' '}
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            width: 80,
            height: 27,
            justifyContent: 'center',
            marginLeft: 16,
            borderRadius: 8,
            marginTop: 5,
          }}
        >
          <Text
            style={{
              color: '#1D9F62',
              textAlign: 'center',
              fontFamily: 'PoppinsSemiBold',
              fontSize: 10,
            }}
          >
            {' '}
            View History{' '}
          </Text>
        </View>
      </View>
      <View style={{ position: 'absolute', alignSelf: 'center' }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Poppins',
            fontSize: 10,
            paddingTop: 225,
            paddingRight: 200,
            paddingLeft: 80,
          }}
        >
          cube points
        </Text>
      </View>
      <View style={{ position: 'absolute' }}>
        <Image
          style={{ width: 75, height: 75, marginLeft: 275, marginTop: 200 }}
          source={require('../assets/images/cubePointsLogo.png')}
        />
      </View>
      <FlatList
        data={tabs}
        style={{ alignSelf: 'center' }}
        renderItem={({ item }) => (
          <View>
            <Text
              //@ts-ignore
              style={{
                fontFamily: item.status === true ? 'PoppinsBold' : 'Poppins',
                fontSize: 20,
                paddingRight: 35,
                paddingLeft: 15,
                paddingTop: 28,
                textDecorationLine: item.status === true ? 'underline' : null,
                textDecorationColor: '#1EC677',
                color: item.status === true ? '#1EC677' : 'black',
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
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      />
      {tabs[1].status ? (
        <View>
          <FlatList
            data={tabInfo3}
            style={{ alignSelf: 'center' }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: '#1D9F62',
                  marginHorizontal: 21,
                  alignContent: 'center',
                  borderRadius: 20,
                  marginTop: 20,
                  paddingBottom: 10,
                  width: 370,
                  height: 445,
                }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={require('../assets/images/NFTbadge.png')}
                    style={{
                      width: 65,
                      height: 65,
                      marginLeft: 23,
                      marginTop: 10,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'PoppinsMedium',
                      fontSize: 14,
                      marginTop: 35,
                      marginLeft: 100,
                      backgroundColor: '#1EC677',
                      alignSelf: 'center',
                      paddingHorizontal: 25,
                      paddingVertical: 10,
                      borderRadius: 10,
                      overflow: 'hidden',
                      color: 'white',
                    }}
                  >
                    {' '}
                    Redeem for 7${' '}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontFamily: 'PoppinsSemiBold',
                      fontSize: 16,
                      marginLeft: 11,
                      marginTop: 8,
                      color: 'white',
                    }}
                  >
                    {' '}
                    NFT BADGE{' '}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: 12,
                      color: 'white',
                      paddingHorizontal: 15,
                    }}
                  >
                    {item.NFT_Des}
                  </Text>
                </View>
                <View
                  style={{
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                  }}
                >
                  <Image
                    style={{ width: 342, height: 250 }}
                    source={item.NFT_Image}
                  />
                </View>
              </View>
            )}
          />
        </View>
      ) : null}
      {tabs[0].status ? (
        <View>
          {/* first list */}
          <View>
            <Text style={styles.listHeader}>
              {tabs[0].status ? 'Recommended' : ''}
            </Text>
            <FlatList
              data={getTabData()}
              horizontal={true}
              renderItem={({ item }) => (
                <View>
                  <DropShadow style={styles.shadowProp}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                      <View
                        style={{
                          marginLeft: 13,
                          marginRight: 4,
                          backgroundColor: 'white',
                          borderRadius: 15,
                          overflow: 'hidden',
                          paddingBottom: 0,
                        }}
                      >
                        <View style={{ paddingBottom: 7 }}>
                          <Image
                            style={{
                              width: 211,
                              height: 133,
                            }}
                            source={item.source}
                          />
                          <Text style={styles.giftCardName}> {item.name} </Text>
                          <Text style={styles.giftCardPrice}>
                            {' '}
                            {item.price}{' '}
                          </Text>
                        </View>
                        <View style={{ position: 'absolute', flex: 1 }}>
                          <Text style={styles.giftCardPoints}>
                            {' '}
                            {item.points} cube points{' '}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </DropShadow>
                  <View style={{ flex: 1, paddingRight: 10 }}>
                    <Modal
                      animationIn='slideInUp'
                      animationOut='slideOutDown'
                      coverScreen={true}
                      style={{
                        backgroundColor: 'white',
                        paddingHorizontal: 0,
                        margin: 0,
                      }}
                      isVisible={modalVisible}
                      // @ts-ignore
                      onRequestClose={() => {
                        Alert.alert('modal was closed')
                        setModalVisible(!modalVisible)
                      }}
                    >
                      <ImageBackground
                        source={require('../assets/images/starbucks2.png')}
                        style={{
                          alignSelf: 'center',
                          width: '100%',
                          height: 380,
                        }}
                      >
                        <AntDesign
                          name='close'
                          size={30}
                          color='white'
                          onPress={() => setModalVisible(!modalVisible)}
                          style={{ marginTop: 50, marginLeft: 22 }}
                        />
                      </ImageBackground>
                      <View style={{ flexDirection: 'row' }}>
                        <Text
                          style={{
                            fontFamily: 'Poppins',
                            color: '#43B663',
                            fontSize: 12,
                            letterSpacing: 2,
                            backgroundColor: '#DDF2E3',
                            paddingVertical: 11,
                            paddingHorizontal: 5,
                            marginTop: 15,
                            marginLeft: 15,
                            alignSelf: 'center',
                          }}
                        >
                          {' '}
                          {item.points} cube points{' '}
                        </Text>
                        <View
                          style={{
                            marginLeft: 130,
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderColor: '#A7A7A7',
                            marginTop: 15,
                            paddingHorizontal: 6,
                            alignSelf: 'center',
                            paddingVertical: 8,
                          }}
                        >
                          <Image
                            style={{ width: 20, height: 20 }}
                            source={require('../assets/images/clockIcon.png')}
                          />
                          <Text
                            style={{
                              fontFamily: 'PoppinsMedium',
                              fontSize: 12,
                              color: '#898989',
                            }}
                          >
                            {' '}
                            21 days left{' '}
                          </Text>
                        </View>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontFamily: 'PoppinsSemiBold',
                            fontSize: 20,
                            marginTop: 28,
                            marginLeft: 15,
                          }}
                        >
                          {' '}
                          $15 Starbucks Gift Card Raffle{' '}
                        </Text>
                      </View>
                      <View
                        style={{ flex: 1, marginHorizontal: 10, marginTop: 44 }}
                      >
                        <TextInput
                          style={{
                            borderWidth: 1,
                            height: 65,
                            borderRadius: 10,
                            fontSize: 20,
                            marginHorizontal: 5,
                          }}
                        />
                        <View
                          style={{
                            backgroundColor: 'white',
                            position: 'absolute',
                          }}
                        >
                          <Text
                            style={{
                              position: 'absolute',
                              top: -8,
                              left: 40,
                              backgroundColor: 'white',
                            }}
                          >
                            {' '}
                            Email{' '}
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              backgroundColor: '#1D9F62',
                              textAlign: 'center',
                              fontFamily: 'PoppinsMedium',
                              color: 'white',
                              fontSize: 25,
                              paddingVertical: 15,
                              marginHorizontal: 5,
                              borderRadius: 15,
                              overflow: 'hidden',
                              marginTop: 150,
                            }}
                          >
                            {' '}
                            Enter{' '}
                          </Text>
                        </View>
                      </View>
                    </Modal>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.name}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* second list */}
          <View>
            <Text
              style={{
                fontFamily: 'PoppinsBold',
                fontSize: 15,
                marginTop: 3,
                marginLeft: 18,
                marginBottom: 13,
              }}
            >
              {tabs[0].status ? 'Popular' : ''}
            </Text>
            <FlatList
              data={tabInfo2}
              horizontal={true}
              renderItem={({ item }) => (
                <View>
                  <DropShadow style={styles.shadowProp}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                      <View
                        style={{
                          marginLeft: 13,
                          marginRight: 4,
                          backgroundColor: 'white',
                          borderRadius: 15,
                          overflow: 'hidden',
                          paddingBottom: 0,
                        }}
                      >
                        <View style={{ paddingBottom: 7 }}>
                          <Image
                            style={{
                              width: 211,
                              height: 133,
                            }}
                            source={{ uri: item.source }}
                          />
                          <Text style={styles.giftCardName}> {item.name} </Text>
                          <Text style={styles.giftCardPrice}>
                            {' '}
                            {item.price}{' '}
                          </Text>
                        </View>
                        <View style={{ position: 'absolute', flex: 1 }}>
                          <Text style={styles.giftCardPoints}>
                            {' '}
                            {item.points} cube points
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </DropShadow>
                </View>
              )}
              keyExtractor={(item) => item.name}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  rewardsTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 83,
  },
  pointsContainer: {
    backgroundColor: '#1D9F62',
    width: 340,
    height: 120,
    alignSelf: 'center',
    borderRadius: 15,
  },
  Tabs: {
    fontSize: 20,
  },
  listHeader: {
    fontFamily: 'PoppinsBold',
    fontSize: 15,
    paddingTop: 14,
    paddingLeft: 13,
    paddingBottom: 13,
  },
  giftCardName: {
    fontFamily: 'PoppinsBold',
    color: '#184A2C',
    paddingLeft: 12,
    fontSize: 15,
  },
  giftCardPrice: {
    fontFamily: 'PoppinsBold',
    color: '#184A2C',
    fontSize: 15,
    paddingLeft: 12,
  },
  giftCardPoints: {
    marginTop: 154,
    marginLeft: 106,
    fontSize: 10,
    backgroundColor: '#1D9F62',
    paddingHorizontal: 5,
    paddingVertical: 3,
    fontFamily: 'Poppins',
    color: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1D9F62',
    overflow: 'hidden',
    marginRight: 9,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    height: 189,
  },
})
