import Login from './src/screens/Login';
import Feed from './src/screens/Feed';
import AuthLoading from './src/screens/AuthLoading';

// export default Login;


import { createSwitchNavigator, createStackNavigator } from 'react-navigation';



export default createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: Feed,
    Auth: Login,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);