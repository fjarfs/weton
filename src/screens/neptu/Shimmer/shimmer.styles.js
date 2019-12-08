import { StyleSheet, Platform } from 'react-native';


export default StyleSheet.create({
  cardBackground: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    backgroundColor: '#dedede', 
    height: 186, 
    marginTop: Platform.Version <= 19 ? 66 : 70
  },
  pointSayaLabel: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    elevation: 5, 
    backgroundColor: '#cdcdcd', 
    top: -5, 
    alignSelf: 'center', 
    position: 'absolute', 
    height: 20, 
    width: 80, 
    borderRadius: 10
  },
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 15, 
    marginBottom: 15,
    marginLeft: 7,
    marginRight: 7
  }, 
  containerList: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    padding: 5,
    borderWidth: 2,
    borderColor: 'rgba(154, 154, 154, 0.29)',
    height: 145,
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 20
  },
  contentImage: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignContent: 'center', 
    alignItems: 'center', 
    height: 60, 
    margin: 5, 
    width: '20%', 
  },
  contentText: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignContent: 'center', 
    alignItems: 'center', 
    height: 60, 
    margin: 10, 
    width: '60%', 
  },
  menuCategory: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignContent: 'center', 
    alignItems: 'center', 
    height: 30, 
    width: '20%', 
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5
  }
});
