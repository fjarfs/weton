import React, { Component } from 'react';
import { Text, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

class Button extends Component {
	renderIcon() {
		if (this.props.icon) {
			return <Icon name={this.props.icon} size={this.props.iconSize} color={this.props.iconColor} />;
		}
		else if (this.props.withImage) {
			return <Image source={this.props.withImage} style={this.props.imageStyle} />;
		}
	}

	renderLoader() {
		if (this.props.loader) {
			return <ActivityIndicator size="large" color={this.props.loaderColor ? this.props.loaderColor : '#FFF'} />;
		}
	}

	render() {
		return (
			<TouchableOpacity
				onPress={this.props.onPress}
				style={[styles.buttonStyle, this.props.style]}
				disabled={this.props.loader}
				testId={this.props.testId}
				accessible={true}
				accessibilityLabel={this.props.accessibilityLabel}
			>
				{this.renderIcon()}
				{this.renderLoader()}
				<Text style={[styles.textStyle, this.props.textStyle]}>{this.props.loader ? null : this.props.children}</Text>
			</TouchableOpacity>
		);
	}
}

export default Button;
