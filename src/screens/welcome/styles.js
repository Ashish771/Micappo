import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export default StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
        flex: 1
    },
    content: {
        paddingVertical: 5
    },
    imageContainer: {
        alignItems: 'center',
        paddingVertical: 20
    },
    logoImage: {
        height: 200,
        width: '80%'
    },
    descContainer: {
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 30
    },
    descText: {
        fontSize: 18,
        color: Colors.TintColor
    },
    descImage: {
        height: 130,
        width: 130,
        borderRadius: 130
    },
    titleContainer: {
        alignItems: 'center',
        paddingVertical: 10,
        marginBottom: 30
    },
    title: {
        fontSize: 18,
        color: Colors.TintColor,
        marginBottom: 5
    },
    subTitleContainer: {
        alignItems: 'center',
        paddingVertical: 10
    },
    subTitle: {
        fontSize: 16,
        color: Colors.LightGray
    },
    footerContainer: { 
        borderColor: Colors.TintColor, 
        borderWidth: 2, 
        borderRadius: 5, 
        paddingVertical: 8 
    },
    footerBtnText: { 
        fontSize: 18, 
        color: Colors.TintColor, 
        textAlign: 'center' 
    }
})