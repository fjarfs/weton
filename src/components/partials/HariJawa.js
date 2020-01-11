import React, { Component } from 'react';
import { View, Modal, Text, Platform, TouchableOpacity, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


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
		fontSize: 20,
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
	topContent: {
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
		paddingTop: 30,
	},
	topText: {
		fontSize: 20,
		color: '#fff',
		alignItems: 'center'
		
	},
	textContent: {
		fontSize: 20,
		alignItems: 'center'

	},
	titleContent: {
		fontSize: 30,
		fontWeight: 'bold',
		alignItems: 'center',
	},
	iconText: {
		fontSize: 30,
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
	containerContent: {
		paddingTop: 40,
		padding: 20,
		flexDirection: 'row',
		alignItems: 'center',
	}
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
					animationType="slide"
					transparent={false}
					visible={this.state.modalVisible}
				>
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
						<View  style={styles.containerContent}>
							<Text style={styles.titleContent}>
							{this.props.item.name}
							</Text>
						</View>
						<View style={{borderBottomWidth: 1, borderBottomColor: '#ccc'}}></View>
						<View style={styles.containerContent}>
							<Text style={styles.textContent}>
							{this.props.item.desc}
							</Text>
						</View>
						<View style={{borderBottomWidth: 1, borderBottomColor: '#ccc'}}></View>
						<View style={styles.containerContent}>
							<Text style={styles.textContent}>
							{this.props.item.name} mempunyai nilai {this.props.item.value} dalam perhitungan Jawa.
							</Text>
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
							
							<View style={[styles.messageDescription, { flex: 4 }]}>
								<Text style={styles.notifTitle}>
								{this.props.item.name}
								</Text>
							</View>
							<View style={{ position: 'relative', flex: 1, }}>
								
							</View>
							
							<View style={{ position: 'relative', flex: 1, }}>
							<Text>
								<Icon style={{textAlign: 'right',}}
									name='keyboard-arrow-right'
									size={20}
									color='#000'
									
								/>
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
