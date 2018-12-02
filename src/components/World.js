import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'


const hashtags = [
 {
    name: 'brynn',
 },
 {
    name: 'Braum',
 },
 {
    name: 'Pitoca',
 },
  {
    name: 'Piquito',
 },
 {
    name: 'Papagaio',
 },
 {
    name: 'Jegue',
 },
  {
    name: 'Elefante',
 },
 {
    name: 'Vaca',
 },
 {
    name: 'Boi',
 },
 {
    name: 'Teste',
 },
 {
    name: 'Bode',
 },
  {
    name: 'Cabra',
 },
 {
    name: 'Burro',
 },
 {
    name: 'Flávio',
 },
];

export default class World extends React.Component {
  keyExtractor = (item, index) => String(index)

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={'Teste'}
      leftIcon={{ name: 'add', size: 30}}
    />
  )

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={hashtags}
        renderItem={this.renderItem}
      />
    );
  }
}
