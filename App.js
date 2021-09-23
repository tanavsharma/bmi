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

import DropDownPicker from 'react-native-dropdown-picker';

class Inputs extends Component{
  state = {
    height: '',
    weight: '',
    bmi: '',
    bmiResult: '',
    heightOpen: false,
    heightValue: null,
    heightItems: [
      {label: 'CMS', value: 'CMS'},
      {label: 'FT', value: 'FT'}
    ],
    weightOpen: false,
    weightValue: null,
    weightItems: [
      {label: 'KG', value: 'KG'},
      {label: 'LBS', value: 'LBS'}
    ]
  };

  setWeightOpen = (weightOpen) => {
    this.setState({weightOpen, heightOpen:false});
  }

  setWeightValue = (callback) => {
    this.setState(state => ({weightValue: callback(state.weightValue)}));
  }

  setWeightItems = (callback) => {
    this.setState(state => ({weightItems: callback(state.weightItems)}));
  }

  setHeightOpen = (heightOpen) => {
    this.setState({heightOpen,weightOpen: false});
  }

  setHeightValue = (callback) => {
    this.setState(state => ({heightValue: callback(state.heightValue)}));
  }

  setHeightItems = (callback) => {
    this.setState(state => ({heightItems: callback(state.heightItems)}));
  }

  handleHeight = (text) => {
    this.setState({height: text})
  }

  handleWeight = (text) => {
    this.setState({weight: text})
  }

  calculate = (height, weight) => {

    if(this.state.heightValue == 'CMS'){
      var convHeight = height/100;
      
    }else if(this.state.heightValue == 'FT'){
      var convHeight = height/3.281      
    }else{
      alert("Please pick either CMS or FT as your height.");
    }

    if(this.state.weightValue == 'KG'){
      var convWeight = weight;
    }else if(this.state.weightValue == 'LBS'){
      var convWeight = weight/2.205;
    }else{
      alert("Please pick either KG or LBS as your weight.");
    }

 


    var result = (parseFloat(weight))/(parseFloat(convHeight)*parseFloat(convHeight));
    result = result.toFixed(2);
    this.setState({bmi: result})
  }

  render() {
    return (
      <View style = {styles.container}>

      <Text style = {styles.title}>BMI Calculator</Text>

      <Text style = {styles.label}>Height</Text>

       <DropDownPicker
              placeholder={'Select Height'}
              open={this.state.heightOpen}
              value={this.state.heightValue}
              style={[styles.drop, {flexDirection: 'row'}]}
              items={this.state.heightItems}
              setOpen={this.setHeightOpen}
              setValue={this.setHeightValue}
              setItems={this.setHeightItems}
            />

      <TextInput
              disabled={ this.state.heightValue == null ? true : false}
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder={this.state.weightValue == null ? "Height " : "Height in "+this.state.heightValue}
              autoCapitalize="none"
              onChangeText={this.handleHeight}
            />

      <Text style = {styles.label}>Weight</Text>


                  <DropDownPicker
              placeholder={'Select Weight'}
              open={this.state.weightOpen}
              value={this.state.weightValue}
              style={[styles.drop, {flexDirection: 'row'}]}
              items={this.state.weightItems}
              setOpen={this.setWeightOpen}
              setValue={this.setWeightValue}
              setItems={this.setWeightItems}
            />

            <TextInput
              disabled={ this.state.weightValue == null ? true : false}
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder={this.state.weightValue == null ? "Weight " : "Weight in "+this.state.weightValue}
              autoCapitalize="none"
              onChangeText={this.handleWeight}
            />

      <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.calculate(this.state.height, this.state.weight)
               }>
               <Text style = {styles.submitButtonText}> Calculate </Text>
      </TouchableOpacity>

      <Text style = {styles.output}>{this.state.bmi}</Text>
      <Text style = {styles.resultText}>{this.state.BmiResult}</Text>
      
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
  },
  label: {
    marginLeft: 15,
  },
  input: {
    margin:15,
    height: 40,
    borderWidth: 1,
    padding:10,
  },
  submitButton:{
    padding: 10,
    margin: 15,
    height: 40,
    backgroundColor: "#FF6677"
  },
  submitButtonText:{
    textAlign: "center",
    color:'white',
    fontSize: 18,
  },
  output:{
    textAlign: "center",
    fontSize: 30,

  },
  drop:{
    width: 360,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 15,
    marginLeft: 15,
    height: 40,
    borderWidth: 1,
    padding: 10,
  }



})