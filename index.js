
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ToastAndroid ,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Note from './item';
import {Dropdown} from 'react-native-material-dropdown'
import api from './api'
class Main extends Component {
  state = {
    dataArray:[],
    title:'',
    cost : '',
    category : ''
  }
  componentWillMount(){
    api.getCat().then((res) => {
        this.setState({
            cat1 : res.query.categorymembers[0].title,
            cat2 : res.query.categorymembers[1].title,
            cat3 : res.query.categorymembers[2].title,
            cat4 : res.query.categorymembers[3].title,
            cat5 : res.query.categorymembers[4].title,
            cat6 : res.query.categorymembers[5].title,
            cat7 : res.query.categorymembers[6].title,
            cat8 : res.query.categorymembers[7].title,
            cat9 : res.query.categorymembers[8].title,
            cat10 : res.query.categorymembers[9].title,
        })
    })
}
  render() {
    let data = [{
      value: this.state.cat1},
    {
      value : this.state.cat2},
    {
      value : this.state.cat3},
    {
      value: this.state.cat4},
    {
      value : this.state.cat5},
    {
      value : this.state.cat6},
    {
      value: this.state.cat7},
    {
      value : this.state.cat8},
    {
      value : this.state.cat9},
    {
      value: this.state.cat10}
  ]

    let notes = this.state.dataArray.map((val,key) => {
      return <Note key={key} keyval={key} val={val} deleteInsurance={() => this.deleteInsurance(key) } />
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headertext} >My Insurance App</Text>
        </View>
        <ScrollView style={styles.ScrollContainer}>
          {notes}
        </ScrollView>
        <View style={styles.footer} >
          <TouchableOpacity onPress={this.addInsurance.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}> Add </Text>
          </TouchableOpacity>
          
          <TextInput style={styles.textinput} onChangeText={(title) => this.setState({title}) }
          value={this.state.title}
          placeholder="title"></TextInput>
          <View style={styles.dropDownStyle}>
          <Dropdown
          style={styles.dropDownItself}
          label = 'insurance category'
          data = {data}
          onChangeText={(category) => this.setState({category})}/>  
         
          </View>
          <TextInput style={styles.textinput}
          onChangeText={(cost) => this.setState({cost}) }
          value={this.state.cost}
          placeholder="yearly preimum"></TextInput>
          
        </View>
      </View>
    );
  }
  addInsurance(){
    if(this.state.title){
      var d = new Date();
      this.state.dataArray.push({'date':d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate(),'title':this.state.title,'cost':this.state.cost,'catagory': this.state.category});
      this.setState({dataArray:this.state.dataArray});
      this.setState({'title':''});
      this.setState({'cost':''});
      this.setState({'catagory':''});
      
    }
  }
  deleteInsurance(key){
    this.state.dataArray.splice(key,1);
    this.setState({dataArray:this.state.dataArray});
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor:'#2980b9',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:10,
    borderBottomColor:'#ddd',
  },
  headertext: {
    color: '#fff',
    fontSize:18,
    padding:20,
  },
  ScrollContainer:{
    flex:1,
    marginBottom:200,
  },
  footer:{
    position:'absolute',
    alignItems:'center',
    bottom:0,
    left:0,
    right:0,
  },
  addButton:{
    backgroundColor:'#e74c3c',
    width:90,
    height:40,
    borderRadius:12,
    borderColor:'#ccc',
    alignItems:'center',
    justifyContent:'center',
    elevation:8,
    marginBottom:-20,
    zIndex:10,
  },
  addButtonText:{
    color:'#fff',
    fontSize:14,
  },
  textinput:{
    alignSelf:'stretch',    
    color:'#fff',
    padding:15,
    paddingTop:26,
    backgroundColor:'#3498db',
    borderTopWidth:12,
    borderTopColor:'#3498db',
  },
  dropDownStyle:{
    alignSelf:'stretch',        
    padding:2,
    backgroundColor:'#3498db',
    paddingTop:2,
 
  },
  dropDownItself :{
    alignSelf:'stretch',    
    
  }
});

export default Main;
