import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  Button,
  AsyncStorage,
  StatusBar
} from 'react-native';
import { Icon } from 'react-native-elements'

import { createMaterialTopTabNavigator } from 'react-navigation';

import Post from '../components/Post';
import World from '../components/World';
import Notifications from '../components/Notifications';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const width = Dimensions.get('screen').width;


type Props = {};

export class Home extends Component<Props> {
  constructor() {
    super();
    this.state = {
      fotos: []
    }
  }

  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(resposta => resposta.json())
      .then(json => this.setState({ fotos: json }))
      .catch(e => {
        console.warn('Não foi possível carregar as fotos: ' + e);
        this.setState({ status: 'ERRO' })
      });
  }

  like(fotoId) {
    const foto = this.buscaPorId(fotoId);

    let novaLista = [];
    if (!foto.likeada) {
      novaLista = [
        ...foto.likers,
        { login: 'meuUsuario' }
      ]
    } else {
      novaLista = foto.likers.filter(liker => {
        return liker.login != 'meuUsuario'
      })
    }

    const fotoAtualizada = {
      ...foto,
      likeada: !foto.likeada,
      likers: novaLista
    }

    this.atualizaFotos(fotoAtualizada);
  }

  adicionaComentario(fotoId, valorComentario, inputComentario) {
    if (valorComentario === '') {
      return;
    }

    const foto = this.buscaPorId(fotoId);

    const novaLista = [...foto.comentarios, {
      id: valorComentario,
      login: 'meuUsuario',
      texto: valorComentario
    }];


    const fotoAtualizada = {
      ...foto,
      comentarios: novaLista
    }

    this.atualizaFotos(fotoAtualizada);
    inputComentario.clear();
  }

  atualizaFotos(fotoAtualizada) {
      const fotos = this.state.fotos.map(foto =>
          foto.id === fotoAtualizada.id ? fotoAtualizada : foto);
      this.setState({fotos});
  }

  buscaPorId(idFoto) {
      return this.state.fotos
          .find(foto => foto.id === idFoto)
  }




  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => String(item.id)}
          data={this.state.fotos}
          renderItem={({ item }) =>
            <Post foto={item}
              likeCallback={this.like.bind(this)} 
              comentarioCallback={this.adicionaComentario.bind(this)}/>
          }
        />
      </View>

    );
  }
}


export class Mundo extends Component {
  render() {
    return (
      <View>
        <World />
      </View>
    );
  }
}

export class Notificacoes extends Component {
  render() {
    return (
      <View>
        <Notifications />
      </View>
    );
  }
}



export class Perfil extends Component {
  render() {
    return (
      <View>
        <Text>Perfil</Text>
        <Button title="Sair" onPress={() => {
          AsyncStorage.removeItem('token');
          this.props.navigation.navigate('Auth');
          }} />

      </View>
    );
  }
}

export default createMaterialTopTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='home' color={tintColor} size={32} />
      )
    }
  },
  Mundo: {
    screen: Mundo,
    navigationOptions: {
      tabBarLabel: 'World',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='group' color={tintColor} size={32} />
      )
    }
  },
  Notificacoes: {
    screen: Notificacoes,
    navigationOptions: {
      tabBarLabel: 'Notifications',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='notifications' color={tintColor} size={32} />
      )
    }
  },
  Perfil: {
    screen: Perfil,
    navigationOptions: {
      tabBarLabel: 'Perfil',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='person' color={tintColor} size={32} />
      )
    }
  }
},
  {

    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#005f7a',
      style: {
        backgroundColor: '#037696',
      },
      iconStyle: {
        height: 32,
        width: 32
      },
      indicatorStyle: {
        backgroundColor: '#FFFFFF'
      }

    }
  }
);

const margem = Platform.OS == 'ios' ? 20 : 0;

const styles = StyleSheet.create({
  container: {
    marginTop: margem
  },
});