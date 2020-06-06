import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Points from './pages/Points';
import Detail from './pages/Detail';

const AppStack = createStackNavigator();

const Routes =() => {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen nome="Home" component={Home} />
                <AppStack.Screen nome="Points" component={Points} />
                <AppStack.Screen nome="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default const Routes =() => {
    ;