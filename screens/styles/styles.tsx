import { StyleSheet, Dimensions } from 'react-native'
import { block } from 'react-native-reanimated'
import { useFonts } from 'expo-font'

function Fonts() {
  const [loaded] = useFonts({
    Poppins: require('../../assets/fonts/Poppins.ttf'),
    PoppinsSemiBold: require('../../assets/fonts/PoppinsSemiBold.ttf'),
    PoppinsBold: require('../../assets/fonts/PoppinsBold.ttf'),
    PoppinsMedium: require('../../assets/fonts/PoppinsMedium.ttf'),
  })
}

export default StyleSheet.create({
  // Home Tab

  item: {
    marginTop: -3,
    marginHorizontal: 7,
    fontSize: 15,
    fontFamily: 'PoppinsSemiBold',
  },
  title: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 10,
    paddingBottom: 13,
  },
  off: {
    textAlign: 'left',
    marginTop: 0,
    backgroundColor: 'red',
    width: 45,
    borderWidth: 2,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  name: {
    backgroundColor: '#f9c2ff',
    padding: 125,
    margin: 'auto',
    textAlign: 'center',
    borderWidth: 2,
  },
  name2: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 20,
    marginLeft: 16,
    marginTop: 16,
  },
  des: {
    marginTop: 26,
    marginHorizontal: 16,
    fontFamily: 'PoppinsMedium',
    fontSize: 14,
    color: '#888888',
    paddingBottom: 25,
  },
  desContainer: {
    borderBottomWidth: 1,
    borderColor: '#CACACA',
    marginHorizontal: 5,
  },
  name3: {
    textAlign: 'center',
    fontSize: 30,
    textDecorationLine: 'underline',
  },
  websiteContainer: {
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingTop: 5,
    paddingLeft: 20,
    width: 400,
    borderColor: '#CACACA',
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
  },
  name4: {
    color: 'grey',
    fontSize: 12,
  },
  comment: {
    color: '#898989',
    fontSize: 12,
    fontFamily: 'Poppins',
  },
  website: {
    marginTop: 15,
    textAlign: 'left',
    fontSize: 14,
    fontFamily: 'Poppins',
  },
  locationContainer: {
    borderBottomWidth: 1,
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 5,
    width: 400,
    borderColor: '#CACACA',
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
  },
  location: {
    fontFamily: 'Poppins',
    textAlign: 'left',
    fontSize: 14,
  },
  name5: {
    color: 'grey',
    fontSize: 12,
  },
  emailContainer: {
    borderBottomWidth: 1,
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 5,
    width: 400,
    borderColor: '#CACACA',
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
  },
  name6: {
    color: 'grey',
    fontSize: 12,
  },
  email: {
    fontFamily: 'Poppins',
    textAlign: 'left',
    fontSize: 14,
  },
  name7: {
    color: 'grey',
    fontSize: 12,
  },
  phoneNumber: {
    fontFamily: 'Poppins',
    textAlign: 'left',
    fontSize: 14,
  },
  comment2: {
    fontFamily: 'Poppins',
    color: '#898989',
    fontSize: 12,
  },
  phoneNumberContainer: {
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 5,
    width: 400,
    borderColor: '#CACACA',
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  itemContainer: {
    marginRight: 20,
    marginLeft: 10,
    borderRadius: 15,
    overflow: 'hidden',
    width: 320,
    height: 260,
    paddingBottom: 80,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#A0A0A0',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  add: {
    fontFamily: 'Poppins',
    fontSize: 12,
    flexShrink: 1,
    flexWrap: 'wrap',
    marginLeft: 7,
  },
  block: {
    fontSize: 11,
  },
  TextContainer: {
    width: 320,
    height: 100,
    margin: 0,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#A0A0A0',
    borderBottomLeftRadius: 15,
    flexDirection: 'row',
  },
  label: {
    fontFamily: 'PoppinsMedium',
    fontSize: 15,
    marginLeft: 10,
    marginTop: 18,
    marginBottom: 13,
  },

  // Hour Tab

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  info: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Helvetica',
    paddingBottom: 7,
    marginHorizontal: 50,
  },
  timerHeader: {
    textAlign: 'center',
    fontSize: 15,
    color: '#808080',
    fontFamily: 'Arial',
    paddingBottom: 80,
  },
  timer: {
    color: 'black',
    fontSize: 40,
  },
  timerContainer: {
    paddingTop: 10,
    alignSelf: 'center',
  },
  timerButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 90,
    marginBottom: 20,
  },
})
