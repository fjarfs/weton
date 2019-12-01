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
import {CustomNavBar} from '@partials';

const ANDROID_TIME_INTERVAL_BACK_BUTTON = 2000;
let BACK_BUTTON_PRESSED_ONCE_TO_EXIT = false;

class routerComponent extends Component {

    onBackPress() {
    if (Actions.state.index === 0) {
        if (BACK_BUTTON_PRESSED_ONCE_TO_EXIT) {
        // Actions.root({type: ActionConst.RESET});
        return false;
        }

        BACK_BUTTON_PRESSED_ONCE_TO_EXIT = true;
        ToastAndroid.show('Tekan sekali lagi untuk keluar', ToastAndroid.SHORT);

        setTimeout(() => {
        BACK_BUTTON_PRESSED_ONCE_TO_EXIT = false;
        }, ANDROID_TIME_INTERVAL_BACK_BUTTON);

        return true;
    }
    Actions.pop();
    return true;
    }

    render() {
        return (
            // <Router backAndroidHandler={this.onBackPress} scheme="weton">
            // <Stack key="root" navBar={CustomNavBar}>
            //     <Scene
            //     key="Main"
            //     component={MainComponent}
            //     hideNavBar
            //     type="reset"
            //     />
            // </Stack>
            // </Router>
            <Router backAndroidHandler={this.onBackPress} scheme="weton">
            <Scene key="root" navBar={CustomNavBar} >
                <Scene key="main"
                component={MainComponent}
                // title="Weton"
                initial
                />
            </Scene>
            </Router>
        );
    }
};

export default routerComponent;
