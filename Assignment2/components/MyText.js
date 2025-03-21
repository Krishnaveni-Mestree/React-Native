import React from 'react';
import {Text, Alert, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 20,
  },
});

const MyText = props => {
  const handlePress = () => {
    Alert.alert('You just pressed the text component');
  };

  return (
    <Text style={styles.text} onPress={handlePress}>
      Hello, {props.name}
    </Text>
  );
};

export default MyText;
