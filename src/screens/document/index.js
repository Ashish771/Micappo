import React, { Component } from 'react';
import { StatusBar, View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import { TabView, SceneMap } from 'react-native-tab-view';
import connect from './connect';
import styles from './styles';
import globalStyles from '../../constants/globalStyles';
import Colors from '../../constants/colors';
import { getResponsiveWidth, WIDTH } from '../../helper/utils';
import { RenderItemDocument } from '../../components/ItemRenderComponents';

class DocumentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: 'Examenes', title: 'Examenes' },
                { key: 'Recetas', title: 'Recetas' }
            ],
            isFamilyShow: false
        };
    }

    ExamenesRoute = ({ route }) => {
        return (
            <View style={styles.scene}>
                <Content contentContainerStyle={styles.listContainer}>
                    <View style={styles.addUploadContainer}>
                        <View style={styles.addUploadContent}>
                            <Text style={styles.addUploadText}>Subir receta</Text>
                            <Text style={styles.addUploadSubText}>Caso #3241134</Text>
                            <Text style={styles.addUploadSubText}>Caso 22/10/2020</Text>
                        </View>
                        <Icon name='arrow-up-bold-circle' type='MaterialCommunityIcons' style={styles.addUploadIcon} />
                    </View>
                    <RenderItemDocument />
                </Content>
            </View>
        )
    }

    RecetasRoute = ({ route }) => {
        return (
            <View style={styles.scene}>
                <Content contentContainerStyle={styles.listContainer}>
                    <View style={styles.addUploadContainer}>
                        <View style={styles.addUploadContent}>
                            <Text style={styles.addUploadText}>Subir receta</Text>
                            <Text style={styles.addUploadSubText}>Caso #3241134</Text>
                            <Text style={styles.addUploadSubText}>Caso 22/10/2020</Text>
                        </View>
                        <Icon name='arrow-up-bold-circle' type='MaterialCommunityIcons' style={styles.addUploadIcon} />
                    </View>
                    <RenderItemDocument />
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
        const { index, routes, isFamilyShow } = this.state;

        const renderScene = SceneMap({
            Examenes: this.ExamenesRoute,
            Recetas: this.RecetasRoute
        });

        return (
            <Container style={globalStyles.tabContainer}>
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor={Colors.White}
                />
                <SafeAreaView style={styles.container}>
                    <View style={styles.headerContainer}>
                        <View style={styles.profileContainer}>
                            <View style={styles.container}>
                                <Text style={styles.title}>Historial de Llamadas y Citas</Text>
                                <Text style={styles.subTitle}>Jerry Marroquin</Text>
                            </View>
                        </View>
                        <View style={styles.headerBtnContainer}>
                            <TouchableOpacity onPress={() => this.setState({ isFamilyShow: !isFamilyShow })}>
                                <Icon name={isFamilyShow ? 'chevron-up' : 'chevron-down'} type='MaterialCommunityIcons' style={styles.headerBtnIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {isFamilyShow &&
                        <View style={styles.familyContainer}>
                            <View style={styles.familyContent}>
                                <Text style={styles.familyTitle}>Dependientes</Text>
                            </View>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={styles.familyContentContainer}
                            >
                                <TouchableOpacity style={styles.item}>
                                    <Image
                                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsJ5gR1bbR4bBk9BcDIYSVhVUdK5eGAUwri1P6hpZh-3LvlTpX&usqp=CAU' }}
                                        style={styles.familyImage}
                                    />
                                    <Text style={styles.familySubTitle}>Ana M.</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item}>
                                    <Image
                                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsJ5gR1bbR4bBk9BcDIYSVhVUdK5eGAUwri1P6hpZh-3LvlTpX&usqp=CAU' }}
                                        style={styles.familyImage}
                                    />
                                    <Text style={styles.familySubTitle}>Ana M.</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item}>
                                    <Image
                                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsJ5gR1bbR4bBk9BcDIYSVhVUdK5eGAUwri1P6hpZh-3LvlTpX&usqp=CAU' }}
                                        style={styles.familyImage}
                                    />
                                    <Text style={styles.familySubTitle}>Ana M.</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    }
                    <View style={styles.container}>
                        <TabView
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            renderTabBar={this._renderTabBar}
                            onIndexChange={(index) => this.onTabPress(index)}
                            initialLayout={{ width: WIDTH }}
                        />
                    </View>
                </SafeAreaView>
                <View style={globalStyles.phoneBtnContainer}>
                    <TouchableOpacity style={globalStyles.phoneBtnContent}>
                        <Icon name='phone' type='FontAwesome5' style={globalStyles.phoneBtnIcon} />
                    </TouchableOpacity>
                </View>
            </Container>
        );
    }
}

export default connect(DocumentScreen);