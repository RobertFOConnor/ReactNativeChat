import React, {Component} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
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
            errorMessage: null,
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
        this.setState({errorMessage: null});

        if (email === "" || password === "") {
            this.setState({errorMessage: 'Please fill all fields.'});
        } else {
            this.setState({loading: true});
            firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password).then(() => {
                this.goToHomeScreen();
                this.setState({loading: false});
            }).catch((error) => {
                const {code, message} = error;
                console.log(">>>>", code);
                this.setState({loading: false});
                //if (code === 'auth/wrong-password' || code === 'auth/user-not-found') {
                    this.setState({errorMessage: 'Login failed.'});
                //}
            });
        }
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
                    testID='emailInput'
                    hint={'Email'}
                    onChangeText={(text) => {
                        this.setState({errorMessage: null});
                        this.setState({username: text})
                    }}/>
                <TextField
                    testID='passwordInput'
                    hint={'Password'}
                    onChangeText={(text) => {
                        this.setState({errorMessage: null});
                        this.setState({password: text})
                    }}
                    isPassword={true}/>
                {this.state.errorMessage && <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>}
                <Button
                    testID='signInButton'
                    title={'Sign In'}
                    onPress={() => this.attemptSignIn(this.state.username, this.state.password)}/>
                <LinkButton
                    testID='signUpLink'
                    title={'Don\'t have an account? Sign up!'}
                    onPress={() => this.goToSignUpScreen()}/>
                <ActivityIndicator style={{padding: 30}} animating={this.state.loading}/>
            </View>
        );
    }
}
