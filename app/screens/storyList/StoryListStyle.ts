import {
  StyleSheet
} from 'react-native';
import scale, { verticalScale } from '../../utils/Scale';

export default StyleSheet.create({

  container: {
    flex: 1
  },

  bgImg:{
    width:scale(375),
    height:scale(812),
  },

  itemCellContainer: {
    backgroundColor: '#6887a5',
    padding: scale(10),
    marginHorizontal: (10),
    marginTop: verticalScale(10),
    justifyContent: 'center',
    borderRadius: scale(8)
  },

  data: {
    fontSize: scale(16),
    marginLeft: scale(14),
    marginBottom: verticalScale(10),
    color: '#f7f7f7'
  },

  activityIndicator: {
    marginBottom: 30,
    marginTop: -50,
    alignItems: 'center'
  },

});