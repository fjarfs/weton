import React from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { View } from 'react-native';
import shimmerStyles from './shimmer.styles';

export const ShimmerHariPasaranJawaList = () => {
    const avatarLoadingAnimated = [];
    return (
        <View>
            <View style={{ flexDirection: 'row' , marginTop: 10, }}>
            </View>
            <View style={{ 
                flexDirection: 'row', 
                justifyContent: 'space-between',
                // paddingBottom: 10,
                borderBottomWidth: 1,
                borderColor: 'rgba(154, 154, 154, 0.29)',
            }}>
                
                <View style={[shimmerStyles.btnMenuLeft]}>
                    <ShimmerPlaceHolder
                        ref={(ref) => avatarLoadingAnimated.push(ref)}
                        height={10}
                        style={{ width: '100%', marginBottom: 10 }}
                        autoRun={true}
                    />
                </View>
                <View style={[shimmerStyles.btnMenuRight]}>
                    <ShimmerPlaceHolder
                        ref={(ref) => avatarLoadingAnimated.push(ref)}
                        width={30}
                        height={20}
                        style={{ borderRadius: 50 }}
                        autoRun={true}
                    />
                </View>
            </View>
        </View>
	);
};
