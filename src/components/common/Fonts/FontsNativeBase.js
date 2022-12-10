// @ts-nocheck
import {NativeBaseProvider, extendTheme} from 'native-base';

const themeNative = extendTheme({
  fontConfig: {
    NanumBrushScript: {
      100: {
        normal: 'NanumBrushScript-Regular',
        italic: 'NanumBrushScript-Regular',
      }
    },
    PalanquinDark: {
      300: {
        normal: 'PalanquinDark-Regular',
        italic: 'PalanquinDark-Regular',
      },
      400: {
        normal: 'PalanquinDark-Medium',
        italic: 'PalanquinDark-Medium',
      },
      500: {
        normal: 'PalanquinDark-SemiBold',
      },
      600: {
        normal: 'PalanquinDark-Bold',
        italic: 'PalanquinDark-Bold',
      },
    },
    MPLUSRounded1c: {
      100: {
        normal: 'MPLUSRounded1c-Thin',
        italic: 'MPLUSRounded1c-Thin',
      },
      200: {
        normal: 'MPLUSRounded1c-Light',
        italic: 'MPLUSRounded1c-Light',
      },
      300: {
        normal: 'MPLUSRounded1c-Medium',
        italic: 'MPLUSRounded1c-Medium',
      },
      400: {
        normal: 'MPLUSRounded1c-Regular',
        italic: 'MPLUSRounded1c-Regular',
      },
      500: {
        normal: 'MPLUSRounded1c-Bold',
      },
      600: {
        normal: 'MPLUSRounded1c-ExtraBold',
        italic: 'MPLUSRounded1c-Black',
      }
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    PalanquinDark: 'PalanquinDark',
    NanumBrushScript: 'NanumBrushScript',
    MPLUSRounded1c:'MPLUSRounded1c'
  },
});

export default themeNative;
