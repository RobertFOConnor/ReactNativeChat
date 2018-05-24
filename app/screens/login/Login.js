import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
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
            password: '',
            loading: false,
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
        this.setState({loading: true});
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password).then(() => {
            this.goToHomeScreen();
            this.setState({loading: false});
        }).catch(this.setState({loading: false}));
    }

    goToHomeScreen() {
        this.props.navigator.resetTo({
            screen: 'FriendListScreen',
            title: 'Friends'
        });
    }

    goToSignUpScreen() {
        this.props.navigator.resetTo({
            screen: 'SignUpScreen',
            title: 'Sign Up'
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextField
                    hint={'Email'}
                    onChangeText={(text) => {this.setState({username: text})}}/>
                <TextField
                    hint={'Password'}
                    onChangeText={(text) => {this.setState({password: text})}}
                    isPassword={true}/>
                <Button
                    title={'Sign In'}
                    onPress={() => this.attemptSignIn(this.state.username, this.state.password)}/>
                <LinkButton
                    title={'Don\'t have an account? Sign up!'}
                    onPress={() => this.goToSignUpScreen()}/>
                <ActivityIndicator style={{padding: 30}} animating={this.state.loading}/>
            </View>
        );
    }
}
