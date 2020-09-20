import React,{useContext, useEffect,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Store} from '../../context/store/index';

const Profile = () => {
    const {UserValue} = useContext(Store);
    const {CurrentUser} = UserValue;
    const {currUser} = CurrentUser;
    console.log(currUser);

    return (
        <View>
            <Text>
                name : {currUser.name}
                id : {currUser.id}
            </Text>
        </View>
    )
}

export default Profile;