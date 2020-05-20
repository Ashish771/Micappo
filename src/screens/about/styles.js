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
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.TintColor
    },
    familyContainer: { 
        paddingVertical: 10, 
        paddingHorizontal: 5,
        backgroundColor: Colors.TintColor 
    },
    familyContent: { 
        paddingHorizontal: 20,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    familyContentContainer: { 
        flex: 1, 
        paddingHorizontal: 10 
    },
    itemSeparator: { 
        backgroundColor: Colors.White, 
        height: 1, 
        marginHorizontal: 20, 
        marginVertical: 10 
    },
    familyIconContainer: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    familyImage: { 
        height: 55, 
        width: 55, 
        borderRadius: 55, 
        backgroundColor: Colors.MiduamGray 
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
    itemTimeContent: { flex: 1, paddingHorizontal: 15, justifyContent: 'center', paddingVertical: 10 },
    itemTitle: { color: Colors.Black, fontSize: 18, fontWeight: 'bold', marginTop: 5 },
    itemSubTextTitle: { color: Colors.TintColor, fontSize: 18, marginBottom: 5 }, 
    itemSubTitle: { color: Colors.LightGray, fontWeight: '600', fontSize: 16 },
    timeContainer: { alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.TintColor, paddingHorizontal: 20, paddingVertical: 30, borderTopRightRadius: 5, borderBottomRightRadius: 5 },
    timeDateIcon: { color: Colors.White, paddingVertical: 5 },
})