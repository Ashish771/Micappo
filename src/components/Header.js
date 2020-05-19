import React, { Component } from 'react';
import { StatusBar, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import Colors from '../constants/colors';
import { statusBarHeight } from '../helper/utils';

export default class Header extends Component {
    render() {
        const { title, goBack, isBack = false, rightComponent = <View /> } = this.props;

        return (
            <View style={{ backgroundColor: Colors.Background }}>
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor={Colors.White}
                />
                <View style={{
                    marginTop: statusBarHeight,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingBottom: 10
                }}>
                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                        {isBack &&
                            <TouchableOpacity onPress={goBack} style={{ paddingHorizontal: 10 }}>
                                <Icon name='arrow-back' type='MaterialIcons' style={{ color: Colors.White }} />
                            </TouchableOpacity>
                        }
                    </View>
                    <View style={{ flex: 0.6, alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
                        <Text style={{ color: Colors.White, fontSize: 18 }}>{title}</Text>
                    </View>
                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                        {rightComponent}
                    </View>
                </View>
            </View>
        );
    }
}