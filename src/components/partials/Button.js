import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const styles = {
	buttonStyle: {
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: '#D81B60',
		justifyContent: 'center',
		borderRadius: 6,
		height: 50,
		margin: 10
	},
	buttonStyleDisable: {
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: '#D81B60',
		justifyContent: 'center',
		borderRadius: 6,
		height: 50,
		margin: 10
	},
	textStyle: {
		alignSelf: 'center',
		color: '#fff',
        fontSize: 14,
        padding: 10
	}
};

class Button extends Component {
	render() {
		return (
			<TouchableOpacity
				accessible={this.props.accessible ? this.props.accessible : false}
				accessibilityLabel={this.props.accessibilityLabel ? this.props.accessibilityLabel : `button${this.props.children}Label`}
				testID={this.props.testID ? this.props.testID : `input${this.props.testID}`}
				onPress={this.props.onPress}
				style={[this.props.canSubmit ? ( this.props.canSubmit['disable'] === false ? styles.buttonStyle : styles.buttonStyleDisable) : styles.buttonStyle, this.props.style] }
				disabled={this.props.canSubmit ? this.props.canSubmit['disable'] : false}
			>
				<Text style={[styles.textStyle, this.props.textStyle]}>{this.props.children}</Text>
			</TouchableOpacity>
		);
	}
}

export default Button;
