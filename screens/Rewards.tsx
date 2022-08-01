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
} from 'react-native'
import React, { useState, useCallback, Children } from 'react'
import { useFonts } from 'expo-font'
import DropShadow from 'react-native-drop-shadow'
import { AntDesign } from '@expo/vector-icons'
import { G } from 'react-native-svg'
import { ScrollView } from 'react-native-gesture-handler'
import Modal from 'react-native-modal';

export default function Rewards() {
  // Tabs
  const [isPress, setIsPress] = useState(false)
  // Pressable List
  const [modalVisible, setModalVisible] = useState(false)
  // List Data
  const [tabInfo2, setTabInfo2] = useState([
    {
      source: require('../assets/costco.png'),
      name: 'Costco',
      price: '45% off food',
      points: '720',
      giftCard: '45% off Costco food'
    },
    {
      source: require('../assets/mcdonalds.png'),
      name: 'Mcdonalds',
      price: 'buy 1 get 1 free',
      points: '720',
      giftCard: 'Get a Buy 1 Get 1 Free Discount'
    },
    {
     source: require('../assets/walmart.png'),
     name: 'Walmart',
     price: '60% off toys',
     points: '720',
     giftCard: '60% off Walmart toys'
    },
    {
     source: require('../assets/target.png'),
     name: 'Target',
     price: '20% off',
     points: '720',
     giftCard: '20% off of your total price at Target'
    },
  ])

  const [tabInfo1, setTabInfo1] = useState([
    {
      id: 1,
      source: require('../assets/starbucks.png'),
      name: 'Starbucks',
      price: '$15',
      points: '720',
      giftCard: '$15 Starbucks Gift Card',
      status: true,
    },
    {
      id: 2,
      source: require('../assets/mcdonalds.png'),
      name: 'Mcdonalds',
      price: '$15',
      points: '720',
      giftCard: '$15 Mcdonalds Gift Card',
      status: false,
    },
    {
      id: 3,
      source: require('../assets/bestbuy.png'),
      name: 'Best Buy',
      price: '$15',
      points: '720',
      giftCard: '$15 Best Buy Gift Card',
      status: false,
    },
    {
      id: 4,
      source: require('../assets/target.png'),
      name: 'Target',
      price: '$15',
      points: '720',
      giftCard: '$15 Target Gift Card',
      status: false,
    },
  ])

  const [tabs, setTabs] = useState([
    {
      id: '1',
      tabName: 'Gift Cards',
      status: true,
      data: tabInfo1,
    },
    {
      id: '2',
      tabName: 'Deals',
      status: false,
      data: tabInfo2,
    },
    {
      id: '3',
      tabName: 'NFT',
      status: false,
      data: tabInfo1,
    },
    {
      id: '4',
      tabName: 'Other',
      status: false,
      data: tabInfo1,
    },
  ])
  // Search bar feature
  const [query, setQuery] = useState('')

  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase()
    const filteredOpportunities = filter(opportunities, (user) => {
      return contains(user, formattedQuery)
    })
    setOpportunities(filteredOpportunities)
    setQuery(text)
  }

  const contains = ({ opportunity }, query) => {
    const { name } = opportunity

    if (name.includes(query)) {
      return true
    }

    return false
  }
  // Fonts
  const [loaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins.ttf'),
    PoppinsSemiBold: require('../assets/fonts/PoppinsSemiBold.ttf'),
    PoppinsBold: require('../assets/fonts/PoppinsBold.ttf'),
    PoppinsMedium: require('../assets/fonts/PoppinsMedium.ttf'),
  })

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
    <View>
      <Text style={styles.rewardsTitle}> Rewards </Text>
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20,
          flexDirection: 'row',
          width: 340,
          hieght: 40,
          alignSelf: 'center',
        }}
      >
        <Image
          style={{ width: 20, height: 20 }}
          source={require('../assets/Search.png')}
        />
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          clearButtonMode='always'
          value={query}
          onChangeText={(queryText) => handleSearch(queryText)}
          placeholder='Search'
          inlineImageLeft='../assets/Search.png'
          style={{
            backgroundColor: '#fff',
            marginHorizontal: 0,
            fontSize: 20,
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
              color: '#429A92',
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
            paddingTop: 230,
            paddingRight: 230,
            paddingLeft: 109,
          }}
        >
          cube points
        </Text>
      </View>
      <View style={{ position: 'absolute' }}>
        <Image
          style={{ width: 100, height: 100, marginLeft: 260, marginTop: 185 }}
          source={require('../assets/cubePointsLogo.png')}
        />
      </View>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <View>
            <Text
              style={{
                fontFamily: item.status === true ? 'PoppinsBold' : 'Poppins',
                fontSize: 20,
                paddingRight: 35,
                paddingLeft: 15,
                paddingTop: 28,
                textDecorationLine: item.status === true ? 'underline' : null,
                textDecorationColor: '#429A92',
                color: item.status === true ? 'green' : 'black',
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
      />
      <View>
        {/* first list */}
        <View>
          <Text style={styles.listHeader}> Recommended </Text>
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
                            backgroundColor: 'red',
                          }}
                          source={item.source}
                        />
                        <Text style={styles.giftCardName}> {item.name} </Text>
                        <Text style={styles.giftCardPrice}> {item.price} </Text>
                      </View>
                      <View style={{ position: 'absolute', flex: 1 }}>
                        <Text style={styles.giftCardPoints}>
                          {' '}
                          {item.points} points{' '}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </DropShadow>
                <View style={{flex: 1, backgroundColor: 'red', paddingRight: 10,}}>
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
                    onRequestClose={() => {
                      Alert.alert('Modal has been closed.')(!modalVisible)
                    }}
                  >
                    <ImageBackground
                      source={require('../assets/starbucks2.png')}
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
                        style={{ marginTop: 50, marginLeft: 22, }}
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
                          paddingHorizontal: 15,
                          marginTop: 15,
                          marginLeft: 15,
                          alignSelf: 'center'
                        }}
                      >
                        {' '}
                        {item.points} BLOXIN{' '}
                      </Text>
                      <View
                        style={{
                          marginLeft: 150,
                          flexDirection: 'row',
                          borderWidth: 1,
                          borderColor: '#A7A7A7',
                          marginTop: 15,
                          paddingHorizontal: 6,
                          alignSelf: 'center',
                          paddingVertical: 13,
                        }}
                      >
                        <Image
                          style={{ width: 20, height: 20 }}
                          source={require('../assets/clockIcon.png')}
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
                        $15 Starbucks Gift Card{' '}
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
                          Redeem{' '}
                        </Text>
                      </View>
                    </View>
                  </Modal>
                </View>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* second list */}
        <View>
          <Text
            style={{
              fontFamily: 'PoppinsBold',
              fontSize: 15,
              marginTop: 16,
              marginLeft: 18,
              marginBottom: 13,
            }}
          >
            {' '}
            Popular{' '}
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
                            backgroundColor: 'red',
                          }}
                          source={item.source}
                        />
                        <Text style={styles.giftCardName}> {item.name} </Text>
                        <Text style={styles.giftCardPrice}> {item.price} </Text>
                      </View>
                      <View style={{ position: 'absolute', flex: 1 }}>
                        <Text style={styles.giftCardPoints}>
                          {' '}
                          {item.points} points{' '}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </DropShadow>
                <View>
                  <Modal
                    animationType='slide'
                    visible={modalVisible}
                    onRequestClose={() => {
                      Alert.alert('Modal has been closed.')(!modalVisible)
                    }}
                  >
                    <ImageBackground
                      source={require('../assets/starbucks2.png')}
                      style={{
                        alignSelf: 'center',
                        width: '100%',
                        height: 380,
                      }}
                    >
                      <AntDesign
                        name='arrowleft'
                        size={30}
                        color='black'
                        onPress={() => setModalVisible(!modalVisible)}
                        style={{ marginTop: 50 }}
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
                          paddingHorizontal: 15,
                          marginTop: 15,
                          marginLeft: 15,
                        }}
                      >
                        {' '}
                        {item.points} BLOXIN{' '}
                      </Text>
                      <View
                        style={{
                          marginLeft: 150,
                          flexDirection: 'row',
                          borderWidth: 1,
                          borderColor: '#A7A7A7',
                          marginTop: 15,
                          paddingHorizontal: 6,
                          alignSelf: 'center',
                          paddingVertical: 13,
                        }}
                      >
                        <Image
                          style={{ width: 20, height: 20 }}
                          source={require('../assets/clockIcon.png')}
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
                        $15 Starbucks Gift Card{' '}
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
                          Redeem{' '}
                        </Text>
                      </View>
                    </View>
                  </Modal>
                </View>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
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
    backgroundColor: '#2B615C',
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
    marginLeft: 135,
    fontSize: 10,
    backgroundColor: '#76B536',
    paddingHorizontal: 5,
    paddingVertical: 3,
    fontFamily: 'Poppins',
    color: 'white',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#76B536',
    overflow: 'hidden',
    marginRight: 9,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
})
