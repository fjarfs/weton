import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		flex: 1
	},
	topContent: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: 300,
		backgroundColor: '#D81B60',
		borderBottomLeftRadius: 210,
		borderBottomRightRadius: 210
	},
	topText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#fff'
	},
	topContentTitle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 80,
		backgroundColor: '#D81B60',
		borderWidth: 0,
		borderRadius: 2,
		borderColor: '#D81B60',
		borderBottomWidth: 2,
		shadowColor: '#000',
		shadowOffset: { height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
		elevation: 2,
		paddingTop: 30
	},
});
