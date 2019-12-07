
import React from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { View } from 'react-native';
import shimmerStyles from './shimmer.styles';

export const ShimmerList = () => {
    const avatarLoadingAnimated = [];
    return (
        <View style={shimmerStyles.containerList}>
            <View style={[shimmerStyles.contentImage]}>
                <ShimmerPlaceHolder
                    ref={(ref) => avatarLoadingAnimated.push(ref)}
                    width={120}
                    height={120}
                    style={{ }}
                    autoRun={true}
                />
            </View>
            <View style={[shimmerStyles.contentText]}>
                <ShimmerPlaceHolder
                    ref={(ref) => avatarLoadingAnimated.push(ref)}
                    height={10}
                    style={{ width: '100%', marginBottom: 10 }}
                    autoRun={true}
                />
                <ShimmerPlaceHolder
                    ref={(ref) => avatarLoadingAnimated.push(ref)}
                    height={10}
                    style={{ width: '100%', marginBottom: 10 }}
                    autoRun={true}
                />
                <ShimmerPlaceHolder
                    ref={(ref) => avatarLoadingAnimated.push(ref)}
                    height={10}
                    style={{ width: '100%', marginBottom: 10 }}
                    autoRun={true}
                />
                <ShimmerPlaceHolder
                    ref={(ref) => avatarLoadingAnimated.push(ref)}
                    height={10}
                    style={{ width: '100%', marginBottom: 10 }}
                    autoRun={true}
                />
                <ShimmerPlaceHolder
                    ref={(ref) => avatarLoadingAnimated.push(ref)}
                    height={10}
                    style={{ width: '100%', marginBottom: 10 }}
                    autoRun={true}
                />
            </View>
        </View>
	);
};
