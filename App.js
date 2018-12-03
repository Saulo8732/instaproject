import Login from './src/screens/Login';
import Feed from './src/screens/Feed';
import AuthLoading from './src/screens/AuthLoading';
import Post from './src/screens/Post'
import Foto from './src/screens/Foto'
// export default Login;


import { createSwitchNavigator, createStackNavigator } from 'react-navigation';



const main =
createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: Feed,
    Auth: Login,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default createStackNavigator ({
 
  main:{
    screen: main,
  },
  Post:{
    screen: Post
  },
  Foto:{
    screen:Foto
  },
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 })