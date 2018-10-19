import React, {Component} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, Text, View, Image } from 'react-native';
import Signup from '../components/Signup';

export default class Home extends Component {
static navOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => {
        return(
            <MaterialIcons
            name="home"
            size={26}
            style={{color: tintColor}}>
            </MaterialIcons>
        )
    }
};

    render() {
        return (
            <Signup/>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        backgroundColor: 'lightgray',
        width: 100
    }
});