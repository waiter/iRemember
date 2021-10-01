import { Text } from 'react-native'
import NavigationBar from 'react-native-navbar'
import React from 'react';
import Scene from './scenes';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Main extends React.Component {
  render() {
    return (
      <NavigationBar
        title={{ title: 'Title', tintColor: 'black', }}
        leftButton={{title: <Text>xxx<Icon name="plus"></Icon></Text>}}
        rightButton={{ title: 'Forward', }}
        style={{ backgroundColor: "white", }}
        statusBar={{ tintColor: "white", }}
      />
    );
  }
}
