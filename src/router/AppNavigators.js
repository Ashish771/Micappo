import React from 'react';
import { Icon } from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createSwitchNavigator } from 'react-navigation';
import Colors from '../constants/colors';

import WelcomeScreen from '../screens/welcome';
import LoginScreen from '../screens/login';
import SignupScreen from '../screens/signup';

import DashboardScreen from '../screens/dashboard';
import SettingScreen from '../screens/setting';
import ProfileScreen from '../screens/profile';

import HistoryScreen from '../screens/history';
import ReminderScreen from '../screens/reminder';

import TabBottomBar from '../components/TabBottomBar';
import { getResponsiveHeight } from '../helper/utils';

const DashboardStack = createStackNavigator({
    Dashboard: {
        screen: DashboardScreen,
    },
    Setting: {
        screen: SettingScreen
    },
    Profile: {
        screen: ProfileScreen
    }
}, {
    headerMode: 'none'
});

const HistoryStack = createStackNavigator({
    History: {
        screen: HistoryScreen,
    }
}, {
    headerMode: 'none'
});

const ReminderStack = createStackNavigator({
    Reminder: {
        screen: ReminderScreen,
    }
}, {
    headerMode: 'none'
});

const BaseNavigator = createBottomTabNavigator({
    Dashboard: {
        screen: DashboardStack,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name='view-dashboard'
                    type='MaterialCommunityIcons'
                    style={{ color: tintColor, fontSize: getResponsiveHeight(4) }}
                />
            )
        })
    },
    History: {
        screen: HistoryStack,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name='history'
                    type='MaterialCommunityIcons'
                    style={{ color: tintColor, fontSize: getResponsiveHeight(4) }}
                />
            )
        })
    },
    Reminder: {
        screen: ReminderStack,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name='alarm'
                    type='MaterialCommunityIcons'
                    style={{ color: tintColor, fontSize: getResponsiveHeight(4) }}
                />
            )
        })
    }
}, {
    tabBarOptions: {
        showLabel: false,
        activeTintColor: Colors.White,
        inactiveTintColor: Colors.InActiveTintColor,
        style: {
            backgroundColor: Colors.TabBackground,
            height: getResponsiveHeight(8),
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
        },
        keyboardHidesTabBar: true
    },
    tabBarComponent: (props) => <TabBottomBar {...props} />
});

const AuthStack = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen
    },
    Login: {
        screen: LoginScreen,
    },
    Signup: {
        screen: SignupScreen,
    }
}, {
    headerMode: 'none'
});

const switchNavigator = createSwitchNavigator({
    Auth: {
        screen: AuthStack
    },
    Home: {
        screen: BaseNavigator
    }
}, {
    initialRouteName: 'Home'
});

export default switchNavigator;