import React from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { View } from 'react-native';
import shimmerStyles from './shimmer.styles';
import { ShimmerList } from './shimmerlist';

export const ShimmerHariPasaranJawa = () => {
    const avatarLoadingAnimated = [];
    return (
        <View>
            <ShimmerList />
            <ShimmerList />
            <ShimmerList />
            <ShimmerList />
            <ShimmerList />
            <ShimmerList />
        </View>
	);
};
