import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../../themes';

export const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    height: 600,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    justifyContent: 'center',
  },
  imageBackground: {
    width: 500,
    height: 550,
    justifyContent: 'flex-end',
  },
  imageBackgroundTablet: {
    width: '100%',
    height: 250,
    justifyContent: 'flex-end',
  },
  categoryName: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    padding: 20,
    textShadowColor: 'rgba(0,0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6,
  },
  categoryNameTablet: {
    fontSize: 35,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    padding: 20,
    textShadowColor: 'rgba(0,0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6,
  },
});
