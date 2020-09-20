
import {View, Text, StyleSheet} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {Dashboard,Login,SignUp} from '../container/index';

const Stack =createStackNavigator();

const NavContainer = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Login"

                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavContainer;

//

//