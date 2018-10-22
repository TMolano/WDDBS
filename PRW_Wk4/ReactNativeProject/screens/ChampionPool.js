import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ChampionList from '../components/ChampionList';


export default class ChampionPool extends Component {
    constructor(props){
        super();
        this.state = {
            itemArray: [],
            itemText: '',
            itemRole: ''
        };
        this.addItem = this.addItem.bind(this)
    }
    static navigationOptions = {
        tabBarLabel: 'ChampionPool',
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
        let role = this.state.itemRole;
        AsyncStorage.setItem('itemText', cname);
        AsyncStorage.setItem('itemRole', role);
        this.setState({itemText: cname, savedName: cname, itemRole: role, savedRole: role, cname: '' })
    }

    componentWillMount(){
        this.getContacts()
    }

    getContacts(){
        AsyncStorage.getItem('itemText').then((cname)=>{
            this.setState({cname: cname, savedName: cname})
        });
        AsyncStorage.getItem('itemRole').then((role)=>{
            this.setState({role: role, savedRole: role})
        })
    }

    addItem(){
        if(!this.state.itemText) {
            alert("Name field must not be empty!")
        }

        else if(!this.state.itemRole){
            alert("Role field must not be empty!")
        }
        else{
            this.state.itemArray.push({
                'itemName': this.state.itemText,
                'itemRole': this.state.itemRole
            });
            this.setState({'itemArray': this.state.itemArray});
            this.setState({
                'itemText': '',
                'itemRole': ''
            });
        }
    }

    delItem(key){
        this.state.itemArray.splice(key, 1);
        this.setState({itemArray: this.state.itemArray});
    }


    render() {

        let myItems = this.state.itemArray.map((val, key) => {
            return <ChampionList key={key} keyval={key} val={val} delMe={ () =>this.delItem(key)
            }/>
        });

        return(
            <View style={styles.container}>
                <Text style={styles.title}>Add Champions</Text>
                <TextInput style={styles.txtInput}
                           placeholder="Champion"
                           value={this.state.itemText}
                           id="name"
                           onChangeText = {(itemText) => this.setState({itemText})}
                />
                <TextInput style={styles.txtInput}
                           placeholder="Role"
                           value={this.state.itemRole}
                           id="role"
                           onChangeText = {(itemRole) => this.setState({itemRole})}
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