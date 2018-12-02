import React, {Component} from 'react';
import {Platform, 
  StyleSheet, 
  Text, 
  View,
  Button,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
  AsyncStorage
} from 'react-native';

//import Icon from 'react-native-vector-icons';


const width = Dimensions.get('screen').width;

type Props = {};
export default class Login extends Component<Props> {

    constructor() {
        super();
        this.state = {
            usuario: '',
            senha: '',
            mensagem: ''
        }
    }


    efetuaLogin(){
        const uri = "https://instalura-api.herokuapp.com/api/public/login";
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({
                login: this.state.usuario,
                senha: this.state.senha
            }),
            headers: new Headers({
                'Content-type' : 'application/json'
            })
        }


        fetch(uri, requestInfo)
        .then(response => {
            if(response.ok){
                return response.text();
            }
            throw new Error("Não foi possível realizar o login!");
        })
        .then(token => {
            AsyncStorage.setItem('token', token);
            AsyncStorage.setItem('usuario', this.state.usuario);
            this.props.navigation.navigate(token ? 'App' : 'Auth');
        })
        .catch(e => {
            this.setState({mensagem: e.message})
        });
    }

    render(){
        return (

            <View style={styles.container}>
                <StatusBar
                backgroundColor="#005f7a"
                barStyle="light-content"
                />
                <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
                >
                    <Image style={{flex: 1}} source={require("../../resources/img/fundo-azul.jpg")} />
                </View>

                <Text style={styles.title}>InstaProject</Text>
                <View style={styles.form}>
                    <TextInput style={styles.input} autoCapitalize="none" placeholder="Usuário..." 
                    onChangeText={texto => this.setState({usuario: texto})}/>
                    <TextInput style={styles.input} secureTextEntry={true} placeholder="Senha..." 
                    onChangeText={texto => this.setState({senha: texto})}/>
                    <Button title="Login" onPress={this.efetuaLogin.bind(this)}/>
                </View>
                <Text style={styles.mensagem}>
                    {this.state.mensagem}
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#037696'
  },
  form: {
      width: width * 0.8,

  },
  input:{
      height: 40,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
  },
  title: {
      fontWeight: 'bold',
      fontSize: 32,
      marginBottom: 50,
  },
  mensagem: {
      marginTop: 15,
      color: '#e74c3c'
  }
});