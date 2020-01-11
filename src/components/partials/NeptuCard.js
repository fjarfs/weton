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
import { ScrollView } from 'react-native-gesture-handler';
import Button from './Button';

const style = {
  container: {
    marginVertical: 3,
    padding: 5,
    flex: 1,
    flexDirection: 'column'
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
    backgroundColor: '#e1e4e8',
  },
  images: {
    flex: 1,
    width: '100%',
    height: 200,
  },
  productName: {
    flex: 1,
    paddingVertical: 5,
    padding: 10,
    marginTop: 20,
    textAlign: 'left',
    fontSize: 20,
    color: '#000',
    width: '100%',
    height: 60,
  },
  button: {
    flex: -1,
    paddingVertical: 5,
    padding: 10,
    textAlign: 'left',
    height: 60,
  },
  mainContainer: {
		flexDirection: 'column',
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
	modalContainer: {
		backgroundColor: '#FFF',
		flex: 1
  },
  containerContent: {
		paddingTop: 40,
		padding: 20,
		flexDirection: 'row',
		alignItems: 'center',
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
};


class ProductCard extends Component {
  renderImage() {
    return (
      <View style={style.imgContainer}>
        <Image
          source={{uri: this.props.item.image_url}}
          resizeMode="cover"
          style={style.images}
        />
      </View>
    );
  }

  renderImageByName(image) {
    return (
      <View style={style.imgContainer}>
        <Image
          source={{uri: image}}
          resizeMode="cover"
          style={{width: "100%", height: 200, backgroundColor: '#e1e4e8'}}
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
					<View style={style.modalContainer}>
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
            <View>
              {this.renderImageByName(this.props.item.image_url)}
            {/* <Image source={{uri: this.props.item.image}} style={{top:2, width: "100%", height: 200, backgroundColor: '#e1e4e8'}}/> */}
            </View>
            <ScrollView>
            <View style={[style.containerContent, {justifyContent: 'center'}]}>
							<Text style={style.titleContent}>
              {this.props.item.name}
							</Text>
						</View>
            <View style={{borderBottomWidth: 1, borderBottomColor: '#ccc'}}></View>
            <View style={style.containerContent}>
							<Text style={style.textContent}>
							{this.props.item.desc}
							</Text>
						</View>
            <View style={{borderBottomWidth: 1, borderBottomColor: '#ccc'}}></View>
						<View style={style.containerContent}>
							<Text style={style.textContent}>
							{this.props.item.name} mempunyai nilai {this.props.item.value.toString()} dalam perhitungan Jawa.
							</Text>
						</View>
            <View style={style.containerContent}>
              </View>
            </ScrollView>
            
            
            
					</View>
				</Modal>

        <View style={style.containerBg}>
        {this.renderImage()}
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text
              style={style.productName}
              numberOfLines={2}
              ellipsizeMode="tail">
              {this.props.item.name}
            </Text>
              <Button onPress={() => {
                this.setModalVisible(true);
                }}
                style={[style.button, {alignItems: 'flex-end'}]}>
              <Text style={{fontSize: 20}}>Detail</Text>
              </Button>
          </View>
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ProductCard;
