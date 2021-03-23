import { StyleSheet } from 'react-native';
import scale, { verticalScale } from '../../utils/Scale';

export default StyleSheet.create({

    containerBg: {
        flex: 1,
        backgroundColor: '#bdccd9'
    },

    detailText: {
        fontSize: scale(16),
        marginTop: scale(2),
        padding: scale(10),
        color: '#0a2740'
    }

});