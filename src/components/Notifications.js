import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements'


const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    avatar1: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
 },
 {
    name: 'Braum',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    avatar1: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
 },
 {
    name: 'Pitoca',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    avatar1: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
 },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    avatar1: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
 },
 {
    name: 'Braum',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    avatar1: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
 },
 {
    name: 'Pitoca',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    avatar1: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
 },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    avatar1: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
 },
 {
    name: 'Braum',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    avatar1: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
 },
 {
    name: 'Pitoca',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    avatar1: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
 },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    avatar1: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
 },
 {
    name: 'Braum',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    avatar1: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
 },
 {
    name: 'Pitoca',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    avatar1: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
 },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    avatar1: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
 },
 {
    name: 'Braum',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    avatar1: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
 },
 {
    name: 'Pitoca',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    avatar1: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
 },
];

export default class Notifications extends React.Component {

  keyExtractor = (item, index) => String(index)

  renderItem = ({ item }) => (
    <View>
        <Image source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} resizeMode="contain"/>
        <Text>SASDasdsd</Text>
        <Image
        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}} resizeMode="contain"
        />
    </View>
  ) 


  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={users}
        renderItem={this.renderItem}
      />
    );
  }
}
