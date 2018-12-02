import React, {Component} from 'react';
import {Platform, 
  StyleSheet,  
  View,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';

type Props = {};
export default class InputComentario extends Component<Props> {
    constructor(){
        super();
        this.state = {
            valorComentario: ''
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.input}
                    placeholder="Adicione um comentario" 
                    underlineColorAndroid='transparent'
                    ref={input => this.inputComentario = input}
                    onChangeText={texto => this.setState({valorComentario: texto})}/>
                <TouchableOpacity onPress={() => {
                    this.props.comentarioCallback(this.props.fotoId, this.state.valorComentario, this.inputComentario);
                    this.setState({valorComentario: ''});
                    }}>
                    <Image source={require('../../resources/img/send.png')} style={styles.icone}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1, 
        borderBottomColor: '#ddd'
    },
    input: {
        flex: 1,
        height: 40
    },
    icone: {
        width: 30,
        height: 30
    }
   
  });