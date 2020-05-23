import React, { Component } from 'react';
import { StatusBar, View, Text, Modal, TouchableOpacity, FlatList, SafeAreaView, Image } from 'react-native';
import { Container, Content, Icon, Switch } from 'native-base';
import connect from './connect';
import styles from './styles';
import globalStyles from '../../constants/globalStyles';
import Colors from '../../constants/colors';
import { getResponsiveWidth, getResponsiveHeight } from '../../helper/utils';

class CallModalScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notificationSwitch: false,
            localizationSwitch: true,
            DATA: [
                {
                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                    title: 'First Item',
                },
                {
                    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                    title: 'Second Item',
                },
                {
                    id: '58694a0f-3da1-471f-bd96-145571e29d72',
                    title: 'Third Item',
                },
            ]
        };
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Image
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsJ5gR1bbR4bBk9BcDIYSVhVUdK5eGAUwri1P6hpZh-3LvlTpX&usqp=CAU' }}
                    style={styles.itemImage}
                />
            </View>
        );
    }

    render() {
        const { DATA } = this.state;
        const { callModalVisible, onCloseModal } = this.props;

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={callModalVisible}
            >
                <Container style={globalStyles.container}>
                    <StatusBar
                        barStyle='dark-content'
                        backgroundColor={Colors.Background}
                    />
                    <SafeAreaView style={styles.container}>
                        <View style={styles.contentContainer}>
                            <View>
                                <TouchableOpacity onPress={() => onCloseModal()} style={globalStyles.backBtnContainer}>
                                    <Icon name='chevron-down' type='Entypo' style={globalStyles.backBtnIcon} />
                                </TouchableOpacity>
                            </View>
                            <Content contentContainerStyle={{ paddingTop: getResponsiveHeight(10), paddingBottom: getResponsiveHeight(5) }}>
                                <View>
                                    <FlatList
                                        contentContainerStyle={{ paddingHorizontal: getResponsiveWidth(34) }}
                                        data={DATA}
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        renderItem={this.renderItem}
                                        keyExtractor={item => item.id}
                                    />
                                    <View style={{ paddingVertical: getResponsiveHeight(2) }}>
                                        <Text style={styles.title}>Jerry Marroquin</Text>
                                        <Text style={styles.subTitle}>Ariseguros</Text>
                                    </View>
                                    <View style={{ paddingVertical: getResponsiveHeight(4) }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: getResponsiveHeight(2) }}>
                                            <View style={{ flex: 1, alignItems: 'center' }}>
                                                <TouchableOpacity style={[styles.phoneBtnContent, { backgroundColor: 'red' }]}>
                                                    <Icon name='phone' type='FontAwesome5' style={styles.phoneBtnIcon} />
                                                </TouchableOpacity>
                                                <Text style={styles.subTitle}>Ambulancia</Text>
                                            </View>
                                            <View style={{ flex: 1, alignItems: 'center' }}>
                                                <TouchableOpacity style={[styles.phoneBtnContent, { backgroundColor: 'green' }]}>
                                                    <Icon name='phone' type='FontAwesome5' style={styles.phoneBtnIcon} />
                                                </TouchableOpacity>
                                                <Text style={styles.subTitle}>Cabina Médica</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: getResponsiveHeight(4) }}>
                                            <View style={{ flex: 1, alignItems: 'center' }}>
                                                <TouchableOpacity style={styles.phoneBtnContent}>
                                                    <Icon name='phone' type='FontAwesome5' style={styles.phoneBtnIcon} />
                                                </TouchableOpacity>
                                                <Text style={styles.subTitle}>Soporte</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </Content>
                        </View>
                    </SafeAreaView>
                </Container>
            </Modal>
        );
    }
}

export default connect(CallModalScreen);