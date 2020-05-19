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
        paddingVertical: 10, 
        backgroundColor: Colors.TintColor 
    },
    familyContent: { 
        paddingHorizontal: 20 
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
    addReminderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
    addReminderContent: { 
        flex: 1, 
        flexDirection: 'row', 
        paddingHorizontal: 15, 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingVertical: 20 
    },
    addReminderText: { 
        color: Colors.White, 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 5 
    },
    addReminderIcon: { 
        color: Colors.White, 
        paddingLeft: 10, 
        fontSize: 35, 
        top: -3 
    }
})