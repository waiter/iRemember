import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text>TEST</Text>
      </TouchableOpacity>
    );
  }
}
