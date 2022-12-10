import {FlatList, StyleSheet, View, Image} from 'react-native';
import * as React from 'react';
import {Box, Text} from 'native-base';
import {Dimensions} from 'react-native';
import color from '../../../../color/color';

import {useRef} from 'react';

const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

let brandImage = [
  {
    color: '#e7f7ff',
    id: '1',
    name: 'Car Wash',
    image:
      'https://cdn-icons.flaticon.com/png/512/3626/premium/3626863.png?token=exp=1659110197~hmac=0a18dd000bc44c7ca4525d1e37174e14',
  },
  {
    color: '#fff7ee',
    id: '12',
    name: 'Oil Changes',
    image: 'https://cdn-icons-png.flaticon.com/512/2481/2481442.png',
  },
  {
    color: '#e9ebf7',
    id: '13',
    name: 'Tyer change',
    image: 'https://cdn-icons-png.flaticon.com/128/1505/1505467.png',
  },
  {
    color: '#e7f7ff',
    id: '14',
    name: 'Spray paint',
    image:
      'https://cdn-icons.flaticon.com/png/128/3627/premium/3627979.png?token=exp=1659111785~hmac=0fcb9bc4faaca2b6b11eb58345712d51',
  },
  {
    color: '#e7f7ff',
    id: '15',
    name: 'Battery',
    image: 'https://cdn-icons-png.flaticon.com/128/6674/6674685.png',
  },
  {
    color: '#e7f7ff',
    id: '16',
    name: 'Engin',
    image: 'https://cdn-icons-png.flaticon.com/128/2061/2061956.png',
  },
];

const renderItem = (item, ref) => {
  return (
    <Box
      px={3}
      justifyContent={'center'}
      alignContent={'center'}
      alignItems={'center'}>
      <View
        style={{...styles.linearGradient, backgroundColor: item.item.color}}>
        <View style={styles.ImageContainer}>
          <Image
            style={styles.ImageStyle}
            source={{
              uri: item.item.image,
            }}
          />
        </View>
      </View>
      <View style={styles.TextContainer}>
        <Text
          width={20}
          fontSize="sm"
          style={{textAlign: 'center'}}
          fontFamily={'MPLUSRounded1c'}
          fontStyle="normal"
          fontWeight={500}>
          Washing
        </Text>
      </View>
    </Box>
  );
};

const BrandFlatList = () => {
  const ref = useRef(null);

  return (
    <Box top={-10}>
      <Text
        // fontFamily={'MPLUSRounded1c'}
        fontSize="lg"
        color="#646564"
        mx={5}
        my={2}
        fontWeight={600}>
        TOP BRAND
      </Text>

      <FlatList
        horizontal={true}
        data={brandImage}
        renderItem={item => renderItem(item, ref)}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};

export default BrandFlatList;

const styles = StyleSheet.create({
  parentElement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ImageContainer: {
    width: '60%',
    height: '60%',
  },
  ImageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 2,
  },
  linearGradient: {
    width: 65,
    height: 65,
    margin: 1,
    borderRadius: 60,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: -2, height: 2},
    shadowColor: '#757575',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 9,
  },
  FlatListShadow: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    width: '100%',
    height: 200,
    flex: 1,
  },
  TextContainer: {
    paddingTop: 5,
    justifyContent: 'center',
  },
});
