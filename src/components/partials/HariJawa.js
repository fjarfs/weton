import React, { Component } from 'react';
import { View, Modal, Text, Image, Platform, TouchableOpacity, ToastAndroid, TouchableHighlight } from 'react-native';

/** REDUX */
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import moment from 'moment';


const styles = {
	mainContainer: {
		flexDirection: 'column',
	},
	segmentContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: '#ececec',
		padding: 20
	},
	messageDescription: {
		flexDirection: 'column'
	},
	notifTitle: {
		// fontFamily: 'ProximaNova-Bold',
		fontSize: 14,
		color: '#000'
	},
	notifContent: {
		// fontFamily: 'ProximaNova-Regular',
		fontSize: 12,
		color: '#000'
	},
	badge: {
		backgroundColor: '#DC1E2D',
		position: 'absolute',
		top: 0,
		left: 0,
		height: 12,
		width: 12,
		borderRadius: 20
	},
	notifDate: {
		// fontFamily: 'ProximaNova-Regular',
		fontSize: 12,
		color: '#000',
		paddingHorizontal: 20,
		paddingTop: 20
	},
	topContent: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: Platform.Version <= 19 ? 55 : 80,
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
		paddingTop: Platform.Version <= 19 ? 0 : 30,
	},
	topText: {
		fontSize: 20,
		color: '#fff',
		alignItems: 'center'
		
	},
	iconText: {
		fontSize: 40,
		color: '#fff',
	},
	leftContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		paddingLeft: 10,
	},
	rightContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingRight: 10,
	  },
	container: {
		backgroundColor: '#FFF',
		flex: 1
	},
};

class HariJawa extends Component {
	state = {
		modalVisible: false,
	  };
	
	  setModalVisible(visible) {
		this.setState({modalVisible: visible});
	  }

	render() {
		return (
			<TouchableOpacity onPress={() => {
				this.setModalVisible(true);
			  }}>
				<Modal
				onSwipeComplete={() => {
					this.setModalVisible(false);
				  }}
					animationType="slide"
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						alert('Modal has been closed.');
					}}>
					<View style={styles.container}>
						<View style={styles.topContent}>
						<View style={styles.leftContainer}>
							<TouchableHighlight
								onPress={() => {
								this.setModalVisible(!this.state.modalVisible);
								}}>
								<Text>
								<Icon style={styles.iconText}
									name='close'
									size={50}
									color='#fff'
								/>
								</Text>
							</TouchableHighlight>
						</View>
						
						<TouchableHighlight
							onPress={() => {
							this.setModalVisible(!this.state.modalVisible);
							}}>
							<Text style={styles.topText}>{this.props.item.name}</Text>
						</TouchableHighlight>
						<View style={styles.rightContainer}></View>
						</View>
					</View>
					
				</Modal>

				<View style={styles.mainContainer}>
					<View style={styles.segmentContainer}>
						<View
							style={{
								flex: 1,
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center'
							}}
						>
							<View style={{ position: 'relative', flex: 1 }}>
								<Image
									source={require('@images/weton.png')}
									style={{ height: 50, width: 50 }}
								/>
							</View>
							<View style={[styles.messageDescription, { flex: 3 }]}>
								<Text style={styles.notifTitle}>
								{this.props.item.name}
								</Text>
								<Text style={styles.notifContent}>
									{this.props.item.name}
								</Text>
							</View>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}

export default HariJawa;
