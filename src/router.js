/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Scene, Router, Stack, Actions} from 'react-native-router-flux';
import {MainComponent} from '@screens';
import {ToastAndroid} from 'react-native';

const ANDROID_TIME_INTERVAL_BACK_BUTTON = 2000;
let BACK_BUTTON_PRESSED_ONCE_TO_EXIT = false;

class routerComponent extends Component {
    onBackPress() {
        BACK_BUTTON_PRESSED_ONCE_TO_EXIT = true;
        ToastAndroid.show('Tekan sekali lagi untuk keluar', ToastAndroid.SHORT);
    
        setTimeout(() => {
        BACK_BUTTON_PRESSED_ONCE_TO_EXIT = false;
        }, ANDROID_TIME_INTERVAL_BACK_BUTTON);
    
        return true;
    }

    render() {
        return (
            <Router backAndroidHandler={this.onBackPress} scheme="weton">
            <Stack key="root">
                <Scene
                key="Main"
                component={MainComponent}
                hideNavBar
                type="reset"
                />
            </Stack>
            </Router>
        );
    }
};

export default routerComponent;
