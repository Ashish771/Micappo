import React, { Component } from 'react';
import { StatusBar, View, Text, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import connect from './connect';
import styles from './styles';
import globalStyles from '../../constants/globalStyles';
import Colors from '../../constants/colors';
import Header from '../../components/Header';
import { getResponsiveHeight, getResponsiveWidth } from '../../helper/utils';
import { RenderItemWithTime, RenderItemWithDateTime } from '../../components/ItemRenderComponents';

class ReminderScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFamilyShow: false
        };
    }

    render() {
        const { isFamilyShow } = this.state;

        return (
            <Container style={globalStyles.tabContainer}>
                <Content>
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
                    <View style={styles.listContainer}>
                        <RenderItemWithTime />
                        <RenderItemWithDateTime />
                        <View style={styles.addReminderContainer}>
                            <View style={styles.addReminderContent}>
                                <Text style={styles.addReminderText}>Nuevo recordatorios</Text>
                                <Icon name='alarm-plus' type='MaterialCommunityIcons' style={styles.addReminderIcon} />
                            </View>
                        </View>
                    </View>
                </Content>
                <View style={globalStyles.phoneBtnContainer}>
                    <TouchableOpacity style={globalStyles.phoneBtnContent}>
                        <Icon name='phone' type='FontAwesome5' style={globalStyles.phoneBtnIcon} />
                    </TouchableOpacity>
                </View>
            </Container>
        );
    }
}

export default connect(ReminderScreen);