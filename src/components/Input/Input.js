import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const Input = (props) => {
    return (
        <View style={styles.container}>
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

export default Input;

const styles = StyleSheet.create({
    container: {
        width: '85%',
        padding: 10
    },
    Input: {
        height: 40,
        borderWidth: 2,
        borderColor: '#e8debc',
        width: "100%",
        borderRadius: 5
    }
})