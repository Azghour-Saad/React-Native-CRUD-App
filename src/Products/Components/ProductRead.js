import React, { Component } from 'react'
// import { Text, View } from 'react-native'
import {
  Container,
  Content,
  Thumbnail,
  Card,
  CardItem,
  Body,
  Text,
} from 'native-base'


export default class ProductRead extends Component {

    render() {

    // const {
    //     name,
    //     description,
    //     image,
    //     categorie,
    //     quantity,
    // } = this.props


    // working with fake Data
    return (
        <Container>
            <Content padder>

                {/* <Thumbnail
                    style={{
                        flex: 1,
                        height: 300,
                        width: null
                    }}
                    // source={{  }}
                /> */}

                <Card Shadow style={{ borderTopWidth: 4, borderRadius: 30, borderBottomWidth: 4 }}>
                    <CardItem>
                        <Text style={{ fontSize: 25, alignItems: 'center', justifyContent: 'center'}}>name of Product 1</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={{ fontSize: 20 }}>description of product--description of product--description of product--description of product--description of product--description of product</Text>
                        </Body>
                    </CardItem>
                    <CardItem
                        footer
                        style={{
                            flexDirection: 'row', justifyContent: 'space-between'
                        }}
                        >
                        <Text style={{ fontSize: 20 }}>Categorie A</Text>
                        <Text style={{ fontSize: 20 }}>Quantity</Text>
                    </CardItem>
                </Card>
            </Content>
       </Container>
    )
   }
}