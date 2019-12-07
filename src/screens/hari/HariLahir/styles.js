import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    featuredWrappper: {
      flex: 1,
      flexDirection: 'row',
    },
    featuredMenu: {
      margin: 2,
      width: 150,
      height: 100,
      flexDirection: 'column',
      marginVertical: 10,
    },
    menuIcon: {
      width: 150,
      height: 80,
      borderRadius: 10,
    },
    menuText: {
      width: '100%',
      height: '100%',
      fontSize: 11,
      position: 'absolute',
      fontWeight: '600',
      color: 'white',
      padding: 10,
      paddingTop: 20,
    },
    titleText: {
      fontSize: 20,
    },
  });