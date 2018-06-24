import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'

const RootStack = StackNavigator({
    Home: {
        screen: HomeScreen
    }
});

export default RootStack