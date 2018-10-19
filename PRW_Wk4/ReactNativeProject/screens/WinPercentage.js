import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


class WinPercentage extends Component {
    static navOptions = {
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

    render() {
        return (
            <View style={styles.container}>
                <Text>View Champion Win Rates</Text>
            </View>
        );
    }
}

export default WinPercentage;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});