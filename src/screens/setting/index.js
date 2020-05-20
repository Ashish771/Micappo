import React, { Component } from 'react';
import { StatusBar, View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Container, Content, Icon, Switch } from 'native-base';
import connect from './connect';
import styles from './styles';
import globalStyles from '../../constants/globalStyles';
import Colors from '../../constants/colors';

class AboutDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notificationSwitch: false,
            localizationSwitch: true
        };
    }

    render() {
        const { notificationSwitch, localizationSwitch } = this.state;
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
                                <Icon name='chevron-left' type='Entypo' style={globalStyles.backBtnIcon} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title}>Configuración</Text>
                            </View>
                        </View>
                        <Content style={globalStyles.contentContainer}>
                            <View style={styles.itemsContainer}>
                                <View style={styles.itemContainer}>
                                    <View style={styles.container}>
                                        <Text style={styles.subTitle}>Notificaciones</Text>
                                    </View>
                                    <Switch
                                        trackColor={{ false: Colors.White, true: Colors.TintColor }}
                                        thumbColor={Colors.White}
                                        ios_backgroundColor={Colors.White}
                                        onValueChange={(notificationSwitch) => this.setState({ notificationSwitch })}
                                        value={notificationSwitch}
                                    />
                                </View>
                                <View style={styles.itemContainer}>
                                    <View style={styles.container}>
                                        <Text style={styles.subTitle}>Localización</Text>
                                    </View>
                                    <Switch
                                        trackColor={{ false: Colors.White, true: Colors.TintColor }}
                                        thumbColor={Colors.White}
                                        ios_backgroundColor={Colors.White}
                                        onValueChange={(localizationSwitch) => this.setState({ localizationSwitch })}
                                        value={localizationSwitch}
                                    />
                                </View>
                            </View>
                        </Content>
                    </View>
                </SafeAreaView>
            </Container>
        );
    }
}

export default connect(AboutDetailScreen);