import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Button from 'react-native-button'
import {
    addScreen,
    secondScreen,
    thirdScreen,
    fourthScreen,
} from '../../../screenName'



export class MainProduct extends Component {
    render() {

        const {navigation} = this.props

        return (
            <View style={styles.container}>
                <Button
                    containerStyle={{
                        padding: 10,
                        margin: 20,
                        width: 200,
                        // height: 45,
                        borderRadius: 10,
                        backgroundColor: 'darkviolet'
                    }}
                    style={{
                        fontSize: 18,
                        color: 'white'

                    }}
                    onPress = { () => navigation.navigate(addScreen) }
                >
                    Go, Add Product
                </Button>
                <Button
                    containerStyle={{
                        padding: 10,
                        margin: 20,
                        width: 200,
                        borderRadius: 10,
                        backgroundColor: 'darkviolet'
                    }}
                    style={{
                        fontSize: 18,
                        color: 'white'

                    }}
                    onPress = { () => navigation.navigate(fourthScreen) }
                >
                    Go, Update Product
                </Button>
                <Button
                    containerStyle={{
                        padding: 10,
                        margin: 20,
                        width: 200,
                        borderRadius: 10,
                        backgroundColor: 'darkviolet'
                    }}
                    style={{
                        fontSize: 18,
                        color: 'white'

                    }}
                    onPress = { () => navigation.navigate(secondScreen) }
                >
                    Go, Read Product
                </Button>
                <Button
                    containerStyle={{
                        padding: 10,
                        margin: 20,
                        width: 200,
                        borderRadius: 10,
                        backgroundColor: 'darkviolet'
                    }}
                    style={{
                        fontSize: 18,
                        color: 'white'

                    }}
                    onPress = { () => navigation.navigate(thirdScreen) }
                >
                    Go, Delete Product
                </Button>
            </View>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default MainProduct
