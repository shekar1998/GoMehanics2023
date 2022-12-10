import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import * as React from 'react';
import {Box, Text, Input, Icon, KeyboardAvoidingView} from 'native-base';
import {Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/dist/EvilIcons';
import color from '../../../../color/color';
import HomePageHeader from '../../common/header/HomePageHeader';
import BrandFlatList from '../../common/flatList/BrandFlatlist';
import {StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomCarousel from './CustomCarousel';
import {useEffect, useImperativeHandle, useRef} from 'react';
import {LogBox} from 'react-native';
import UserCar from '../../common/userCar/UserCar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Rating} from 'react-native-ratings';
import {useHeaderHeight} from '@react-navigation/elements';
import {GoogleSignin, statusCodes} from 'react-native-login-google';
import auth from '@react-native-firebase/auth';
import { Avatar } from 'native-base';

const {width, height} = Dimensions.get('window');
const bgcolor = color.theme;

const HomeScreen = (props, ref) => {
  const [ChangeNumber, setChangeNumber] = React.useState('');
  const inputElement = useRef(null);
  const headerHeight = useHeaderHeight();

  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId:
      '936590408476-iepi6epjt4ct5rdn0dm4uh4nnefqct49.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId:
      '936590408476-iepi6epjt4ct5rdn0dm4uh4nnefqct49.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  });

  useEffect(() => {
    LogBox.ignoreLogs(['Warning: ...']);
    LogBox.ignoreAllLogs(); //Ignore all log notifications
  }, [inputElement]);

  const focusInput = () => {
    inputElement.current.focus();
  };

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info ', userInfo);
      auth()
      .createUserWithEmailAndPassword(userInfo.user.email, 'manju@1998')
      .then(async (authUser) => {
        console.log('User account created & signed in!', authUser);
        // await authUser.user.updateProfile({
        //   displayName:'Manjunath S',
        //   photoURL: ProfileImage
        // })
      });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('user cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
        console.log('operation (f.e. sign in) is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('play services not available or outdated');
      } else {
        // some other error happened
        console.log('some other error happened', error);
      }
    }
  }

  return (
    <ScrollView>
      <Box flex={1}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'light-content'}
          translucent={true}
        />
        <HomePageHeader />
        <Box w={'100%'} h={height} style={styles.subContainer}>
          {/* <Box px={4}>
            <Text
              fontSize="sm"
              fontFamily={'MPLUSRounded1c'}
              fontStyle="normal"
              color={bgcolor.greyColor}
              fontWeight={600}>
              Manjunath S
            </Text>
            <Text
              fontSize="xl"
              fontFamily={'MPLUSRounded1c'}
              fontStyle="normal"
              color={bgcolor.textColor}
              fontWeight={600}>
              DRIVE IN, GET WASH, BE HAPPY!
            </Text>
          </Box> */}
          <Input
            w={{
              base: '92%',
              md: '25%',
            }}
            h={{
              base: '7%',
              md: '25%',
            }}
            color={'black'}
            fontSize={12}
            borderRadius={10}
            ref={inputElement}
            borderWidth={0}
            alignSelf={'center'}
            margin={3}
            backgroundColor={'rgb(236, 236, 236)'}
            // style={styles.searchBox}
            InputRightElement={
              <Icon
                style={{marginRight: 5}}
                as={<MaterialIcons name="search" />}
                size={8}
                ml="2"
                color="muted.400"
              />
            }
            placeholder="Name"
          />

          <Button
            title="Google Sign-In"
            onPress={() =>
              onGoogleButtonPress().then(() =>
                console.log('Signed in with Google!'),
              )
            }
          />
          <Avatar bg="green.500" width={100} height={100} source={{
      uri: "https://ucarecdn.com/ddd76961-e64f-4a70-927c-6c15a4074607/"
    }} />
          {/* <TextInput
            style={styles.searchBox}
            onChangeText={onChangeNumber}
            value={ChangeNumber}
            placeholder="useless placeholder"
            keyboardType="numeric"
          /> */}
          {/* <CustomCarousel /> */}
          {/* <BrandFlatList />
          <UserCar /> */}
        </Box>
      </Box>
     
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  parentElement: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  linearGradient: {
    flex: 1,
  },
  text: {
    color: '#000',
    padding: 30,
    fontFamily: 'NanumBrushScript',
  },
  subContainer: {
    top: -(height * 0.93),
    paddingTop: 15,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  searchBox: {
    backgroundColor: 'rgb(236, 236, 236)',
  },
});

