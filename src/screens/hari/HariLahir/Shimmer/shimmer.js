import React from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { View } from 'react-native';
import shimmerStyles from './shimmer.styles';
import { ShimmerNewsList } from './shimmerlist';

export const ShimmerHariLahir = () => {
    const avatarLoadingAnimated = [];
    return (
        <View>
            <ShimmerNewsList />
            <ShimmerNewsList />
            <ShimmerNewsList />
            <ShimmerNewsList />
            <ShimmerNewsList />
            <ShimmerNewsList />
        </View>
	);
};
