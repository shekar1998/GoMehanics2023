import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';
import {Box, AspectRatio, Image, Center, ScrollView, Stack} from 'native-base';
import moment from 'moment';
import {Calendar} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const ServiceScreen = () => {
  const _format = 'YYYY-MM-DD';
  const _today = moment().format(_format);

  let _markedDates = {
    [_today]: {disabled: false},
  };

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  const [isPreview, setIsPreview] = useState(true);
  const [markedDates, setMarkedDates] = useState({
    '2022-08-16': {startingDay: true, color: 'green', selected: true},
    '2022-08-17': {color: 'green', selected: true},
    '2022-08-18': {selected: true, color: 'green'},
    '2022-08-19': {disabled: true, color: 'green', endingDay: true},
  });
  const _serviced_Dates = [
    {
      weekDay: 'Sunday',
      date: '06-08-2022',
      isServiced: true,
    },
    {
      weekDay: 'Monday',
      date: '07-08-2022',
      isServiced: true,
    },
    {
      weekDay: 'Tuesday',
      date: '08-08-2022',
      isServiced: false,
    },
  ];
  const navigation = useNavigation();

  let _markedDay = {};

  _serviced_Dates.map(eachDay => {
    _markedDay[eachDay.date] = {color: 'green', selected: true};
  });

  const [currentDate, setCurrentDate] = useState(null);

  const LoadImage = image => {
    return (
      <Box style={styles.imageContainer}>
        <Image
          source={{
            uri: '',
          }}
          style={styles.ImgBg}
          alt="carImg"
        />
      </Box>
    );
  };

  return (
    <LinearGradient
      start={{x: 0.7, y: 1}}
      end={{x: 0, y: 1}}
      colors={['#fff', '#effcfff5']}
      style={styles.linearGradient}>
      <View style={styles.mainContainer}>
        <Box>
          <Text style={styles.headerText}>Honda City</Text>

          <LoadImage />
          {/* Car SPecifications */}
          <Box style={styles.carSpecContainer}>
            <Text style={styles.headerText}>Car Service details</Text>
            <Stack direction="row" style={styles.stackContainer}>
              <View style={[styles.card]}>
                <Text style={styles.universalHeadingTex}>Last wash on</Text>
                <Text style={{color: '#424347'}}>26-Jul-2022</Text>
              </View>
              <Box style={[styles.card]}>
                <Text style={styles.universalHeadingTex}>Next wash on</Text>
                <Text style={{color: '#424347'}}>27-Jul-2022</Text>
              </Box>
              <Box style={[styles.card]}>
                <Text style={styles.universalHeadingTex}>Total cost</Text>
                <Text style={{color: '#424347'}}>Rs. 320</Text>
              </Box>
            </Stack>
          </Box>
          {/* Car Service details */}
          <View style={[styles.calendarContainer, styles.calendarStyle]}>
            <Text style={styles.headerText}>Car wash details</Text>
            {/* <Calendar markingType={'period'} markedDates={_markedDay} /> */}
          </View>
        </Box>
      </View>
    </LinearGradient>
  );
};

export default ServiceScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  backToHome: {
    top: 10,
    left: 0,
    padding: 10,
    color: '#FFFFFF',
    flex: 1,
  },
  mainContainer: {
    padding: 10,
  },
  topContainer: {
    backgroundColor: 'white',
    height: '35%',
    borderColor: '#00000',
    borderWidth: 1,
  },
  carSpecContainer: {
    height: '30%',
  },
  calendarContainer: {
    flex: 1,
    paddingTop: 30,
  },
  boxRow: {
    borderColor: '#d3d3d3',
    borderRadius: 2,
    color: 'grey',
    height: 80,
    width: 100,
    padding: 5,
    margin: 15,
    maxWidth: 100,
    maxHeight: 100,
    justifyContent: 'center',
    borderWidth: 1,
  },
  card: {
    borderColor: '#d3d3d3',
    borderRadius: 12,
    color: 'grey',
    height: 125,
    width: 125,
    padding: 5,
    margin: 15,
    maxWidth: 150,
    maxHeight: 150,
    justifyContent: 'center',
    borderWidth: 1,
  },
  elevation: {
    shadowColor: '#52006A',
    elevation: 5,
  },
  image: {
    height: 200,
    flex: 1,
    width: undefined,
  },
  iconBg: {
    color: 'black',
  },
  ImgBg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  imageContainer: {
    height: '40%',
    borderRadius: 15,
  },
  stackContainer: {
    height: '30%',
  },

  universalHeadingTex: {
    color: '#4171ed',
    fontWeight: 'bold',
    top: 2,
    left: 1,
    padding: 1,
    fontFamily: 'Inter,sans-serif',
  },
  headerText: {
    color: '#313234',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Inter,sans-serif',
  },
  calendarStyle: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
