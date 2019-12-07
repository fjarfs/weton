import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const style = {
  container: {
    marginVertical: 3,
    padding: 5,
    flex: -1,
    width: '50%',
    flexDirection: 'column',
  },
  containerBg: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ececec',
    borderWidth: 1,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  imgContainer: {
    padding: 15,
    backgroundColor: '#fff',
  },
  images: {
    flex: 1,
    width: '100%',
    height: 150,
  },
  productDescContainer: {
    borderColor: '#ececec',
    borderTopWidth: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  productName: {
    flex: 1,
    paddingVertical: 5,
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    width: '100%',
    height: 60,
  },
  priceContainer: {
    marginBottom: 10,
    height: 40,
  },
  salePrice: {
    fontSize: 14,
    color: '#DC1E2D',
    lineHeight: 18,
    textAlign: 'left',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  price: {
    fontSize: 18,
    color: '#000',
    lineHeight: 24,
    textAlign: 'left',
  },
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
};


class ProductCard extends Component {
  renderImage() {
    return (
      <View style={style.imgContainer}>
        <Image
          source={{uri: this.props.item.image}}
          resizeMode="cover"
          style={style.images}
        />
      </View>
    );
  }

  state = {
		modalVisible: false,
	  };
	
	  setModalVisible(visible) {
		this.setState({modalVisible: visible});
	  }

  render() {
    return (
      <View style={style.container}>
          <TouchableOpacity  onPress={() => {
				this.setModalVisible(true);
			  }}>

          <Modal
				onSwipeComplete={() => {
					this.setModalVisible(false);
				  }}
					animationType="slide"
					transparent={false}
					visible={this.state.modalVisible}
				>
					<View style={style.container}>
						<View style={style.topContent}>
						<View style={style.leftContainer}>
							<TouchableHighlight
								onPress={() => {
								this.setModalVisible(!this.state.modalVisible);
								}}>
								<Text>
								<Icon style={style.iconText}
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
							<Text style={style.topText}>{this.props.item.name}</Text>
						</TouchableHighlight>
						<View style={style.rightContainer}></View>
						</View>
					</View>
					
				</Modal>

        <View style={style.containerBg}>
        {this.renderImage()}
          <View style={style.productDescContainer}>
            <Text
              style={style.productName}
              numberOfLines={2}
              ellipsizeMode="tail">
              {this.props.item.name}
            </Text>
          </View>
         
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ProductCard;
