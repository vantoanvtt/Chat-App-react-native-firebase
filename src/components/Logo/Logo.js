import React from 'react';
import {View, Image} from 'react-native';

const Logo = (props) => {
    return (
        <View style={{paddingBottom: 20}}>
            <Image source={require('../../utility/image/chatAppLogo.png')}  style={{width: props.width, height: props.height}} />
        </View>
    )
}

export default Logo;