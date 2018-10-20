import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class WinList extends Component{
    render(){
        const item = this.props.item;
        return(
            <View key={this.props.keyval} style={styles.listItem}>
                <Text style={styles.itemText}>Champion: {this.props.val.itemName}</Text>
                <Text style={styles.itemText}>Win Rate: {this.props.val.itemWin}</Text>

                <TouchableOpacity onPress={this.props.delMe} style={styles.delItem}>
                    <MaterialIcons
                        name="delete"
                        size={26}>
                    </MaterialIcons>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.edit} style={styles.editItem}>
                    <MaterialIcons
                        name="edit"
                        size={26}>
                    </MaterialIcons>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    listItem: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        backgroundColor: 'lightyellow'
    },
    itemText: {
        fontWeight: 'bold',
        paddingLeft: 10,
        borderLeftWidth: 10,
        borderLeftColor: 'black',
    },
    delItem: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        bottom: 0,
        top: 0,
        right: 0,
        backgroundColor: 'grey'
    },
    editItem: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        bottom: 0,
        top: 30,
        right: 0,
        backgroundColor: 'grey'
    }
});

