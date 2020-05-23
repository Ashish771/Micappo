import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: { 
        flexDirection: 'row', 
        paddingHorizontal: 10, 
        paddingVertical: 10 
    },
    profileContainer: { 
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: 10 
    },
    profileImage: {
        height: 80,
        width: 80,
        borderRadius: 80
    },
    profileInfoContainer: { 
        flex: 1, 
        paddingHorizontal: 20 
    },
    headerBtnContainer: { 
        justifyContent: 'space-between', 
        alignItems: 'center' 
    },
    headerSettingIcon: { 
        color: Colors.TextColor 
    },
    headerIcon: { 
        color: Colors.TextColor, 
        fontSize: 45 
    },
    familyContainer: {  
        backgroundColor: Colors.TintColor,
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.TintColor
    },
    itemContainer: { 
        paddingHorizontal: 20, 
        paddingVertical: 10 
    },
    subTitle: {
        fontSize: 16,
        color: Colors.DarkTextColor,
        fontWeight: '600'
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
    }
})