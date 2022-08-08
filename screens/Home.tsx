import {
  Text,
  View,
  FlatList,
  Image,
  Linking,
  TouchableOpacity,
  ImageBackground,
  ImageSourcePropType,
  Alert,
} from 'react-native'
import React, { useState, useCallback, Children } from 'react'
import styles from './styles/styles'
import { useFonts } from 'expo-font'
import Modal from 'react-native-modal'
import { SimpleLineIcons } from '@expo/vector-icons'

export interface Data {
  id: string
  info: string
  opportunity: string
  opportunity2: string
  vb: string
  uri: string
  category: string
  profile: ImageSourcePropType
  des: string
  url: string
  email: string
  contact: string
  address: string
}

export interface Row {
  id: string
  label: string
  data: any //Data[] | { menuLabel: string }[];
  type: string
}
export default function Home({ navigation }: any) {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>({})
  const [filter, setFilter] = useState('All')

  // Fonts
  const [loaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins.ttf'),
    PoppinsSemiBold: require('../assets/fonts/PoppinsSemiBold.ttf'),
    PoppinsBold: require('../assets/fonts/PoppinsBold.ttf'),
    PoppinsMedium: require('../assets/fonts/PoppinsMedium.ttf'),
  })

  const [opportunities, setOpportunities] = useState<Data[]>([
    {
      id: '1',
      info: 'Save Our Shores',
      opportunity: 'Help clean up the beach!',
      opportunity2: 'Help clean up the beach in Los Angeles!',
      vb: 'Hour Block 1 hr',
      uri: 'https://beaches.lacounty.gov/wp-content/uploads/2021/09/Redondo-Beach-BCB_5409-1920x1105.jpg',
      category: 'Beach',
      profile: require('../assets/images/saveourshores.png'),
      des: 'On the 21st of August, our team will need extra hands to clean the beach of LA in order to conserve the nature. Your help will begreatly appreciated.',
      url: 'https://saveourshores.org/beachcleanups/',
      email: 'alejandro@saveourbeach.org',
      contact: '(831) 462 5660',
      address: '123 Los Angeles Street, 90014',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      info: 'Clean Trails',
      opportunity: 'Help pick up trash in your streets!',
      opportunity2: 'Help clean up the streets of Los Angeles!',
      vb: 'Hour Block 1 hr',
      uri: 'https://img.hoodline.com/uploads/story/image/569140/photo_-_volunteers_help_CleanMission_spruce_up_outside_Zoe_Bikini_18th_and_Mission_8-2019.jpeg',
      category: 'Trash',
      profile: require('../assets/images/cleantrails.jpeg'),
      des: 'On the 21st of August, our team will need extra hands to clean the streets of LA in order to conserve the hygiene. Your help will be greatly appreciated.',
      url: 'https://www.cleantrails.org/',
      email: 'info@cleantrails.org',
      contact: '(720) 985 8600',
      address: '123 Los Angeles Street, 90014',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      info: 'CalOSBA',
      opportunity: 'Help out your local businesses!',
      opportunity2: 'Help out the local business of Los Angeles!',
      vb: 'Hour Block 1 hr',
      uri: 'https://mcdonaldpaper.com/media/wysiwyg/blog/blog_21-10-20-2.jpg',
      category: 'Business',
      profile: require('../assets/images/calosba.png'),
      des: 'On the 21st of August, our team will need extra help at the local restaurants in order to keep our business strong. Your help will be greatly appreciated.',
      url: 'https://calosba.ca.gov/',
      email: 'CalOSBA@gmail.org',
      contact: '(877) 345 4633',
      address: '123 Los Angeles Street, 90014',
    },
    {
      id: '4',
      info: 'California State Parks',
      opportunity: 'Help clean up your local parks!',
      opportunity2: 'Help clean up the parks of Los Angeles!',
      vb: 'Hour Block 1 hr',
      uri: 'https://media.istockphoto.com/photos/picking-up-a-plastic-bottle-during-park-cleanup-picture-id1161008212?k=20&m=1161008212&s=612x612&w=0&h=ll4BiuqmO003r2LQ66PKurXnA1rD_gbdR1wQ7K-VKOs=',
      category: 'Trash',
      profile: require('../assets/images/parksca.png'),
      des: 'On the 21st of August, our team will need extra hands to clean the parks in LA in order to conserve the nature. Your help will be greatly appreciated.',
      url: 'https://www.parks.ca.gov/',
      email: 'iso@parks.ca.gov',
      contact: '(916) 653 7423',
      address: '123 Los Angeles Street, 90014',
    },
    {
      id: '5',
      info: 'National Gardening Club',
      opportunity: 'Help keep the Earth green!',
      opportunity2: 'Come and garden with the local gardening club!',
      vb: 'Hour Block 1 hr',
      uri: 'https://www.popsci.com/uploads/2022/04/21/garden.jpg?auto=webp&width=1440&height=1080',
      category: 'Earth',
      profile: require('../assets/images/ngc.png'),
      des: 'On the 21st of August, our team will be gardening at the local garden in LA in order to expand the nature of LA. Your help will be greatly appreciated.',
      url: 'https://gardenclub.org/',
      email: 'headquarters@gardenclub.org',
      contact: '(314) 776 7574',
      address: '123 Los Angeles Street, 90014',
    },
    {
      id: '6',
      info: 'Woodcrest Elementary School',
      opportunity: 'Help the youth in this school!',
      opportunity2: 'Help the youth learn in Los Angeles!',
      vb: 'Hour Block 1 hr',
      uri: 'https://s3-media0.fl.yelpcdn.com/bphoto/SyOO6VEokLNa9WKLvbV0lw/348s.jpg',
      category: 'School',
      profile: require('../assets/images/wes.png'),
      des: 'On the 21st of August, our team will need extra hands to teach the youth in LA. Your help will be greatly appreciated.',
      url: 'https://woodcrest-lausd-ca.schoolloop.com/',
      email: 'woodcrest@school.org',
      contact: '(323) 756 1371',
      address: '123 Los Angeles Street, 90014',
    },
  ])

  const rows: Row[] = [
    { id: '1', label: 'Near You', data: opportunities, type: 'card' },
    {
      id: '',
      label: 'Categories',
      data: [
        {
          menuLabel: 'All',
        },
        {
          menuLabel: 'Earth',
        },
        {
          menuLabel: 'Beach',
        },
        {
          menuLabel: 'Trash',
        },
        {
          menuLabel: 'Business',
        },
        {
          menuLabel: 'School',
        },
      ],
      type: 'menu',
    },
    {
      id: '3',
      label: 'Popular',
      data: opportunities,
      type: 'card2',
    },
    {
      id: '4',
      label: 'Cooking',
      data: opportunities,
      type: 'card2',
    },
    {
      id: '5',
      label: 'Cleaning',
      data: opportunities,
      type: 'card2',
    },
  ]

  const getData = (data: Data[]) => {
    return data.filter((data) => {
      if (filter === 'All') return true
      else {
        return data.category === filter
      }
    })
  }

  if (!loaded) return null


  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <FlatList
        data={rows}
        renderItem={({ item }: { item: Row }) => (
          <View>
            {item.type === 'card' ? (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 10,
                    paddingBottom: 68,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'PoppinsSemiBold',
                      fontSize: 25,
                      marginRight: -14,
                    }}
                  >
                    {' '}
                    TheService{' '}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'PoppinsSemiBold',
                      fontSize: 25,
                      color: '#1EC677',
                    }}
                  >
                    {' '}
                    Cube{' '}
                  </Text>
                  <Image
                    style={{ marginLeft: 75, marginRight: 25 }}
                    source={require('../assets/images/settings.png')}
                  />
                  <Image
                    style={{}}
                    source={require('../assets/images/clipboard.png')}
                  />
                </View>
                <Text
                  style={{
                    fontFamily: 'PoppinsSemiBold',
                    fontSize: 20,
                    textAlign: 'left',
                    marginLeft: filter === 'All' ? 10 : 15,
                    paddingBottom: 13,
                  }}
                >
                  {filter === 'All' ? null : 'Near You:'}{' '}
                  {filter === 'All' ? item.label : filter}
                </Text>
                <FlatList
                  data={getData(item.data)}
                  renderItem={({ item }) => (
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          setSelectedItem(item)
                          setModalVisible(true)
                        }}
                      >
                        <View style={styles.itemContainer}>
                          <Image
                            style={styles.image}
                            source={{
                              uri: item.uri,
                            }}
                          />
                          <View style={{ position: 'absolute' }}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontFamily: 'PoppinsBold',
                                backgroundColor: 'rgba(67, 182, 99, 0.7)',
                                paddingHorizontal: 15,
                                paddingVertical: 5,
                                marginLeft: 19,
                                marginTop: 19,
                                color: 'white',
                              }}
                            >
                              {' '}
                              {item.category}{' '}
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
                  keyExtractor={(item, index) => `${index}`}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            ) : null}
            {item.type === 'menu' ? (
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
                            filter === item.menuLabel ? '#1EC677' : 'white',
                        }}
                        onPress={() => {
                          setFilter(item.menuLabel)
                        }}
                      >
                        <View>
                          <Text
                            style={{
                              fontFamily: 'Poppins',
                              fontSize: 15,
                              paddingVertical: 6,
                              paddingHorizontal: 15,
                              color:
                                filter === item.menuLabel ? 'white' : 'black',
                            }}
                          >
                            {item.menuLabel}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                  keyExtractor={(item, index) => `${index}`}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            ) : null}
            {item.type === 'card2' ? (
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
                          <View style={{ position: 'absolute' }}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontFamily: 'PoppinsBold',
                                backgroundColor: 'rgba(67, 182, 99, 0.7)',
                                paddingHorizontal: 15,
                                paddingVertical: 5,
                                marginLeft: 19,
                                marginTop: 19,
                                color: 'white',
                              }}
                            >
                              {' '}
                              {item.category}{' '}
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
                  keyExtractor={(item, index) => `${index}`}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            ) : null}
          </View>
        )}
      />

      <Modal
        animationIn='slideInLeft'
        animationOut='slideOutLeft'
        coverScreen={true}
        style={{ margin: 0, backgroundColor: 'white' }}
        isVisible={modalVisible}
        // @ts-ignore
        onRequestClose={() => {
          Alert.alert('modal was closed')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={{ flex: 1 }}>
          {/* "https://beaches.lacounty.gov/wp-content/uploads/2021/09/Redondo-Beach-BCB_5409-1920x1105.jpg",*/}
          <ImageBackground
            style={{ width: '100%', height: 300, alignSelf: 'center' }}
            source={{
              uri: selectedItem.uri,
            }}
          >
            <SimpleLineIcons
              name='arrow-left'
              size={30}
              color='#CACACA'
              style={{ marginTop: 58, marginLeft: 14 }}
              onPress={() => setModalVisible(!modalVisible)}
            />
            {/*require("../assets/saveourshores.png") */}
            <Image
              style={{
                width: 40,
                height: 40,
                borderWidth: 1,
                borderRadius: 300,
                borderColor: '#0F490E',
                marginTop: 157,
                marginLeft: 10,
              }}
              source={selectedItem.profile}
            />
          </ImageBackground>
        </View>
        <View style={{ flex: 1, paddingBottom: 295 }}>
          <View style={styles.desContainer}>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <View>
                <Text
                  style={{
                    fontFamily: 'PoppinsSemiBold',
                    color: '#43B663',
                    fontSize: 12,
                    letterSpacing: 2,
                    backgroundColor: '#DDF2E3',
                    paddingVertical: 10,
                    paddingHorizontal:
                      selectedItem.category === 'Business' ? 10 : 20,
                    marginTop: 15,
                    alignSelf: 'center',
                  }}
                >
                  {selectedItem.category}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    marginTop: 20,
                    alignSelf: 'center',
                    fontFamily: 'PoppinsSemiBold',
                    fontSize: 12,
                    color: '#898989',
                    textAlign: 'center',
                    width: 70,
                    marginHorizontal: 60,
                  }}
                >
                  {selectedItem.vb}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  borderColor: '#A7A7A7',
                  marginTop: 15,
                  paddingHorizontal: 10,
                  alignSelf: 'center',
                  paddingVertical: 10,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require('../assets/images/clockIcon.png')}
                />
                <Text
                  style={{
                    fontFamily: 'PoppinsMedium',
                    fontSize: 10,
                    color: '#898989',
                    alignSelf: 'center',
                    marginLeft: 5,
                  }}
                >
                  {' '}
                  21 days left{' '}
                </Text>
              </View>
            </View>
            <Text style={styles.name2}>{selectedItem.opportunity2}</Text>
            <Text style={styles.des}>{selectedItem.des}</Text>
          </View>
          <TouchableOpacity onPress={() => Linking.openURL(selectedItem.url)}>
            <View style={styles.websiteContainer}>
              <Image
                style={{ width: 22, height: 22, alignSelf: 'center' }}
                source={require('../assets/images/world.png')}
              />
              <View style={{ marginLeft: 15 }}>
                <Text style={styles.website}>{selectedItem.url}</Text>
                <Text style={styles.comment}> *Preferred Way to Sign Up* </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  flex: 1,
                  marginRight: 15,
                }}
              >
                <SimpleLineIcons
                  style={{ alignSelf: 'center' }}
                  name='arrow-right'
                  size={15}
                  color='#BBBBBB'
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('maps://app?saddr=100+101&daddr=100+102')
            }
          >
            <View style={styles.locationContainer}>
              <Image
                style={{
                  width: 22,
                  height: 22,
                  alignSelf: 'center',
                  marginLeft: 15,
                }}
                source={require('../assets/images/POI.png')}
              />
              <View style={{ marginLeft: 15 }}>
                <Text style={styles.location}>
                  {' '}
                  123 Los Angeles Street, 90014{' '}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'mailto:alejandro@saveourshores.org?subject=SendMail&body=Description'
              )
            }
          >
            <View style={styles.emailContainer}>
              <Image
                style={{ marginLeft: 15 }}
                source={require('../assets/images/mail.png')}
              />
              <View style={{ marginLeft: 19 }}>
                <Text style={styles.email}> {selectedItem.email} </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('tel:$831-462-5660')}
          >
            <View style={styles.phoneNumberContainer}>
              <Image
                style={{ marginLeft: 14 }}
                source={require('../assets/images/phone.png')}
              />
              <View style={{ marginLeft: 17 }}>
                <Text style={styles.phoneNumber}> {selectedItem.contact} </Text>
                <Text style={styles.comment2}> Tap to Call </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible)
              navigation.navigate('Hours')
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: 'PoppinsSemiBold',
                  fontSize: 20,
                  backgroundColor: '#1D9F62',
                  alignSelf: 'center',
                  color: 'white',
                  marginTop: 15,
                  paddingHorizontal: 80,
                  paddingVertical: 10,
                  borderRadius: 12,
                  overflow: 'hidden',
                }}
              >
                {' '}
                Volunteer{' '}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}
