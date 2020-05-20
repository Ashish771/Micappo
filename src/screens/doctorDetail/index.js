import React, { Component } from 'react';
import { StatusBar, View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Container, Content, Icon, Switch } from 'native-base';
import connect from './connect';
import styles from './styles';
import globalStyles from '../../constants/globalStyles';
import Colors from '../../constants/colors';

class DoctorDetailScreen extends Component {
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
                                <Text style={styles.title}>Diagnóstico</Text>
                                <Text style={styles.subTitle}>Jerry Marroquin</Text>
                            </View>
                        </View>
                        <Content contentContainerStyle={globalStyles.contentContainer}>
                            <Text style={styles.itemTitle}>Caso #651651</Text>
                            <View style={styles.itemContainer}>
                                <Icon name='user-md' type='FontAwesome' style={styles.timeDateIcon} />
                                <View style={styles.itemTimeContent}>
                                    <Text style={styles.itemSubTextTitle}>Dr. Sergio Amaya</Text>
                                    <Text style={styles.itemSubTitle}>Pediatra</Text>
                                </View>
                                <View style={styles.timeContainer}>
                                    <Text style={styles.itemSubTitle}>22/10/2020</Text>
                                    <Text style={styles.itemSubTitle}> Colegiado #32103</Text>
                                </View>
                            </View>
                            <View style={{ paddingVertical: 5 }}>
                                <Text style={[styles.itemSubTextTitle, { marginBottom: 10 }]}>Diagnóstico</Text>
                                <Text style={styles.itemSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                            </View>
                            <View style={{ paddingVertical: 5 }}>
                                <Text style={[styles.itemSubTextTitle, { marginBottom: 10 }]}>Receta</Text>
                                <Text style={styles.itemSubTitle}>Ibopufreno 500 Mg</Text>
                                <Text style={styles.itemSubTitle}>Tomar una pastilla cada 2 horas por 5 dias.</Text>
                            </View>
                            <View style={{ paddingVertical: 5 }}>
                                <Text style={[styles.itemSubTextTitle, { marginBottom: 10 }]}>Diagnóstico</Text>
                                <Text style={styles.itemSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                            </View>
                            <View style={{ paddingVertical: 5 }}>
                                <Text style={[styles.itemSubTextTitle, { marginBottom: 10 }]}>Receta</Text>
                                <Text style={styles.itemSubTitle}>Ibopufreno 500 Mg</Text>
                                <Text style={styles.itemSubTitle}>Tomar una pastilla cada 2 horas por 5 dias.</Text>
                            </View>
                            <TouchableOpacity style={globalStyles.btnContainer}>
                                <Text style={globalStyles.btnText}>Crear recordatorio</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={globalStyles.btnContainer}>
                                <Text style={globalStyles.btnText}>Ver farmacias cercanas</Text>
                            </TouchableOpacity>
                        </Content>
                    </View>
                </SafeAreaView>
            </Container>
        );
    }
}

export default connect(DoctorDetailScreen);