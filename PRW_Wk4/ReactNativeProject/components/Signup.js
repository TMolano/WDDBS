import React, {Component} from 'react';
import {TextInput, StyleSheet, View, Text, Button} from 'react-native';

export default class Signup extends Component  {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.submit = this.submit.bind(this);
    }

    submit(){
    this.setState({
        username: '',
        password: ''
    });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.h1}>Welcome to League Stats!</Text>
                <Text>Logged in as: {this.state.username}</Text>
                <TextInput style={styles.txtInput}
                           placeholder="Name"
                           value={this.state.username}
                           onChangeText={(username) => this.setState({username})}
                />
                <TextInput style={styles.txtInput}
                           placeholder="Password"
                           value={this.state.password}
                           onChangeText={(password) => this.setState({password})}
                />
                <Text style={styles.button}
                onPress={this.submit}>Sign Up</Text>
            </View>
        );
    }
}



const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gold'
    },
    txtInput: {
        margin: 5,
        padding: 5,
        borderWidth: 2,
        fontSize: 20,
        borderRadius: 5,
        backgroundColor: 'snow',
        width: 200

    },
    button: {
        backgroundColor: 'darkgreen',
        margin: 5,
        padding: 5,
        justifyContent: 'center',
        color: 'white',
        fontSize:20
    },
    h1: {
        fontSize: 25,
        justifyContent: 'center'
    }
    });