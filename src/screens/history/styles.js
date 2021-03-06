import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: { 
        flexDirection: 'row', 
        paddingHorizontal: 10, 
        paddingVertical: 10,
        marginHorizontal: 10
    },
    profileContainer: { 
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: 10,
        paddingBottom: 20
    },
    headerBtnContainer: { 
        position: 'absolute', 
        right:0, 
        bottom: 0 
    },
    headerBtnIcon: { 
        color: Colors.TextColor, 
        fontSize: 45 
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.TintColor
    },
    familyContainer: { 
        backgroundColor: Colors.TintColor 
    },
    familyContent: { 
        paddingHorizontal: 20,
        paddingTop: 10  
    },
    familyContentContainer: { 
        paddingVertical: 10, 
        paddingHorizontal: 20 
    },
    familyImage: { 
        height: 55, 
        width: 55, 
        borderRadius: 55, 
        backgroundColor: Colors.MiduamGray 
    },
    item: {
        marginHorizontal: 15
    },
    subTitle: {
        fontSize: 16,
        color: Colors.DarkTextColor,
        fontWeight: '600',
        textAlign: 'center'
    },
    familyTitle: {
        fontSize: 16,
        color: Colors.White,
        fontWeight: '600'
    },
    familySubTitle: {
        marginTop: 10,
        fontSize: 15,
        color: Colors.White,
        fontWeight: '600',
        textAlign: 'center'
    },
    listContainer: { 
        paddingHorizontal: 20, 
        paddingVertical: 10 
    },
    filterContainer: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: 10, 
        marginHorizontal: 20, 
        paddingVertical: 5, 
        borderBottomColor: Colors.TintColor, 
        borderBottomWidth: 1 
    },
    filterContent: {
        flexDirection: 'row', alignItems: 'center'
    },
    filterTitle: {
        fontSize: 18,
        color: Colors.TintColor,
        fontWeight: '600'
    },
    filterSubTitle: {
        fontSize: 16,
        color: Colors.TintColor,
        fontWeight: '400'
    },
    filterIcon: {
        color: Colors.TintColor, 
        fontSize: 40 
    }
})