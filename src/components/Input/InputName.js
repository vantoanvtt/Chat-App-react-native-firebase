import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';

const InputName = (props) => {
    return (
        <View style={styles.container}>
            <Icon 
                color='#333'
                name='user'
                type='font-awesome'
                size={20}
            />
            <TextInput 
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                style={styles.Input}
                value={props.value}
                keyboardType={props.type}
                returnKeyType={"next"}
            />
        </View>
    )
}

export default InputName;

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 44,
        backgroundColor: '#cedbce',
        borderRadius: 8,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 10,
    },
    Input: {
        flex: 1,
        paddingHorizontal: 12
    }
})