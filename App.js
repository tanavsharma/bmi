/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import type {Node} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
}from 'react-native'

class Inputs extends Component{

  render() {
    return (
      <View style = {styles.container}>

      <Text style = {styles.title}>BMI Calculator</Text>

      </View>
    )
  }



}
export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 30,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  }
})
