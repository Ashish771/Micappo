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
        fontWeight: '500',
        color: Colors.TintColor
    },

    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 50,
        borderBottomColor: Colors.MiduamGray,
        borderBottomWidth: 1,
        marginVertical: 8,
    },
    itemTimeContent: { flex: 1, paddingHorizontal: 5, justifyContent: 'center', paddingVertical: 5 },
    itemTitle: { color: Colors.Black, fontSize: 18, fontWeight: '500', marginTop: 5 },
    itemSubTextTitle: { color: Colors.TintColor, fontSize: 18, marginBottom: 5 }, 
    itemSubTitle: { color: Colors.LightGray, fontWeight: '500', fontSize: 16 },
    timeContainer: { alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.TintColor, paddingHorizontal: 20, paddingVertical: 30, borderTopRightRadius: 5, borderBottomRightRadius: 5 },
    timeDateIcon: { color: Colors.White, paddingVertical: 5 },
})