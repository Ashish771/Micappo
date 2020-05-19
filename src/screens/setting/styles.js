import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export default StyleSheet.create({
    container: { 
        flex: 1 
    },
    contentContainer: {
        paddingVertical: 20,
        flex: 1
    },
    itemsContainer: { 
        paddingVertical: 30 
    },
    itemContainer: { 
        paddingVertical: 15, 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingRight: 20,
        paddingLeft: 10 
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
        color: Colors.TintColor
    },
})