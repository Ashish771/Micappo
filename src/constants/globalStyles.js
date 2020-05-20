import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import { getResponsiveWidth, getResponsiveHeight } from '../helper/utils';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White
    },
    tabContainer: {
        flex: 1,
        backgroundColor: Colors.White,
        marginBottom: getResponsiveHeight(7.5)
    },
    contentContainer: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        marginTop: 10
    },
    btnContainer: {
        alignItems: 'center',
        backgroundColor: Colors.Background,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5
    },
    btnText: {
        fontSize: 18,
        color: Colors.White
    },
    phoneBtnContainer: {
        position: 'absolute', 
        left: getResponsiveWidth(60) - 75, 
        bottom: 50 
    },
    phoneBtnContent: {
        backgroundColor: Colors.TintColor, 
        height: 70, 
        width: 70, 
        borderRadius: 70, 
        alignItems: 'center', 
        justifyContent: 'center',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 4,
        // },
        // shadowOpacity: 0.32,
        // shadowRadius: 5.46,

        // elevation: 9,
    },
    phoneBtnIcon: {
        color: Colors.White, 
        fontSize: 25
    },

    backBtnContainer: { 
        paddingHorizontal: 15, 
        paddingVertical: 5 
    },
    backBtnIcon: {
        color: Colors.DarkTextColor, 
        fontSize: 40
    }
})