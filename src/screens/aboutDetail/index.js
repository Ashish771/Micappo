import React, { Component } from 'react';
import { StatusBar, View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Container, Content, Icon, Switch } from 'native-base';
import connect from './connect';
import styles from './styles';
import globalStyles from '../../constants/globalStyles';
import Colors from '../../constants/colors';

class SettingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Container style={globalStyles.container}>
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor={Colors.Background}
                />
                <SafeAreaView style={styles.container}>
                    <View style={styles.contentContainer}>
                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={globalStyles.backBtnContainer}>
                                <Icon name='chevron-down' type='Entypo' style={globalStyles.backBtnIcon} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title}>Farmacia</Text>
                            </View>
                        </View>
                        <Content style={globalStyles.contentContainer}>
                            <View style={styles.itemContainer}>
                                <View style={styles.itemTimeContent}>
                                    <Text style={styles.itemSubTextTitle}>Farmacias Cruz Verde</Text>
                                    <Text style={styles.itemSubTitle}>Palin, Escuintla</Text>
                                </View>
                                <View style={styles.timeContainer}>
                                    <Icon name='briefcase-medical' type='FontAwesome5' style={styles.timeDateIcon} />
                                </View>
                            </View>
                            <View style={{ paddingVertical: 10 }}>
                                <Text style={[styles.itemTitle, { marginBottom: 5 }]}>Teléfono</Text>
                                <Text style={styles.itemSubTitle}>+502 50124911</Text>
                                <Text style={styles.itemSubTitle}>+502 32216151</Text>
                            </View>
                            <View style={{ paddingVertical: 10 }}>
                                <Text style={[styles.itemTitle, { marginBottom: 5 }]}>Dirección</Text>
                                <Text style={styles.itemSubTitle}>Km 34 Carretera al Pacífico</Text>
                            </View>
                        </Content>
                    </View>
                </SafeAreaView>
            </Container>
        );
    }
}

export default connect(SettingScreen);