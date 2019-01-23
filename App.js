/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView,TextInput} from 'react-native';
import MyButton from './button'

const items=[];
type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
  }
  state = {
    toDo : '',
  }
  addItem(){
    //console.warn('addItem');
    items.push(this.state.toDo);
    this.setState({toDo:''});
  }

  renderItem(item){
    return(
        <View style={{backgroundColor:'black',height:100,margin:8,borderRadius:15
        ,justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'white',fontSize:24}}>
            {item}
          </Text>

        </View>
    );
  }
  render() {
    return (
      <View style={{flex:1, marginTop: Platform.OS=='android' ? 21 : 0}}>
        <View style={{height:100,flexDirection:'row'
        ,padding:8}}>
          <View style={{flex:4,justifyContent:'center'}}>
            <TextInput value={this.state.toDo} onChangeText={ (v) => this.setState({toDo: v})} placeholder={"Yapılacakları giriniz."} style={{backgroundColor:'gray',height: 40,borderRadius:5,margin:5}}/>
          </View>
          <View style={{backgroundColor:'pink',flex:1,marginRight:8}}>
            <MyButton onPress={this.addItem} text={'Ekle'}/>
          </View>
        </View>
        <ScrollView>
          {items.map( (item) => this.renderItem(item))}
        </ScrollView>
      </View>
    );
  }
}
