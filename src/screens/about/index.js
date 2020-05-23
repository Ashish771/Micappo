import React, { Component } from 'react';
import { StatusBar, View, Text, Image, TouchableOpacity, SafeAreaView, Linking } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import connect from './connect';
import styles from './styles';
import globalStyles from '../../constants/globalStyles';
import Colors from '../../constants/colors';
import Header from '../../components/Header';
import { getResponsiveHeight, getResponsiveWidth } from '../../helper/utils';
import { RenderItemWithTime, RenderItemWithDateTime } from '../../components/ItemRenderComponents';
import CallModalScreen from '../call';

class AboutScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            callModalVisible: false,
        };
    }

    render() {
        const { callModalVisible } = this.state;

        return (
            <Container style={globalStyles.tabContainer}>
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor={Colors.White}
                />
                <SafeAreaView>
                    <View style={styles.headerContainer}>
                        <View style={styles.profileContainer}>
                            <View style={styles.container}>
                                <Text style={styles.title}>Afiliados</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.familyContainer}>
                        <View style={styles.familyContent}>
                            <Icon name='my-location' type='MaterialIcons' style={styles.timeDateIcon} />
                            <View style={styles.familyContentContainer}>
                                <Text style={styles.familyTitle}>Localización</Text>
                            </View>
                            <View style={styles.familyIconContainer}>
                                <Text style={styles.familyTitle}>ESCUINTLA</Text>
                                <Icon name='chevron-down' type='MaterialCommunityIcons' style={styles.timeDateIcon} />
                            </View>
                        </View>
                        <View style={styles.itemSeparator}></View>
                        <View style={styles.familyContent}>
                            <Icon name='heartbeat' type='FontAwesome5' style={[styles.timeDateIcon, { fontSize: 25, paddingHorizontal: 2 }]} />
                            <View style={styles.familyContentContainer}>
                                <Text style={styles.familyTitle}>Clase afiliado</Text>
                            </View>
                            <View style={styles.familyIconContainer}>
                                <Text style={styles.familyTitle}>TODOS</Text>
                                <Icon name='chevron-down' type='MaterialCommunityIcons' style={styles.timeDateIcon} />
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
                <Content>
                    <View style={styles.listContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AboutDetail')} style={styles.itemContainer}>
                            <View style={styles.itemTimeContent}>
                                <Text style={styles.itemTitle}>Farmacia</Text>
                                <Text style={styles.itemSubTextTitle}>Farmacias Cruz Verde</Text>
                                <Text style={styles.itemSubTitle}>Palin, Escuintla</Text>
                            </View>
                            <View style={styles.timeContainer}>
                                <Icon name='briefcase-medical' type='FontAwesome5' style={styles.timeDateIcon} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.itemContainer}>
                            <View style={styles.itemTimeContent}>
                                <Text style={styles.itemTitle}>Clínica</Text>
                                <Text style={styles.itemSubTextTitle}>Dr. Chapatin</Text>
                                <Text style={styles.itemSubTitle}>Palin, Escuintla</Text>
                            </View>
                            <View style={styles.timeContainer}>
                                <Icon name='stethoscope' type='FontAwesome5' style={styles.timeDateIcon} />
                            </View>
                        </View>
                        <View style={styles.itemContainer}>
                            <View style={styles.itemTimeContent}>
                                <Text style={styles.itemTitle}>Ambulancia</Text>
                                <Text style={styles.itemSubTextTitle}>Alerta Médica</Text>
                                <Text style={styles.itemSubTitle}>Palin, Escuintla</Text>
                            </View>
                            <View style={styles.timeContainer}>
                                <Icon name='ambulance' type='FontAwesome' style={styles.timeDateIcon} />
                            </View>
                        </View>
                    </View>
                </Content>
                <View style={globalStyles.phoneBtnContainer}>
                    <TouchableOpacity onPress={() => this.setState({ callModalVisible: true })} style={globalStyles.phoneBtnContent}>
                        <Icon name='phone' type='FontAwesome5' style={globalStyles.phoneBtnIcon} />
                    </TouchableOpacity>
                </View>
                <CallModalScreen
                    callModalVisible={callModalVisible}
                    onCloseModal={() => this.setState({ callModalVisible: false })}
                />
            </Container>
        );
    }
}

export default connect(AboutScreen);