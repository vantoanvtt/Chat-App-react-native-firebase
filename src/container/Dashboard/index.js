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

const Tabs = createBottomTabNavigator();

const Dashboard = ({route}) => {
    const {loaderValue, UserValue} = useContext(Store)
    const {dispatchLoaderAction} = loaderValue;
    const {dispatchCurrentUser} = UserValue;

    useEffect(() => {
        dispatchLoaderAction({
            type: LOADING_START
        })
        try {
            database()
            .ref("users")
            .on("value", (dataSnapshot) => {
                let users = []
                let currentUser = {
                    id: "",
                    name: "",
                    profileImg: ""
                }
                dataSnapshot.forEach((element) => {
                    if(route.uuid == element.val().uuid) {
                        currentUser.id = element.val().uuid
                        currentUser.name = element.val().name
                        currentUser.profileImg = element.val().profileImg
                    } else {
                        users.push({
                            id: element.val().uuid,
                            name: element.val().name,
                            profileImg: element.val().profileImg
                        })
                    }
                });

                /* dispatchCurrentUser({
                    type: USER_LOGIN,
                    payload: currentUser
                })
                console.log("user" + currentUser);
                dispatchCurrentUser({
                    type: FETCH_FRIENDS_REQUEST,
                    payload: users
                }) */
                dispatchLoaderAction({
                    type: LOADING_STOP
                })
            })
        } catch (err){
            console.log(err)
            dispatchLoaderAction({
                type: LOADING_STOP,
              });
        }
    })


    return (
        <Tabs.Navigator
            screenOptions = {({route}) =>  ({
                tabBarIcon: () => {
                    switch(route.name) {
                        case "chat": {
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
                activeTintColor: '#085dd4',
                inactiveTintColor: '#59554a',
                showIcon: true,
                showLabel: false
              }} 
            
        >
            <Tabs.Screen name="Chat" component={Chat} />
            <Tabs.Screen name="Group" component={Group} />
            <Tabs.Screen name="News" component={News} />
            <Tabs.Screen name="Profile" component={Profile} />
        </Tabs.Navigator>
    )

}

export default Dashboard;