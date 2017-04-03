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
  Navigator,
  TouchableOpacity
} from 'react-native';

export default class DemoNavigator extends Component {
  doiManHinh(route, navigator){
    let mau = route.mau;
    switch (mau) {
      case 'do':
        return(
          <ManHinhDo doiMau={navigator}/>
        );
      case 'vang':
        return(
          <ManHinhVang doiMau={navigator}/>
        );
      case 'xanh':
        return(
          <ManHinhXanh doiMau={navigator}/>
        );
    }
  }

  render() {
    return (
      <Navigator
      initialRoute={{ mau: 'do', index: 0 }}
      renderScene={this.doiManHinh}
    />
    );
  }
}

class ManHinhDo extends Component{
  chuyenMauVang(){
    this.props.doiMau.push({mau:'vang'});
  }
  render() {
    return (
      <View style={styles.do}>
        <Text> Dang o man hinh Do</Text>
        <TouchableOpacity onPress={this.chuyenMauVang.bind(this)}>
          <Text>Chuyen sang vang</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

class ManHinhVang extends Component{
  chuyenMauDo(){
    this.props.doiMau.push({mau:'xanh'});
  }
  render() {
    return (
      <View style={styles.vang}>
        <Text > Dang o man hinh Vang</Text>
        <TouchableOpacity onPress={this.chuyenMauDo.bind(this)}>
          <Text>Chuyen sang xanh</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class ManHinhXanh extends Component{
  quayLaiMauVang(){
    this.props.doiMau.pop();
  }
  render() {
    return (
      <View style={styles.xanh}>
        <Text> Dang o man hinh Xanh</Text>
        <TouchableOpacity onPress={this.quayLaiMauVang.bind(this)}>
          <Text>Quay lai vang</Text>
        </TouchableOpacity>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  vang: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  do: {
      flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  xanh: {
      flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aqua'
  },

});

AppRegistry.registerComponent('DemoNavigator', () => DemoNavigator);
