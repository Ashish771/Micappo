import React, { Component } from 'react';
import { StatusBar, View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import { TabView, SceneMap } from 'react-native-tab-view';
import connect from './connect';
import styles from './styles';
import globalStyles from '../../constants/globalStyles';
import Colors from '../../constants/colors';
import { getResponsiveWidth, WIDTH } from '../../helper/utils';

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: 'Perfil', title: 'Perfil' },
                { key: 'Historial', title: 'Historial' }
            ],
        };
    }

    PerfilRoute = ({ route }) => {
        return (
            <View style={styles.scene}>
                <Content style={globalStyles.contentContainer}>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemContent}>
                            <View style={styles.scene}>
                                <Text style={styles.itemTitle}>Fecha de nacimiento</Text>
                            </View>
                            <Text style={styles.itemSubTitle}>22/10/2020</Text>
                        </View>
                        <View style={styles.itemContent}>
                            <View style={styles.scene}>
                                <Text style={styles.itemTitle}>Tipo de Afiliado</Text>
                            </View>
                            <Text style={styles.itemSubTitle}>Seguro MiCOOPE</Text>
                        </View>
                        <View style={styles.content}>
                            <TouchableOpacity style={globalStyles.btnContainer}>
                                <Text style={globalStyles.btnText}>Iniciar sesion</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={globalStyles.btnContainer}>
                                <Text style={globalStyles.btnText}>Iniciar sesion</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
            </View>
        )
    }

    HistorialRoute = ({ route }) => {
        return (
            <View style={styles.scene}>
                <Content style={globalStyles.contentContainer}>
                    <View style={styles.descContainer}>
                        <Text style={styles.itemTitle}>Precondiciones</Text>
                        <View style={styles.descContent}>
                            <Text style={styles.itemSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                        </View>
                    </View>
                </Content>
            </View>
        )
    }

    onTabPress = async (i) => {
        this.setState({ index: i });
    }

    _renderTabBar = props => {
        return (
            <View style={styles.tabBar}>
                {props.navigationState.routes.map((route, i) => {
                    return (
                        <TouchableOpacity
                            key={i}
                            style={[styles.tabBarItem, { backgroundColor: this.state.index == i ? Colors.TintColor : Colors.White }]}
                            onPress={() => this.onTabPress(i)}>
                            <Text style={styles.tabBarText, [{ color: this.state.index == i ? Colors.White : Colors.DarkTextColor }]}>{route.title}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    render() {
        const { index, routes } = this.state;

        const renderScene = SceneMap({
            Perfil: this.PerfilRoute,
            Historial: this.HistorialRoute
        });

        return (
            <Container style={globalStyles.container}>
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor={Colors.Background}
                />
                <SafeAreaView />
                <SafeAreaView style={styles.scene}>
                    <View style={styles.contentContainer}>
                        <View style={styles.headerContainer}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={globalStyles.backBtnContainer}>
                                <Icon name='chevron-left' type='Entypo' style={globalStyles.backBtnIcon} />
                            </TouchableOpacity>
                            <View style={styles.profileContainer}>
                                <View style={styles.profileContent}>
                                    <Image
                                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRd2DlYPgsKtTHvK9_PmvF_QfZMw8erqJxI7gzMU6ozLxW14CRa&usqp=CAU' }}
                                        style={styles.profileImage}
                                    />
                                    <View style={styles.profileInfoContent}>
                                        <Text style={styles.profileTitle}>Jerry Marroquin</Text>
                                        <Text style={styles.profileSubTitle}>Titular</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <TabView
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            renderTabBar={this._renderTabBar}
                            onIndexChange={(index) => this.onTabPress(index)}
                            initialLayout={{ width: WIDTH }}
                        />
                    </View>
                </SafeAreaView>
            </Container>
        );
    }
}

export default connect(ProfileScreen);