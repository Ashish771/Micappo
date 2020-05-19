import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export default StyleSheet.create({
    contentContainer:{
        paddingVertical: 20 
    },
    content:{ 
        paddingVertical: 5 
    },
    headerContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    headerLeft: { 
        flex: 0.2, 
        alignItems: 'center' 
    },
    headerCenter: { flex: 0.6 },
    headerTitle: { fontSize: 20, color: Colors.TintColor, fontWeight: '600', textAlign: 'center' },
    headerRight: { flex: 0.2 },
    headerBtnContainer: { alignItems: 'center', paddingTop: 10, paddingBottom: 30 },
    headerBtn: { backgroundColor: Colors.TintColor, paddingVertical: 5, paddingHorizontal: 20, borderRadius: 50 },
    headerText: { color: Colors.White },
    descText: { marginTop: 20, marginBottom: 10, fontSize: 12, color: Colors.TintColor },
    dropdownContainer: { flexDirection: 'row', alignItems: 'center' },
    dropdownContent: { flex: 1, borderColor: Colors.LightGray, borderRadius: 5 },
    dropdown: { height: 40, borderColor: Colors.LightGray, borderWidth: 2 },
    dropdownIcon: { position: 'absolute', right: 5, top: 3, color: Colors.LightGray },
    footerContainer: { alignItems: 'center', paddingVertical: 10 },
    footerText: { fontSize: 16, color: Colors.TintColor }
})