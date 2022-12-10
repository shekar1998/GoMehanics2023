import { StyleSheet, View, Image} from 'react-native';
import * as React from 'react';
import { Box, Text} from 'native-base';
import {Dimensions} from 'react-native';
import color from '../../../../color/color';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');
const bgcolor = color.theme;

const HomePageHeader = () => {
  const mobileWidth = 411.42857142857144;
  const mobileHeight = 864.7619047619048;

  const broderRadius = Math.round(mobileWidth + mobileHeight) / 2;
  const Hwidth = mobileWidth * 0.5;
  const Hheight = mobileWidth * 0.5;

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#396afc', bgcolor.buttonColor]}
      style={styles.parentElement}>
      <Box
        w={'64%'}
        top={-(height * 0.43)}
        alignContent={'center'}
        flexDirection={'row'}
        alignSelf={'center'}
      >
        <View style={styles.IconContainer}>
          <View style={[styles.card]}>
            <Image
              style={styles.ImageContainer2}
              source={{
                uri: 'https://ucarecdn.com/ddd76961-e64f-4a70-927c-6c15a4074607/',
              }}
            />
          </View>
          <Box w={'45%'} justifyContent={'center'}>
            <Text
              fontSize="sm"
              fontFamily={'MPLUSRounded1c'}
              fontStyle="normal"
              color={bgcolor.darktextColor}
              fontWeight={600}>
              Manjunath S
            </Text>
            <Box shadow={5} flexDirection={'row'} justifyContent={'flex-start'}>
              <Text
                fontSize="sm"
                fontFamily={'MPLUSRounded1c'}
                fontStyle="normal"
                color={bgcolor.darkSubText}
                fontWeight={300}>
                #183/1, Nagarbhavi
              </Text>
            </Box>
          </Box>
        </View>
        <Box style={[styles.card,styles.center]}>
          <Image
            style={styles.ImageContainer}
            source={{
              uri: 'https://i.pinimg.com/originals/97/7e/57/977e57043787edecc39eeb55fee3d040.jpg',
            }}
          />
        </Box>
      </Box>
    </LinearGradient>
  );
};

export default HomePageHeader;

const styles = StyleSheet.create({
  parentElement: {
    borderRadius: Math.round(width + height) / 2,
    height: width * 2.189,
    width: width * 2.189,
    alignSelf: 'center',
    top: -(height * 0.5),
    justifyContent: 'flex-end',
  },
  card: {
    borderRadius: 60,
    width: 55,
    height: 55,
  },
  shadowProp: {
    // elevation: 9,
  },
  ImageContainer: {
    width: 48,
    height: 48,
    borderRadius: 50,
    resizeMode: 'contain',
    elevation:3
  },
  ImageContainer2: {
    top: 6.5,
    width: 35,
    height: 37,
  },
  linearGradient: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 70,
    width: 55,
    height: 55,
  },
  headerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 14,
    // backgroundColor: '#000',
    height: height / 8,
    top: -(height / 2.6),
    alignSelf: 'center',
  },
  IconContainer: {
    width: '75%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    // backgroundColor:'red',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  center:{
    
  }
});
