import React, {Component} from 'react';
import {FlatList, Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {navigatorStyle} from '../../common/navigation';

export default class FriendsList extends Component<Props> {

    static navigatorStyle = {
        ...navigatorStyle,
    };

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const {page, seed} = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        this.setState({loading: true});
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: page === 1 ? res.results : [...this.state.data, ...res.results],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                this.setState({error, loading: false});
            });
    };

    goToChatScreen() {
        this.props.navigator.push({
            screen: 'ChatScreen',
            title: 'Chat'
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    testID='friendsList'
                    data={this.state.data}
                    ItemSeparatorComponent={() => <View style={styles.itemDivider}/>}
                    renderItem={({item}) =>
                        <TouchableOpacity onPress={() => this.goToChatScreen()}>
                            <View style={styles.itemContainer}>
                                <Image
                                    style={styles.profilePhoto}
                                    source={{uri: item.picture.thumbnail}}/>
                                <Text style={styles.itemText}>{item.name.first}</Text>
                            </View>
                        </TouchableOpacity>}
                />
            </View>
        );
    }
}
