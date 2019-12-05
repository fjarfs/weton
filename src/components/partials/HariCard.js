import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  Picker,
  TouchableOpacity,
  TextInput,
} from 'react-native';

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
};

const select = {
  containerStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ECECEC',
    color: '#000',
    backgroundColor: '#FFF',
    padding: 4,
    paddingHorizontal: 4,
    fontSize: 12,
    textAlign: 'left',
    flex: 1,
    marginBottom: 10,
    height: 25,
  },
  inputStyle: {
    width: '100%',
    height: 20,
  },
  baseStyle: {
    flexDirection: 'column',
    width: '100%',
    padding: 10,
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

  render() {
    return (
      <View style={style.container}>
          <TouchableOpacity >
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
