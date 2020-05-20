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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.TintColor,
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: Colors.LightGray,
        textAlign: 'center'
    },

    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 30,
        borderBottomColor: Colors.MiduamGray,
        borderBottomWidth: 1,
        marginBottom: 40,
    },
    itemTimeContent: { flex: 1, paddingHorizontal: 10, justifyContent: 'center', paddingVertical: 8 },
    itemTitle: { color: Colors.Black, fontSize: 18, fontWeight: '500', marginTop: 20 },
    itemSubTextTitle: { color: Colors.TintColor, fontSize: 18, marginBottom: 2 }, 
    itemSubTitle: { color: Colors.LightGray, fontWeight: '500', fontSize: 16 },
    timeContainer: { alignItems: 'flex-end', justifyContent: 'center', paddingVertical: 5, borderTopRightRadius: 5, borderBottomRightRadius: 5 },
    timeDateIcon: { color: Colors.LightGray, paddingVertical: 5 },
})