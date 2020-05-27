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
import DoctorDetailScreen from '../screens/doctorDetail';

import DocumentScreen from '../screens/document';

import HistoryScreen from '../screens/history';

import ReminderScreen from '../screens/reminder';

import AboutScreen from '../screens/about';
import AboutDetailScreen from '../screens/aboutDetail';

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
    },
    DoctorDetail: {
        screen: DoctorDetailScreen
    }
}, {
    headerMode: 'none'
});

const DocumentStack = createStackNavigator({
    Document: {
        screen: DocumentScreen,
    }
}, {
    headerMode: 'none'
});

const HistoryStack = createStackNavigator({
    History: {
        screen: HistoryScreen,
    },
    DiagnosticDetail: {
        screen: DoctorDetailScreen
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

const AboutStack = createStackNavigator({
    About: {
        screen: AboutScreen,
    },
    AboutDetail: {
        screen: AboutDetailScreen
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
                    style={{ color: tintColor, fontSize: getResponsiveHeight(3.8) }}
                />
            )
        })
    },
    Document: {
        screen: DocumentStack,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name='file-document'
                    type='MaterialCommunityIcons'
                    style={{ color: tintColor, fontSize: getResponsiveHeight(3.8) }}
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
                    type='FontAwesome5'
                    style={{ color: tintColor, fontSize: getResponsiveHeight(3.5) }}
                />
            )
        })
    },
    Reminder: {
        screen: ReminderStack,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name='clock'
                    type='FontAwesome5'
                    style={{ color: tintColor, fontSize: getResponsiveHeight(3.5) }}
                />
            )
        })
    },
    About: {
        screen: AboutStack,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name='heartbeat'
                    type='FontAwesome5'
                    style={{ color: tintColor, fontSize: getResponsiveHeight(3.5) }}
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
    initialRouteName: 'Auth'
});

export default switchNavigator;