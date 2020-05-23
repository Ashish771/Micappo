import React, { Component } from 'react';
import { StatusBar, Animated, View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import AnimatedHideView from 'react-native-animated-hide-view';
import connect from './connect';
import styles from './styles';
import globalStyles from '../../constants/globalStyles';
import Colors from '../../constants/colors';
import Header from '../../components/Header';
import { getResponsiveHeight, getResponsiveWidth } from '../../helper/utils';
import { RenderItemWithTime, RenderItemWithDateTime } from '../../components/ItemRenderComponents';
import CallModalScreen from '../call';

class ReminderScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFamilyShow: true,
            animationValue: new Animated.Value(142.5),
            callModalVisible: false,
        };
    }

    toggleAnimation = () => {
        const { isFamilyShow, animationValue } = this.state;

        if (isFamilyShow) {
            Animated.timing(animationValue, {
                toValue: 0,
                timing: 1000
            }).start(() => {
                this.setState({ isFamilyShow: false })
            });
        }
        else {
            Animated.timing(animationValue, {
                toValue: 142.5,
                timing: 1000
            }).start(() => {
                this.setState({ isFamilyShow: true })
            });
        }
    }

    render() {
        const { isFamilyShow, animationValue, callModalVisible } = this.state;

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
                                <Text style={styles.title}>Examenes y Recetas</Text>
                                <Text style={styles.subTitle}>Jerry Marroquin</Text>
                            </View>
                        </View>
                        <View style={styles.headerBtnContainer}>
                            <TouchableOpacity onPress={() => this.toggleAnimation()}>
                                <Icon name={isFamilyShow ? 'chevron-up' : 'chevron-down'} type='MaterialCommunityIcons' style={styles.headerBtnIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
                <AnimatedHideView
                    visible={isFamilyShow}
                    duration={500}
                >
                    <Animated.View style={[styles.familyContainer, { height: animationValue }]}>
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
                    </Animated.View>
                </AnimatedHideView>
                <Content>
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

export default connect(ReminderScreen);