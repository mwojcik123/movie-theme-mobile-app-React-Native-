import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import img from '../assets/splashDarkTheme.png';
import {
  COLORS,
  SIZES,
  FONTS,
  BORDER_RADIUS,
  MARGIN_PADDING,
} from '../assets/style-theme';

import {useNavigation} from '@react-navigation/native';
// const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

export default function Introduction() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={tw`bg-black h-full`}>
      <StatusBar hidden={true} />
      <ImageBackground source={img} resizeMode="cover" style={styles.image}>
        <View style={styles.appBarHorizontial}>
          <Text style={styles.textHeader}>Expolore new Horizons!</Text>
          <Text style={styles.textDescription}>
            Embark on a captivating cinematic journey and uncover a treasure
            trove of new films. Immerse yourself in diverse genres, explore
            hidden gems, and experience the joy of discovering movies that
            resonate with your unique taste. Your next unforgettable movie
            adventure awaits – let the exploration begin!
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => {
            navigation.replace('Home');
          }}>
          <Text style={styles.textEvent}>Continue</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appBarHorizontial: {
    marginHorizontal: MARGIN_PADDING.mp_24,
    marginTop: MARGIN_PADDING.mp_18,
  },
  textHeader: {
    fontFamily: FONTS.bold,
    // fontWeight: '900',
    fontSize: SIZES.size_50,
    textAlign: 'center',
    color: COLORS.white,
  },
  textDescription: {
    marginTop: MARGIN_PADDING.mp_18,
    fontFamily: FONTS.regular,

    fontSize: SIZES.size_18,
    textAlign: 'center',

    color: COLORS.white,
  },
  textEvent: {
    fontSize: SIZES.size_18,
    color: COLORS.white,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    position: 'relative',
    minWidth: '80%',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.red,
    padding: MARGIN_PADDING.mp_12,
    marginLeft: MARGIN_PADDING.mp_24,
    marginRight: MARGIN_PADDING.mp_24,
    marginBottom: MARGIN_PADDING.mp_10,
    borderRadius: BORDER_RADIUS.radius_10,
  },
});
