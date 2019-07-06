import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ProductDelete extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'dodgerblue',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 22,
                        color: 'white'
                    }}
                > Product Delete </Text>
            </View>
        )
    }
}