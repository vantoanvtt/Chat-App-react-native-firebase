import { useLinkProps } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const InputPassword = (props) => {
    const [passwordSecured, setPasswordSecured] = useState(true);
    return (
        <View style={styles.container}>
            <Icon color='#333' name='lock' type='font-awesome' size={20} />
            <TextInput 
                style={{flex: 1, paddingHorizontal: 12}}
                secureTextEntry={passwordSecured}
                placeholder={props.placeholder}
                textContentType='password'
                onChangeText={props.onChangeText}
            />

            <TouchableOpacity
                style={{padding: 4}}
                onPress={() => {
                    setPasswordSecured(!passwordSecured)
                }}
            >
                <Icon color='#333' name='eye' type='font-awesome-5' size={20} />
            </TouchableOpacity>
        </View>
    )
}

export default InputPassword;
const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 44,
        backgroundColor: '#cedbce',
        borderRadius: 8,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: "center"
    },
})