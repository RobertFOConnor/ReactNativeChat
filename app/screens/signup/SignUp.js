import React, {Component} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {navigatorStyle} from '../../common/navigation';
import {Button} from "../../components/button/Button";
import {LinkButton} from "../../components/link_button/LinkButton";
import {TextField} from "../../components/text_field/TextField";
import firebase from 'react-native-firebase';

export default class Login extends Component<Props> {

    static navigatorStyle = {
        ...navigatorStyle,
    };

    constructor(props) {
        super(props);
        this.unsubscriber = null;

        this.state = {
            username: '',
            email: '',
            password: '',
        };
    }

    componentDidMount() {
        this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
            this.setState({user});
        });
    }

    componentWillUnmount() {
        if (this.unsubscriber) {
            this.unsubscriber();
        }
    }

    attemptSignIn(email, password) {
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password).then(() => this.goToHomeScreen());
    }

    goToHomeScreen() {
        this.props.navigator.resetTo({
            screen: 'FriendListScreen',
            title: 'Friends'
        });
    }

    goToLoginScreen() {
        this.props.navigator.resetTo({
            screen: 'LoginScreen',
            title: 'Login'
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextField
                    hint={'Username'}
                    onChangeText={(text) => {this.setState({username: text})}}/>
                <TextField
                    hint={'Email'}
                    onChangeText={(text) => {this.setState({email: text})}}/>
                <TextField
                    hint={'Password'}
                    onChangeText={(text) => {this.setState({password: text})}}
                    isPassword={true}/>
                <Button
                    title={"Sign Up"}
                    onPress={() => this.attemptSignIn(this.state.email, this.state.password)}/>
                <LinkButton
                    title={"Already have an account? Log in!"}
                    onPress={() => this.goToLoginScreen()}/>
            </View>
        );
    }
}
