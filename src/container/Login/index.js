import React, { useState, useContext } from 'react';
import {View, Text, StyleSheet, Keyboard, KeyboardAvoidingView} from 'react-native';

import {Button, InputName, InputPassword, Logo} from '../../components/index';
import {LoginRequest} from '../../network/index';
import {Store} from '../../context/store';
import {LOADING_START, LOADING_STOP} from '../../context/actions/type';
import {setAsyncStorage,keys} from '../../asyncStorage/index';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from 'firebase';

const Login = ({navigation}) => {

    const {loaderValue} = useContext(Store);
    const { dispatchLoaderAction } = loaderValue;
    const [account,setAccount] = useState({
        email: "",
        password: ""
    })

    const {email,password} = account;

    const setInitialState = () => {
        setAccount({ email: "", password: "" });
      };

      const handleOnChange = (name,value) => {
          setAccount({
            ...account,
            [name]: value
          })

      }
      
    const onLoginPress = () => {
        Keyboard.dismiss
        if(!email) {
            alert("email is require")
        }
        else if (!password) {
            alert("password id require")
        }
        else {
            dispatchLoaderAction({
                type: LOADING_START,
            })
            LoginRequest(email,password)
            .then( (res) => {
                if(!res.additionalUserInfo) {
                    dispatchLoaderAction({
                        type: LOADING_STOP,
                    })
                    alert(res)
                    return;
                }

                console.log("--------new user login-------------", res)

                //let curr = auth().currentUser;
                //console.log("currrrrrrrr had just login====", curr)
                
                setAsyncStorage(keys.uuid, res.user.uid)
            })
            .then(() => {
                dispatchLoaderAction({
                    type: LOADING_STOP,
                })
                setInitialState();
                navigation.replace("Dashboard")
            })
            .catch((err) => {
                dispatchLoaderAction({
                    type: LOADING_STOP,
                })
                console.log(err)
            })
            
        }
        
            
    }

    return (
        <KeyboardAvoidingView>
            <SafeAreaView>
                <View style={styles.container}>
                    <Logo width={140} height={230}  />
                    <InputName placeholder='Email' onChangeText={(text) => handleOnChange("email",text)}/>
                    <InputPassword placeholder='Password' onChangeText={(text) => handleOnChange("password",text)}/>
                    <Button title="Login" onPress={() => {onLoginPress()}} />
                    <Button title='SIGN UP' onPress={() => {navigation.navigate('SignUp')}} />
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )

}

export default Login;

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})