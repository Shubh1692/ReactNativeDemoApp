import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  content: {
    borderColor: 'green',
    borderWidth: 1
  },
  wrapper: {
    width: width,
    height: 200,
    // borderColor: 'yellow',
    // borderWidth: 2,
    padding: 10
  },
  slide: {
    width: width,
    height: 200,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    // borderColor: 'green',
    // borderWidth: 1
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    width: width,
    height: 200,
    resizeMode: 'cover'
    // borderColor: 'blue',
    // borderWidth: 1

  },
  paginationStyle: {
    position: 'absolute',
    top: 120,
    right: -10,
    // borderWidth: 1,
    // borderColor: 'red',
    backgroundColor: '#2e2e2e',
    padding: 3,
    borderRadius: 50,
  },
  paginationText: {
    color: 'white',
    fontSize: 10
  },
  swiperCount: {
    color: 'white',
    paddingRight: 10,
    fontSize: 10,
    paddingLeft: 5
  },
  footer: {
    width: width,
    backgroundColor: '#222',
    flexDirection: 'row',
    height: 50,

  },
  fabPhoneIcon: {
    width: width / 2,
    position: 'absolute',
    right: 100,
    justifyContent: 'center',
    backgroundColor: '#5067FF'

  },
  footerview: {
    display: 'flex',
    width: width / 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    fontSize:14
  },
  textColor: {
    color: 'white',
    paddingLeft: 5,
  },
  logoContainer: {
    position: 'absolute',
    top: 180,
    paddingLeft: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  logo: {
    borderColor: 'white',
    borderWidth: 2,
    width: 70,
    height: 40
  },
  titleHeading: {
    color: '#fff',
    fontSize: 16,
    paddingLeft: 10

  },
  titleLocation:{
    paddingLeft: 10,
  },
  logoContainerPadding:{
    // paddingLeft: 20,
  },
  listView: {
    marginTop: 30,
    borderTopWidth: 1,
    borderColor: '#DCDCDC',
    marginHorizontal: 8,

  },
  listFirst: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingVertical: 10
  },
  listSecond: {
    flexDirection: 'row',
    backgroundColor: '#F7F8FA',
    paddingVertical: 10,
    // marginVertical: 10,
  },
  listThird: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingVertical: 10,

  },
  listFour: {
    flexDirection: 'row',
    paddingVertical: 15,
    backgroundColor: '#F7F8FA',
  },
  firstInner1: {
    width: width / 2,
    borderColor: '#DCDCDC',
    borderRightWidth: 1,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  firstInner2: {
    width: width / 2 - 8,
    paddingLeft: 10,
    flexDirection: 'row',
    // borderColor: '#000',
    // borderWidth: 1,
  },
  fourInner: {
    width: width,
    paddingLeft: 10,
  },
  headerText: {
    fontSize: 10,
   
  },
  mainText: {
    color: '#000',
    fontSize: 12,
  },
  amenitiesText: {
    color: '#000',
    fontSize: 14,
    paddingLeft: 10,
    fontWeight: 'bold'
  },
  floorText: {
    color: '#000',
    fontSize: 14,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  mainTextFour: {
    color: '#198CDD',
    fontSize: 14,
    marginRight:15
  },
  bottonText: {
    color: '#000',
    fontSize: 11,
  },
  bgColor: {
    marginVertical: 10,
    backgroundColor: '#F7F8FA',
    width: width,
    height: 20,
  },
  tabSections: {
    paddingVertical: 8,
  },
  tabsStyle: {
    height: 300,
  },
  tabStyle: {
    height: 50,
    marginHorizontal: 5,
    // width : width * 0.70
  },
  cardList: {
    // height:1000,
    // display:"flex",
    // justifyContent:"center"
  },
  cardItem: {
    height: 232,
    // borderColor:'red',
    // borderWidth:1,

  },
  textContent: {
    height: 800,
    // borderColor:'red',
    // borderWidth:1
  },
  cardBody: {
    height: 210,
    // width: width,
    marginRight: 5,
    // borderColor:'red',
    // borderWidth:1,


  },
  cardImageView: {
    height: 70,
    width: width - 40,
    alignItems: 'center',
  },
  cardImage: {
    width: 150,
    height: 50
  },
  cardText: {
    // borderColor:'#000',
    // borderWidth:1,
    marginLeft: -17,
    flexDirection: 'row',
    backgroundColor: '#F7F8FA',
    paddingLeft: 0,
    marginRight: 25,
    paddingVertical: 8,
    height: 50,
    width:width-16
  },
  cardTextWhiteBg: {
    // borderColor:'#000',
    // borderWidth:1,
    marginLeft: -17,
    flexDirection: 'row',
    paddingLeft: 0,
    marginRight: 25,
    paddingVertical: 8,
    height: 50,
    width:width-16
  },
  cardTextInner1: {
    width: width / 2,
    borderColor: '#DCDCDC',
    marginRight: 5,
  },
  iconImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  cardmainText: {
    paddingLeft: 5,
    color: '#000',
    fontSize: 12,
  },
  amenitiescardImage: {
    width: 30,
    height: 30
  },
  amenitiesView: {
    flexDirection: 'column',
    width: width / 3,
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amView: {
    flexDirection: 'row',
    width: width,
  },
  facuility: {
    flexDirection: 'row',
    width: width
  },
  facuility1: {
    width: width / 2,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingBottom: 10,
  },
  facuility2: {
    width: width / 2,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingBottom: 10,
  },
  scrollcardImage: {
    width: 100,
    height: 110
  },
  price: {
    paddingTop: 10,
    paddingLeft: 5,
    color: 'blue',
    fontSize: 14,
    paddingBottom: 10,

  },
  scrollCard: {
    flexDirection: 'row',
  },
  scrollText: {
    paddingLeft: 8,
    width : width * 0.75 - 118
  },
  scrollViewBottom: {
    paddingBottom: 20,
  },
  disclaimerTextHeading: {
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: 10
  },
  disclaimerTextDesc: {
    fontSize: 10
  },
  disclaimerTextBox: {
    flexDirection: 'row',
    paddingTop:10
  },
  summeryText: {
    fontSize: 10,
    paddingLeft: 10,
  },
  projectCards: {
    width : width * 0.75
  },
  subtitleText: {
    fontSize: 12,
    color: '#999',
    paddingRight: 5,
    width : width * 0.70
  },
  mapStyle:{
    width : width,
    height:300
  }
});