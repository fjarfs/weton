import React, {Component} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import globalStyles from '../../assets/styles/global';
import normalize from '@helpers/NormalizedText';

const styles = {
  containerStyle: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 5,
  },
  inputStyle: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ECECEC',
    color: '#000',
    backgroundColor: '#FFF',
    padding: 16,
    fontSize: normalize(14),
    textAlign: 'left',
    width: '100%',
  },
  limiterStyle: {
    fontSize: normalize(14),
    color: '#000',
    marginTop: 12,
    alignSelf: 'flex-end',
  },
};

class Input extends Component {
  state = {
    passVisible: false,
    secureTextEntry: false,
  };
  componentDidMount() {
    if (this.props.onRef != null) {
      this.props.onRef(this);
    }
    this.setState({
      secureTextEntry:
        (this.props.secureTextEntry && !this.state.passVisible) || false,
    });
  }
  focus() {
    this.textInput.focus();
  }

  visibilityState() {
    if (this.state.passVisible) {
      return 'visibility-off';
    }
    return 'visibility';
  }

  showPassword() {
    this.setState({
      passVisible: !this.state.passVisible,
    });
    setTimeout(() => {
      this.setState({
        secureTextEntry:
          (this.props.secureTextEntry && !this.state.passVisible) || false,
      });
    }, 0);
  }

  renderVisibility() {
    if (this.props.secureTextEntry) {
      return (
        <TouchableOpacity onPress={this.showPassword.bind(this)}>
          <Icon name={this.visibilityState()} size={20} />
        </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <View style={[styles.containerStyle, this.props.flexItem]}>
        {this.props.label ? (
          <Text style={{color: '#b2b2b2', paddingVertical: 5}}>
            {this.props.label}
          </Text>
        ) : null}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            onChangeText={this.props.onChangeText}
            value={this.props.value}
            style={[
              styles.inputStyle,
              this.props.style,
              this.props.multiline
                ? {height: 140, textAlignVertical: 'top'}
                : null,
              this.props.isGrey ? {backgroundColor: '#fafafa'} : null,
            ]}
            autoCorrect={false}
            placeholder={this.props.placeholder}
            secureTextEntry={this.state.secureTextEntry}
            placeholderTextColor={
              this.props.placeholderTextColor
                ? this.props.placeholderTextColor
                : 'rgba(0,0,0,0.6)'
            }
            editable={this.props.editable}
            keyboardType={this.props.keyboardType}
            maxLength={this.props.maxLength}
            onKeyPress={this.props.onKeyPress}
            ref={input => (this.textInput = input)}
            multiline={this.props.multiline}
            numberOfLines={this.props.numberOfLines}
            accessible={this.props.accessible ? this.props.accessible : false}
            accessibilityLabel={
              this.props.accessibilityLabel
                ? this.props.accessibilityLabel
                : `input${this.props.placeholder}Label`
            }
            testID={
              this.props.testID
                ? this.props.testID
                : `input${this.props.testID}`
            }
          />
          {this.renderVisibility()}
        </View>
        {this.props.phoneLabel ? (
          <Text style={[globalStyles.validationText, {color: '#000'}]}>
            Contoh : 832000833
          </Text>
        ) : null}
        {this.props.error ? (
          <Text style={globalStyles.validationText}>{this.props.error}</Text>
        ) : null}
        {this.props.maxLengthDisplay ? (
          <Text style={styles.limiterStyle}>
            {this.props.value ? this.props.value.length : 0} /{' '}
            {this.props.maxLength}
          </Text>
        ) : null}
      </View>
    );
  }
}

export default Input;
