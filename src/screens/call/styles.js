import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
import { getResponsiveWidth } from '../../helper/utils';

export default StyleSheet.create({
    container: { 
        flex: 1 
    },
    contentContainer: {
        paddingVertical: 20,
        flex: 1
    },
    itemImage: { 
        height: getResponsiveWidth(30),
        width: getResponsiveWidth(30),
        borderRadius: getResponsiveWidth(30)
    },
    itemContainer: { 
        paddingVertical: 10,
        paddingHorizontal: 10 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.TintColor,
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 17,
        fontWeight: '500',
        color: Colors.DarkTextColor,
        textAlign: 'center'
    },

    phoneBtnContent: {
        backgroundColor: Colors.TintColor, 
        height: getResponsiveWidth(16), 
        width: getResponsiveWidth(16), 
        borderRadius: getResponsiveWidth(16), 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: 10
    },
    phoneBtnIcon: {
        color: Colors.White, 
        fontSize: 25
    },
})