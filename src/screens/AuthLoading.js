import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';


export default class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const token = await AsyncStorage.getItem('token');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    setTimeout(() => {this.props.navigation.navigate(token ? 'App' : 'Auth')},
    2000)
    
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={70} color="#005f7a" />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#037696'
  },
});