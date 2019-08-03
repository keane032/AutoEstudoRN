import React from 'react';
import { View, Button, Text } from 'react-native';

class Details extends React.Component {
  render(){

    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return(
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>About</Text>
    <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
  </View>
    )
  }
}

Details.navigationOptions = {
  title: 'About',
}


export default Details;