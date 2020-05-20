import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import globalStyles from '../constants/globalStyles';
import Colors from '../constants/colors';

export class RenderItemWithTime extends Component {
    render() {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.itemTimeContent}>
                    <Text style={styles.itemTitle}>Proximo medicamento</Text>
                    <Text style={styles.itemSubTitle}>Acetaminofen 500mg</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Icon name='alarm' type='MaterialCommunityIcons' style={styles.timeDateIcon} />
                    <Text style={styles.timeDateText}>14:00</Text>
                </View>
            </View>
        )
    }
}

export class RenderItemWithDateTime extends Component {
    render() {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.itemDateTimeContent}>
                    <Text style={styles.itemTitle}>Próxima cita</Text>
                    <Text style={styles.itemSubTitle}>Dr. Chapatin</Text>
                </View>
                <View style={styles.itemDateTimeIconContainer}>
                    <View style={styles.itemDateContent}>
                        <Icon name='calendar-month' type='MaterialCommunityIcons' style={styles.timeDateIcon} />
                        <Text style={styles.timeDateText}>22/1/2020</Text>
                    </View>
                    <View style={styles.itemDateContent}>
                        <Icon name='alarm' type='MaterialCommunityIcons' style={styles.timeDateIcon} />
                        <Text style={styles.timeDateText}>14:00</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export class RenderItemWithDetail extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DoctorDetail')} style={styles.itemContainer}>
                <View style={styles.itemDetailContainer}>
                    <View style={styles.itemInsideContainer}>
                        <Text style={styles.itemTitle}>Ultima llamada</Text>
                        <Icon name='long-arrow-right' type='FontAwesome' style={styles.itemSortDefineIcon} />
                    </View>
                    <View style={styles.itemImageContainer}>
                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsJ5gR1bbR4bBk9BcDIYSVhVUdK5eGAUwri1P6hpZh-3LvlTpX&usqp=CAU' }}
                            style={styles.image}
                        />
                        <View style={styles.itemImageInfoContent}>
                            <Text style={styles.itemImageTitle}>Dr. Sergio Paiz</Text>
                            <Text style={styles.itemSubTitle}>Padiatra</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.itemImageDateInfo}>
                    <Text style={styles.itemDateTitle}>22/10/2018</Text>
                    <Text style={styles.itemSubTitle}>11:23</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export class RenderItemWithDetailWithBtn extends Component {
    render() {
        return (
            <View style={styles.mainItemContainer}>
                <View style={styles.itemInsideContainer}>
                    <View style={styles.itemInfoContainer}>
                        <View style={styles.itemInsideContainer}>
                            <Text style={styles.itemTitle}>Ultima llamada</Text>
                            <Icon name='long-arrow-right' type='FontAwesome' style={styles.itemSortDefineIcon} />
                        </View>
                        <View style={styles.itemImageContainer}>
                            <Image
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsJ5gR1bbR4bBk9BcDIYSVhVUdK5eGAUwri1P6hpZh-3LvlTpX&usqp=CAU' }}
                                style={styles.image}
                            />
                            <View style={styles.itemImageInfoContent}>
                                <Text style={styles.itemImageTitle}>Dr. Sergio Paiz</Text>
                                <Text style={styles.itemSubTitle}>Padiatra</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.itemImageDateInfo}>
                        <Text style={styles.itemDateTitle}>22/10/2018</Text>
                        <Text style={styles.itemSubTitle}>11:23</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <TouchableOpacity style={globalStyles.btnContainer}>
                        <Text style={globalStyles.btnText}>Ver Diagnóstico</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


export class RenderItemWithDateTimeWithBtn extends Component {
    render() {
        return (
            <View style={styles.mainItemContainer}>
                <View style={styles.itemInsideContainer}>
                    <View style={styles.itemDateTimeContent}>
                        <Text style={styles.itemTitle}>Próxima cita</Text>
                        <Text style={styles.itemSubTitle}>Dr. Chapatin</Text>
                    </View>
                    <View style={styles.itemDateTimeIconContainer}>
                        <View style={styles.itemDateContent}>
                            <Icon name='calendar-month' type='MaterialCommunityIcons' style={styles.timeDateIcon} />
                            <Text style={styles.timeDateText}>22/1/2020</Text>
                        </View>
                        <View style={styles.itemDateContent}>
                            <Icon name='alarm' type='MaterialCommunityIcons' style={styles.timeDateIcon} />
                            <Text style={styles.timeDateText}>14:00</Text>
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <TouchableOpacity style={globalStyles.btnContainer}>
                        <Text style={globalStyles.btnText}>Ver Diagnóstico</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export class RenderItemDocument extends Component {
    render() {
        return (
            <View style={styles.addDocumentContainer}>
                <View style={styles.addDocumentContent}>
                    <Text style={styles.addDocumentText}>Ver receta</Text>
                    <Text style={styles.addDocumentSubText}>Caso #3245000</Text>
                    <Text style={styles.addDocumentSubText}>Caso 22/10/2020</Text>
                </View>
                <Icon name='file-document' type='MaterialCommunityIcons' style={styles.addDocumentIcon} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.White,
        borderColor: Colors.MiduamGray,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },

    mainItemContainer: {
        backgroundColor: Colors.White,
        borderColor: Colors.MiduamGray,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    itemInsideContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemTimeContent: { flex: 1, paddingHorizontal: 15, justifyContent: 'center', paddingVertical: 15 },
    itemTitle: { color: Colors.Black, fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
    itemSubTitle: { color: Colors.LightGray, fontWeight: '600', fontSize: 16 },
    timeContainer: { alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.TintColor, paddingHorizontal: 15, paddingVertical: 5, borderTopRightRadius: 5, borderBottomRightRadius: 5 },
    timeDateIcon: { color: Colors.White, paddingVertical: 5 },
    timeDateText: { color: Colors.White, fontSize: 16, paddingVertical: 5 },
    itemDateTimeContent: { flex: 1, paddingHorizontal: 15, justifyContent: 'center' },
    itemDateTimeIconContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.TintColor, borderTopRightRadius: 5, borderBottomRightRadius: 5 },
    itemDateContent: { alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15, paddingVertical: 5 },
    itemDetailContainer: { flex: 1, paddingHorizontal: 15, justifyContent: 'center', paddingVertical: 10 },
    itemSortDefineIcon: { color: 'green', paddingLeft: 10, fontSize: 25, top: -2 },
    itemImageContainer: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
    image: { height: 40, width: 40, borderRadius: 40 },
    itemImageInfoContent: { flex: 1, paddingHorizontal: 10 },
    itemImageTitle: { color: Colors.TintColor, fontWeight: '600', fontSize: 18 },
    itemImageDateInfo: { alignItems: 'flex-end', justifyContent: 'center', paddingHorizontal: 15, paddingVertical: 5 },
    itemDateTitle: { color: Colors.LightGray, fontWeight: '600', fontSize: 16, marginBottom: 5 },
    itemInfoContainer: { flex: 1, paddingHorizontal: 15, justifyContent: 'center', paddingTop: 15 },

    addDocumentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15, 
        backgroundColor: Colors.TintColor,
        borderColor: Colors.MiduamGray,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    addDocumentContent: { 
        flex: 1, 
    },
    addDocumentText: { 
        color: Colors.White, 
        fontSize: 17, 
        fontWeight: 'bold',
    },
    addDocumentSubText: { 
        color: Colors.DarkWhite, 
        fontSize: 14, 
        fontWeight: '500', 
        marginTop: 3
    },
    addDocumentIcon: { 
        color: Colors.White,
        fontSize: 40,
        marginHorizontal: 5
    }
});