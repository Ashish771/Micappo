import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
import { getResponsiveWidth } from '../../helper/utils';

export default StyleSheet.create({
    scene: { 
        flex: 1 
    },
    tabBar: { 
        flexDirection: 'row', 
        justifyContent: 'center',
        backgroundColor: Colors.White,
        borderRadius: 50,
        marginVertical: 5,
        marginHorizontal: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,   
    },
    tabBarItem: { 
        flex: 1, 
        alignItems: 'center', 
        borderRadius: 50, 
        paddingHorizontal: 10, 
        paddingVertical: 15 
    },
    tabBarText: { 
        fontWeight: '600', 
        fontSize: 17 
    },
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
        backgroundColor: Colors.TintColor,
        marginBottom: 15
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
    addUploadContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
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
    addUploadContent: { 
        flex: 1, 
    },
    addUploadText: { 
        color: Colors.White, 
        fontSize: 17, 
        fontWeight: 'bold'
    },
    addUploadSubText: { 
        color: Colors.DarkWhite, 
        fontSize: 14, 
        fontWeight: '500',
        marginTop: 3
    },
    addUploadIcon: { 
        color: Colors.White,
        fontSize: 50
    }
})