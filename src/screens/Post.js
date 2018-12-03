import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  
} from 'react-native';
import { Icon } from 'react-native-elements'

export default class Post extends Component{
    static navigationOptions={header: null}
    render(){
        return(
            <View style={styles.container}>
                <Text>Legenda</Text>
                <TextInput style={styles.input}/>
                <View style={{paddingTop:40}}>
                    <Text>Tirar foto</Text>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Post')} style={styles.btn}>
                    <Icon name='add-a-photo' style={{justifyContent:"center"}}/>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', paddingTop:40 }}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Post')} style={styles.btn} onPress={() => this.props.navigation.navigate('App')}>
                    <Icon name='reply' style={{justifyContent:"center"}}/>
                </TouchableOpacity>
                <Text>   </Text>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Post')} style={styles.btn}>
                    <Icon name='done' style={{justifyContent:"center"}}/>
                </TouchableOpacity>
                
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        height: Dimensions.get('window').width/4,
        width:Dimensions.get('window').width/4*3,
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius:10
    },
    btn:{
        backgroundColor:'#037696',
        borderRadius:30,
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center'
      }
})