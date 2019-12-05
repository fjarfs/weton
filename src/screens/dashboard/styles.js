import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		flex: 1
	},
	topContent: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: Platform.Version <= 19 ? 55 : 70,
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
		paddingTop: Platform.Version <= 19 ? 0 : 20,
	},
	topText: {
		fontSize: 20,
		color: '#fff'
	},
});
