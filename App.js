import React, {Component} from 'react'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
// import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'


import MainProduct from './src/Products/Components/MainProduct'
import ProductCreate from './src/Products/Components/ProductCreate'
import ProductUpdate from './src/Products/Components/ProductUpdate'
import ProductDelete from './src/Products/Components/ProductDelete'
import ProductRead from './src/Products/Components/ProductRead'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fontLoading: false
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
    });

    this.setState({
      fontLoading: true
    });
  }


  render() {

    const {fontLoading} = this.state

    if (!fontLoading) {
      return (
        <AppLoading />
      );
    }

    return (
      <AppContainer />
    );
  }
}


const AppNavigator = createStackNavigator({

    mainScreen: {
      screen: MainProduct,
      navigationOptions: {
        title: "Main App"
      }
    },
    addScreen: {
      screen: ProductCreate,
      navigationOptions: {
        title: "Add Product"
      }
    },
    secondScreen: {
      screen: ProductRead,
      navigationOptions: {
        title: "Read Product"
      }
    },
    thirdScreen: {
      screen: ProductDelete,
      navigationOptions: {
        title: "Delete Product"
      }
    },
    fourthScreen: {
      screen: ProductUpdate,
         navigationOptions: {
          title: "Update Product"
        }
    }

  // {
  //   initialRouteName: "ProductCreate",
  // }
})


const AppContainer = createAppContainer(AppNavigator)