import React, {Component} from 'react';
import {
    Text,
    ScrollView,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import {navigatorStyle} from '../../common/navigation';

export default class Chat extends Component<Props> {

    static navigatorStyle = {
        ...navigatorStyle,
    };

    messageArr = [];

    defaultStrings = ["hi",
        "Hey, I'm good! How are you?",
        "were all going out for sundaes and then were all going out for icecream and were all going out for bacon."];

    constructor(props) {
        super(props);
        this.state = {text: ''};
        for (let i = 0; i < 3; i++) {
            this.messageArr.push(this.chatBubble(i, this.defaultStrings[Math.floor(Math.random() * this.defaultStrings.length)], i % 2));
            Math.floor(Math.random() * 20)
        }
    };

    postMessage(arr) {
        if (this.state.text !== '') {
            arr.push(this.chatBubble(arr.length, this.state.text, Math.floor(Math.random() * 2) % 2));
            this.setState({text: ''});
        }
    }

    chatBubble = (id, message, isMine) =>
        <View key={id} style={[styles.bubbleContainer, {alignSelf: isMine ? 'flex-end' : 'flex-start'}]}>
            <View style={[styles.bubble, {
                backgroundColor: isMine ? '#333' : 'white',
                borderBottomRightRadius: isMine ? 0 : styles.bubble.borderRadius,
                borderBottomLeftRadius: !isMine ? 0 : styles.bubble.borderRadius,
            }]}>
                <Text style={[styles.message, {color: isMine ? 'white' : '#333'}]}>
                    {message}
                </Text>
            </View>
            <View style={[styles.triangle, {
                borderBottomColor: isMine ? '#333' : 'white',
                alignSelf: isMine ? 'flex-end' : 'flex-start',
                borderLeftWidth: isMine ? 0 : 10,
                borderRightWidth: !isMine ? 0 : 10
            }]}/>
        </View>;

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{paddingHorizontal: 30}}
                            contentContainerStyle={{paddingTop: 10, paddingBottom: 70}}>
                        {this.messageArr}
                </ScrollView>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Aa'}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onChangeText={(text) => this.setState({text})}
                        onSubmitEditing={() => this.postMessage(this.messageArr)}
                        value={this.state.text}
                    />
                    <TouchableOpacity onPress={() => this.postMessage(this.messageArr)}>
                        <View style={styles.sendButton}>
                            <Icon name="paper-plane" size={16} color="#fff" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
