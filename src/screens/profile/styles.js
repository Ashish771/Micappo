import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
import { getResponsiveWidth } from '../../helper/utils';

export default StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
        flex: 1
    }, 
    content: {
        paddingVertical: 20
    },  
    scene: { 
        flex: 1 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.TintColor,
        textAlign: 'center'
    },
    headerContainer: { 
        width: getResponsiveWidth(100), 
        marginBottom: 30 
    },
    profileContainer: { 
        paddingHorizontal: 10, 
        paddingVertical: 10 
    },
    profileContent: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginHorizontal: 50 
    },
    profileImage: {
        height: 80,
        width: 80,
        borderRadius: 80
    },
    profileInfoContent: { 
        flex: 1, 
        paddingHorizontal: 20 
    },
    profileTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.TintColor
    },
    profileSubTitle: {
        fontSize: 16,
        color: Colors.DarkTextColor,
        fontWeight: '600',
        paddingVertical: 5
    },
    itemTitle: {
        color: Colors.TintColor,
        fontSize: 17,
        fontWeight: '500'
    },
    itemSubTitle: {
        color: Colors.ProfileTextColor,
        fontSize: 17,
        fontWeight: '500'
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
        fontWeight: '500', 
        fontSize: 17 
    },
    itemContainer: { 
        paddingVertical: 30 
    },
    itemContent: { 
        paddingVertical: 15, 
        flexDirection: 'row', 
        alignItems: 'center',
        paddingHorizontal: 10 
    },
    descContainer: { 
        paddingHorizontal: 10, 
        paddingVertical: 40 
    },
    descContent: { 
        paddingHorizontal: 10, 
        paddingVertical: 5 
    },
})