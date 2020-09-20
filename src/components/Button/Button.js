import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{width: '50%', paddingVertical: 10}}
        >
            <View style={styles.container}>
                <Text style={styles.title}> {props.title} </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: "#49bf7c",
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        borderRadius: 8,
    },
    title: {
        color: '#dfede5',
        fontSize: 14,
    }
})