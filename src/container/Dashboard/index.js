import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Chat from './Chat';
import Group from './Group';
import News from './News';
import Profile from './Profile';

import {LOADING_START, LOADING_STOP, USER_LOGIN, FETCH_FRIENDS_REQUEST} from '../../context/actions/type';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Store} from '../../context/store/index';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';

const Tabs = createBottomTabNavigator();

const Dashboard = ({route}) => {
    const {loaderValue, UserValue} = useContext(Store)
    const {dispatchLoaderAction} = loaderValue;
    const {dispatchCurrentUser} = UserValue;

    const currentUser = auth().currentUser;
    //console.log('----------- currentUser -----------', currentUser);
    
    useEffect(() => {
        dispatchLoaderAction({
            type: LOADING_START
        })
        try {
            database()
            .ref('users/'+ currentUser.uid)
            .once('value')
            .then(snapshot1 => {
                console.log('currUser data dashboard: ', snapshot1.val());
                let currentUserdt = snapshot1.val();
                dispatchCurrentUser({
                    type: USER_LOGIN,
                    payload: currentUserdt
                })
            }).then(() => {
                database()
                .ref("users")
                .orderByKey()
                .limitToFirst(10)
                .once('value')
                .then((snapshot) => {
                    ///console.log('----------------- vvvvv ------------------', snapshot.val());
                    const users = Object.values(snapshot.val());

                    dispatchCurrentUser({
                        type: FETCH_FRIENDS_REQUEST,
                        payload: users
                    })
                    dispatchLoaderAction({
                        type: LOADING_STOP
                    })
                })
            })

            
        } catch (err){
            console.log('------ error -----', err)
            dispatchLoaderAction({
                type: LOADING_STOP,
              });
        }
    }, []);


    return (
        <Tabs.Navigator
            screenOptions = {({route}) =>  ({
                tabBarIcon: () => {
                    switch(route.name) {
                        case "Chat": {
                            return <Icon name="wechat" size={30} color="#a7b1c2" /> ;
                        }
                        case "Group": {
                            return <Icon name="group" size={30} color="#a7b1c2" /> ;
                        }
                        case "News": {
                            return <Icon name="list-alt" size={30} color="#a7b1c2" /> ;;
                        }
                        case "Profile": {
                            return <Icon name="user" size={30} color="#a7b1c2" /> ;;
                        }
                    }
                }
            })}

            tabBarOptions={{
                activeTintColor: '#383ca6',
                inactiveTintColor: '#59554a',
                showIcon: true,
                showLabel: false
              }} 
            
        >
            
            
            <Tabs.Screen name="Group" component={Group} />
            <Tabs.Screen name="News" component={News} />
            <Tabs.Screen name="Profile" component={Profile} />
            <Tabs.Screen name="Chat" component={Chat} />
            
            
        </Tabs.Navigator>
    )

}
//

export default Dashboard;

/*
    Nhiều bug quá -_-
*/