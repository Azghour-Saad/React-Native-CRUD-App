import React, { Component } from 'react'
import ImagePicker from 'react-native-image-picker'
import { View , Image} from 'react-native'
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Textarea,
  List,
  ListItem,
  Text,
  Button
} from 'native-base'



export default class ProductCreate extends Component {

    state = {
      product: {
        name: '',
        description: '',
        image: null,
        // image: 'http://lorempixel.com/640/480',   // just for test
        categorie: '',
        quantity: ''
    }
  }



  render() {

    const { product } = this.state

    // when i start working on the backend stuff, here we just passing data as a props
    // const { onPressAdd } = this.props.navigation.state

    return (
      <Container>
        <Content padder>
          <Form>
            <Item style={{marginBottom: 6}} floatingLabel bordered>
              <Label>Enter Product Name</Label>
              <Input
                style={{fontSize: 16}}
                onChangeText = {name => this.setState({name}
                  // Object.assign(product, {name: name})
                )}
              />
            </Item>
            <Item style={{marginBottom: 4}}>
              <Textarea
                bordered
                placeholder="Enter Description"
                style={{flex: 1, fontSize: 16}}
                rowSpan={6}
                onChangeText = {description => this.setState({description})}
              />
            </Item>

            <List>
              <ListItem itemHeader first>
                <Text>Categories A</Text>
              </ListItem>
              <ListItem >
                <Text>Name Of Categorie</Text>
              </ListItem>
              <ListItem >
                <Text>Image Of Categorie</Text>
              </ListItem>
            </List>

            <Item style={{marginBottom: 6}} floatingLabel bordered>
              <Label>Enter Quantity Number</Label>
              <Input
                style={{fontSize: 16}}
                onChangeText = {quantity => this.setState({quantity})}
              />
            </Item>
          </Form>
        </Content>
        <Button
          block
          onPress = { ()  => console.log(product)}    // data saved successfully
        >
          <Text style={{fontSize: 20, color: 'white'}}>Save</Text>
        </Button>
      </Container>
    )
  }
}