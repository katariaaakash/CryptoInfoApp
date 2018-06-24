import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import api from './api'

export default class CoinComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSourceAllCoins: [],
            numCoins: -1
        };
    }
    renderFlatListItem(item) {
        return (
            <TouchableOpacity
                onPress={() => this.listItemClicked(item)} >
                <Text> {item.symbol} </Text>
            </TouchableOpacity>
        )
    }
    componentWillMount() {
        console.log("CoinComponent componentWillMountCalled")
        if(this.state.numCoins == -1){
            api.getTopCoins().then((res) => {
                let jsonblobarray = [];
                console.log(res);
                for (var i = 0; i < 50; i++) {
                    jsonblobarray.push(res[i + ""])
                }
                dataSourceAllCoins = jsonblobarray;
            })
        }
        else{

        }
    }
    render() {
        return (
            <FlatList
                data={this.state.dataSourceAllCoins}
                renderItem={({ item }) => this.renderFlatListItem(item)} >
            </FlatList>
        )
    }
}