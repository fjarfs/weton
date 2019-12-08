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
		height: 400,
		backgroundColor: '#D81B60',
		borderBottomLeftRadius: 210,
        borderBottomRightRadius: 210
	},
	topText: {
		fontSize: 40,
		fontWeight: 'bold',
		paddingBottom: 20,
		color: '#fff'
	},
});
