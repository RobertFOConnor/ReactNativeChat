import Chat from '../screens/chat/Chat';
import FriendList from '../screens/friend_list/FriendsList';
import Login from '../screens/login/Login';
import SignUp from '../screens/signup/SignUp';
import {Navigation} from "react-native-navigation";


export const screens = {
    SIGN_UP: {
        name: 'SignUpScreen',
        title: 'Sign Up',
        screen: SignUp,
    },
    LOGIN: {
        name: 'LoginScreen',
        title: 'Login',
        screen: Login,
    },
    FRIEND_LIST: {
        name: 'FriendListScreen',
        title: 'Friend',
        screen: FriendList,
    },
    CHAT: {
        name: 'ChatScreen',
        title: 'Chat',
        screen: Chat,
    },
};

export const registerScreens = () => {
    for (let i = 0; i < screens.length; i++) {
        Navigation.registerComponent(screens[i].name, () => screens[i].screen);
    }
};