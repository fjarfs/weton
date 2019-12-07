import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button } from '@partials';

const styles = {
	container: {
        backgroundColor: '#fff', flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',  
        paddingBottom: 150
	},
};

class DataNotFound extends Component {
	render() {
		return (
			<View style={styles.container}>
                <View>
                <Icon
                    name='search'
                    size={90}
                    color='#000'
                />
                </View>
                <View>
                <Text style={{fontSize: 30}}>
                    Data tidak ditemukan
                </Text>
                </View>
                <View style={{padding: 20}}>
                <Button
                    onPress={this.props.onPress}
                    children="Muat ulang"
              />
                </View>
              </View>
		);
	}
}

export default DataNotFound;
