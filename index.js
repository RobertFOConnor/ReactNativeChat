import { Navigation } from 'react-native-navigation';
import Chat from './app/screens/chat/Chat';
import FriendList from './app/screens/friend_list/FriendsList';
import Login from './app/screens/login/Login';
import SignUp from './app/screens/signup/SignUp';

Navigation.registerComponent('LoginScreen', () => Login);
Navigation.registerComponent('SignUpScreen', () => SignUp);
Navigation.registerComponent('ChatScreen', () => Chat);
Navigation.registerComponent('FriendListScreen', () => FriendList);

// start the app
Navigation.startSingleScreenApp({screen: {
        screen: 'LoginScreen',
        title: 'Login',
    }});