import React, {Component} from 'react';
import {Platform, 
  StyleSheet, 
  Text, 
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput
} from 'react-native';


type Props = {};
export default class TopBar extends Component<Props> {
    
    constructor(props){
        super(props);
    }
   
  render() {
    return (
            <View style={[styles.container, styles.topBar]}>
                <TouchableOpacity style={styles.button}>
                    <Image style={styles.imagemTela} 
                        source={require('../../resources/img/home.png')} resizeMode="contain"/>    
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image style={styles.imagemTela} 
                        source={require('../../resources/img/earthUnchecked.png')} resizeMode="contain"/>    
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image style={styles.imagemTela} 
                        source={require('../../resources/img/notificationUnchecked.png')} resizeMode="contain"/>    
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image style={styles.imagemTela} 
                        source={require('../../resources/img/userUnchecked.png')} resizeMode="contain"/>    
                </TouchableOpacity>
            </View>
        );
    }
}
//#005f79

const styles = StyleSheet.create({
    container: {
      padding: 15, 
      backgroundColor: '#037696',
      alignItems: 'center',
      flexDirection: 'row',
      height: 50
    },
  imagemTela: {
      flex: 1,
      height: 35,
      width: 35
  },
  button: {
      flex: 4,
      alignItems: 'center',
      flexDirection: 'row'
  }
});