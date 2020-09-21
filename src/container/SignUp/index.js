import React, { useContext, useState } from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {Button, InputName, InputPassword, Logo} from '../../components/index';
import {SignUpRequest, AddUser} from '../../network/index';
import auth from '@react-native-firebase/auth';
import {Store} from '../../context/store';
import {LOADING_START, LOADING_STOP} from '../../context/actions/type'; 
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = ({navigation}) => {
    const {loaderValue} = useContext(Store);
    const {dispatchLoaderAction} = loaderValue;

    const [account, setAccount] =  useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const {name, email, password, confirmPassword} = account;

    const handOnChange = (name,value) => {
        setAccount({
            ...account,
            [name]: value
        })
    }

    const onSignUpPress = () => {
        if(!name) {
            alert("name is require")
        }
        else if (!email) {
            alert("email is require")
        }
        else if (!password) {
            alert("password id require")
        }
        else if (password != confirmPassword) {
            alert("password id not match")
        } 
        else {
            dispatchLoaderAction({
                type: LOADING_START
            })

            // Tạo tài khoản mới thì lấy đâu ra uid ???
            // uid là tự động -> không được truyền lên.
            // let uid = auth().currentUser.uid;


            SignUpRequest(email,password)
            .then( (res) => {
                if (!res.additionalUserInfo) {
                    dispatchLoaderAction({
                      type: LOADING_STOP,
                    });
                    alert(res);
                    return;
                  }
                AddUser(name, email) 
                dispatchLoaderAction({
                    type: LOADING_STOP
                })
                navigation.replace("Dashboard")
            })
           
        }
    }

    return (
        <KeyboardAvoidingView>
            <SafeAreaView>
                <View style={styles.container}>
                    <Logo width={140} height={230}  />
                    <InputName placeholder='Name' onChangeText={(text) => handOnChange("name",text)} />
                    <InputName placeholder='Enter Email' onChangeText={(text) => handOnChange("email",text)} />
                    <InputPassword placeholder='Password' onChangeText={(text) => handOnChange("password",text)} />
                    <InputPassword placeholder='Confirm Password' onChangeText={(text) => handOnChange("confirmPassword",text)} />
                    <Button title='SIGN UP' onPress={() => onSignUpPress()} />
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>

        
    )

}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})