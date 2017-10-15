/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class item extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.InsuranceView}>
        <Text style={styles.insuranceText} >Insurance Details</Text>
        <Text style={styles.insuranceText} >Date:{this.props.val.date}</Text>
        <Text style={styles.insuranceText} >Title:{this.props.val.title}</Text>
        <Text style={styles.insuranceText} >Yearly premuim:{this.props.val.cost} CHF</Text>
        <Text style={styles.insuranceText} >{this.props.val.catagory}</Text>
        <TouchableOpacity onPress={this.props.deleteInsurance} style={styles.insuranceDelete} >
          <Text style={styles.insuranceDeleteText} >X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  InsuranceView: {
    position:'relative',
    padding:20,
    paddingRight:100,
    borderBottomWidth:2,
    borderBottomColor:'#2980b9',
  },
  insuranceText:{
    paddingLeft:60,
    borderLeftWidth:10,
    color : '#000000',
    borderLeftColor:'#2980b9',
  },
  insuranceDelete:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#c0392b',
        padding:10,
        top:10,
        bottom:10,
        right:10,
  },
  insuranceDeleteText:{
    color:'#fff',
  }
});
