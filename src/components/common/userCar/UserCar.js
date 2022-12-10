import {
  FlatList,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Box, Text, Button} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import color from '../../../../color/color';
import {useNavigation} from '@react-navigation/core';
import {InteractionManager, ActivityIndicator} from 'react-native';

let brandImage = [
  {
    id: '1',
    name: 'Volkswagen',
    image: 'https://www.pngmart.com/files/22/Nissan-Juke-PNG-Photo.png',
  },
  {
    id: '12',
    name: 'Nissan',
    image: 'https://www.pngmart.com/files/22/Nissan-Juke-PNG-Photo.png',
  },
];

const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

const UserCar = props => {
  const navigation = useNavigation();

  const renderItem = item => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        // @ts-ignore
        onPress={() => navigation.navigate('ServiceScreen', null)}>
        <Box px={3} flexDirection={'row'}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#f0faff', '#f0faff']}
            style={styles.linearGradient}>
            <Box style={styles.center}>
              <View style={styles.ImageContainer}>
                <Image
                  style={styles.ImageStyle}
                  source={{
                    uri: item.item.image,
                  }}
                />
              </View>
              <Box w={'100%'}>
                {/* <Text
                  color={'#000'}
                  fontSize="md"
                  fontFamily={'MPLUSRounded1c'}
                  fontStyle="normal"
                  fontWeight={600}>
                  Premium car wash
                </Text> */}
                <Text color={'#000'}></Text>
                <Button style={styles.button}>Book your appointment</Button>
              </Box>
            </Box>
          </LinearGradient>
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    <Box style={styles.mainContainer}>
      <FlatList
        data={brandImage}
        renderItem={item => renderItem(item)}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </Box>
  );
};

export default UserCar;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  linearGradient: {
    width: width / 2,
    height: height / 3.8,
    borderRadius: 25,
    shadowOffset: {width: -2, height: 2},
    shadowColor: '#bdbdbd',
    shadowOpacity: 5,
    shadowRadius: 2,
    elevation: 3,
    justifyContent: 'space-evenly',
    overflow: 'hidden',
  },
  ImageContainer: {
    width: '180%',
    height: '70%',
    left: -15,
    // backgroundColor: 'red',
  },
  ImageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    overflow: 'hidden',
    transform: [
      // {rotateX: '180deg'}, //horizontally
      {rotateY: '180deg'}, //vertically
      // {scaleX: -1}, //horizontally
      // {scaleY: -1} //vertically
    ],
  },
  textContainer: {
    fontWeight: '500',
    left: -35,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#181818',
    // elevation: 3,
    width: width / 2,
    // top: -10,
    // left: width - 256,
    // borderBottomRightRadius: 25,
    height:50,
    // borderTopLeftRadius: 30,
  },
  center: {
    justifyContent: 'space-evenly',
  },
  offerImage: {
    width: '10%',
    height: '10%',
    resizeMode: 'contain',
  },
});
