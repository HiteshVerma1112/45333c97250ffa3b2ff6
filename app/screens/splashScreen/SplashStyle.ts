import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale, { verticalScale } from '../../utils/Scale';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({

    container: {
        flex: 1,

    },

    bgImg: {
        height: scale(812),
        width: scale(375),
    },

    headingText: {
        fontSize: scale(30),
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: verticalScale(220),
        color: '#f7f7f7',
        lineHeight: scale(30),
    },
    
    headingTextForNew: {
        fontSize: scale(25),
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: scale(10),
        color: '#000',
        lineHeight: scale(30),
    },

});
