import React,{Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, Platform, ScrollView, Alert, TextInput} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { Icon } from 'react-native-elements'


class Foto extends Component{
    state = {
        image :null,
        comment: '',
    }

    pickImage = () =>{
        ImagePicker.showImagePicker({
            title: 'Escolha a imagem',
            maxHeight:600,
            maxWidth: 800
        }, res =>{
            if(!res.didCancel) {
                this.setState({image: {uri: res.uri, base64: res.data}})

            }
        }
        )
    }

    save = async () =>{
        Alert.alert('Imagem adicionada!', this.state.comment)
    }

render(){
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Fazer Publicação</Text>
                    <Image source={this.state.image} style={styles.image} />
            </View>
                <TouchableOpacity onPress={this.pickImage} style={styles.btn}>
                    <Icon name='add-a-photo' style={{justifyContent:"center"}}/>
                </TouchableOpacity>
                <Text>Adicionar foto</Text>
            <TextInput placeholder='Legenda: '
                    style={styles.input} value={this.state.comment}
                    onChangeText={comment => this.setState({ comment })} />
                <TouchableOpacity onPress={this.save} style={styles.button}>
                    <Text style={styles.buttonText}>Publicar</Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }
}

const styles= StyleSheet.create({

        container: {
            flex:1,
            alignItems:'center'
        },
        title: {
            fontSize: 20,
        },
        imageContainer: {
            width: '90%',
            height: Dimensions.get('window').width *3/4,
            backgroundColor:'#EEE',
            marginTop: 10
        },
        image:{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width *3/4,
            resizeMode: 'center'
        },
        button: {
            marginTop:30,
            padding: 10,
            backgroundColor: '#037696',
            width: Dimensions.get('window'). width /3,
            borderRadius:10,
            alignItems:'center',
            justifyContent:'center'
        },
        buttonText:{
            fontSize:20,
            color: '#FFF'
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

    export default Foto