import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import WinList from '../components/WinList';


export default class WinPercentage extends Component {
    constructor(props){
        super();
        this.state = {
            itemArray: [],
            itemText: '',
            itemWin: ''
        };
        this.addItem = this.addItem.bind(this)
    }
    static navigationOptions = {
        tabBarLabel: 'WinPercentage',
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

    saveChampions(){
        let cname = this.state.itemText;
        let win = this.state.itemWin;
        AsyncStorage.setItem('itemText', cname);
        AsyncStorage.setItem('itemWin', win);
        this.setState({itemText: cname, savedName: cname, itemWin: win, savedWin: win, cname: '' })
    }

    componentWillMount(){
        this.getContacts()
    }

    getContacts(){
        AsyncStorage.getItem('itemText').then((cname)=>{
            this.setState({cname: cname, savedName: cname})
        });
        AsyncStorage.getItem('itemWin').then((win)=>{
            this.setState({win: win, savedWin: win})
        })
    }

    addItem(){
        if(!this.state.itemText) {
            alert("Name field must not be empty!")
        }

        else if(!this.state.itemWin){
            alert("Win field must not be empty!")
        }
        else{
            this.state.itemArray.push({
                'itemName': this.state.itemText,
                'itemWin': this.state.itemWin
            });
            this.setState({'itemArray': this.state.itemArray});
            this.setState({
                'itemText': '',
                'itemWin': ''
            });
        }
    }

    delItem(key){
        this.state.itemArray.splice(key, 1);
        this.setState({itemArray: this.state.itemArray});
    }

    /*editItem(key){
        const my_array = [...this.state.itemArray];
        my_array[key] = this.state.itemArray;
        this.setState({itemArray:my_array})
    }*/


    render() {

        let myItems = this.state.itemArray.map((val, key) => {
            return <WinList key={key} keyval={key} val={val} delMe={ () =>this.delItem(key)}/>
        });

        return(
            <View style={styles.container}>
                <Text style={styles.title}>Add Champions</Text>
                <TextInput style={styles.txtInput}
                           placeholder="Champion"
                           value={this.state.itemText}
                           onChangeText = {(itemText) => this.setState({itemText})}
                />
                <TextInput style={styles.txtInput}
                           placeholder="Win Rate"
                           value={this.state.itemWin}
                           onChangeText = {(itemWin) => this.setState({itemWin})}
                />
                <TouchableOpacity
                    onPress={this.addItem}>
                    <Text style={styles.button}>
                        Add
                    </Text>
                </TouchableOpacity>

                <ScrollView style={styles.scroll}>
                    {myItems}
                </ScrollView>

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
        backgroundColor: 'green',
        margin: 5,
        padding: 5,
        justifyContent: 'center',
        color: 'white',
        fontSize:20
    },
    scroll: {
        flex: 1
    },
    title: {
        marginTop: 50
    }
});