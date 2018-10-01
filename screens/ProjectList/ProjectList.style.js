import { StyleSheet,Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
export default StyleSheet.create({
  projectImage: {
    height: 250,
    width: width
  },
  projectTitle: {
    fontSize: 12
  },
  projectSubheader: {
    fontSize: 12,
    color: '#999'
  },
  projectLike: {
    position: 'absolute',
    top: 2,
    left: 5,
    zIndex: 10,
    color: '#a83f39'
  },
  projectCall: {
    // color: 'white',
    // backgroundColor: '#25D366',
    // borderRadius: 50,
    // fontSize: 12
  },
  btn: {
    borderColor: 'red',
    borderWidth: 1,
  },
});