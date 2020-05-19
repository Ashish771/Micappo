import React, { Component } from 'react';
import { Platform, StatusBar, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Container, Content, Icon, Picker } from 'native-base';
import { TextField } from 'react-native-material-textfield';
import connect from './connect';
import styles from './styles';
import globalStyles from '../../constants/globalStyles';
import Colors from '../../constants/colors';

class SignupScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            password: '',
            selectedDate: '1',
            selectedMonth: '1',
            selectedYear: '2018'
        };
    }

    render() {
        const { selectedDate, selectedMonth, selectedYear } = this.state;
        let dateArr = [];

        for (let index = 1; index <= 31; index++) {
            dateArr.push(index.toString());
        }

        let monthArr = [];

        for (let index = 1; index <= 12; index++) {
            monthArr.push(index.toString());
        }

        let yearArr = [];

        for (let index = 1980; index <= 2020; index++) {
            yearArr.push(index.toString());
        }

        return (
            <Container style={globalStyles.container}>
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor={Colors.Background}
                />
                <SafeAreaView style={[styles.headerContainer, { paddingVertical: Platform.OS == 'android' ? 15 : 0 }]}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Icon name='chevron-small-left' type='Entypo' style={{ color: Colors.TintColor }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerCenter}>
                        <Text style={styles.headerTitle}>Registro</Text>
                    </View>
                    <View style={styles.headerRight}></View>
                </SafeAreaView>
                <Content contentContainerStyle={globalStyles.contentContainer}>
                    <View style={styles.contentContainer}>
                        <View style={styles.content}>
                            <TextField
                                label='Usuario'
                                keyboardType='phone-pad'
                                tintColor={Colors.TintColor}
                                value={this.state.mobile}
                                onChangeText={(mobile) => this.setState({ mobile })}
                                ref={(ref) => this.mobileRef = ref}
                            />
                        </View>
                        <Text style={styles.descText}>Fecha de nacimiento</Text>
                        <View style={styles.dropdownContainer}>
                            <View style={[styles.dropdownContent, { borderWidth: Platform.OS == 'android' ? 2 : 0, marginRight: 10 }]}>
                                <Picker
                                    selectedValue={selectedDate}
                                    style={styles.dropdown}
                                    textStyle={{ color: Colors.LightGray }}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ selectedDate: itemValue })}
                                >
                                    <Picker.Item label="Date" value="Date" />
                                    {dateArr.map((item, index) => {
                                        return (
                                            <Picker.Item key={index} label={item} value={item} />
                                        )
                                    })}
                                </Picker>
                                {Platform.OS == 'ios' &&
                                    <Icon name='chevron-small-down' type='Entypo' style={styles.dropdownIcon} />
                                }
                            </View>
                            <View style={[styles.dropdownContent, { borderWidth: Platform.OS == 'android' ? 2 : 0, marginRight: 10 }]}>
                                <Picker
                                    selectedValue={selectedMonth}
                                    style={styles.dropdown}
                                    textStyle={{ color: Colors.LightGray }}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ selectedMonth: itemValue })}
                                >
                                    <Picker.Item label="Month" value="Month" />
                                    {monthArr.map((item, index) => {
                                        return (
                                            <Picker.Item key={index} label={item} value={item} />
                                        )
                                    })}
                                </Picker>
                                {Platform.OS == 'ios' &&
                                    <Icon name='chevron-small-down' type='Entypo' style={styles.dropdownIcon} />
                                }
                            </View>
                            <View style={[styles.dropdownContent, { borderWidth: Platform.OS == 'android' ? 2 : 0 }]}>
                                <Picker
                                    selectedValue={selectedYear}
                                    style={styles.dropdown}
                                    textStyle={{ color: Colors.LightGray }}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ selectedYear: itemValue })}
                                >
                                    <Picker.Item label="Year" value="Year" />
                                    {yearArr.map((item, index) => {
                                        return (
                                            <Picker.Item key={index} label={item} value={item} />
                                        )
                                    })}
                                </Picker>
                                {Platform.OS == 'ios' &&
                                    <Icon name='chevron-small-down' type='Entypo' style={styles.dropdownIcon} />
                                }
                            </View>
                        </View>
                        <View style={styles.content}>
                            <TextField
                                label='Celular'
                                tintColor={Colors.TintColor}
                                value={this.state.password}
                                onChangeText={(password) => this.setState({ password })}
                                ref={(ref) => this.passwordRef = ref}
                            />
                        </View>
                        <View style={styles.content}>
                            <TextField
                                label='Correo electronico'
                                tintColor={Colors.TintColor}
                                value={this.state.password}
                                onChangeText={(password) => this.setState({ password })}
                                ref={(ref) => this.passwordRef = ref}
                            />
                        </View>
                        <View style={styles.content}>
                            <TextField
                                label='Confirmar correo electronico'
                                tintColor={Colors.TintColor}
                                value={this.state.password}
                                onChangeText={(password) => this.setState({ password })}
                                ref={(ref) => this.passwordRef = ref}
                            />
                        </View>
                        <View style={styles.content}>
                            <TextField
                                label='Contrasena'
                                tintColor={Colors.TintColor}
                                value={this.state.password}
                                onChangeText={(password) => this.setState({ password })}
                                ref={(ref) => this.passwordRef = ref}
                            />
                        </View>
                        <View style={styles.content}>
                            <TextField
                                label='Confirmar contrasena'
                                tintColor={Colors.TintColor}
                                value={this.state.password}
                                onChangeText={(password) => this.setState({ password })}
                                ref={(ref) => this.passwordRef = ref}
                            />
                        </View>
                        <View style={styles.content}>
                            <TouchableOpacity style={globalStyles.btnContainer}>
                                <Text style={globalStyles.btnText}>Crear mi cuenta</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.footerContainer}>
                            <TouchableOpacity>
                                <Text style={styles.footerText}>Ya tengo una cuenta</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default connect(SignupScreen);