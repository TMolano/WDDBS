import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import ChampionPool from './screens/ChampionPool';
import Home from './screens/Home';
import WinPercentage from './screens/WinPercentage';


const NavTab = createBottomTabNavigator(
    {
        Home: {
            path: '/',
            screen: Home,
        },
        ChampionPool: {
            path: '/ChampionPool',
            screen: ChampionPool,
        },
        WinPct: {
            path: '/WinPercentage',
            screen: WinPercentage,
        },
    },
    {
        initialRouteName: 'Home',
    }
);

export default NavTab;

