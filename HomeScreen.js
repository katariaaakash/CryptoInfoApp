import React from 'react'
import { StyleSheet, View } from 'react-native'
import CoinComponent from './CoinComponent'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: "Coins"
    }
    componentWillMount(){
        console.log("In HomeScreen componentWillMount ");
    }
    render() {
        return (
            <View>
                <CoinComponent />
            </View>
        )
    }
}