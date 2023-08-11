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
import img from '../assets/splash.png';
import {useNavigation} from '@react-navigation/native';
// const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

export default function Introduction() {
  const navigation = useNavigation();
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
          onPress={() => navigation.replace('Home')}>
          <Text style={styles.textEvent}>Continue</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appBarHorizontial: {
    marginHorizontal: 23,
    marginTop: 18,
  },
  textHeader: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 50,
    textAlign: 'center',
    color: 'black',
  },
  textDescription: {
    marginTop: 18,
    fontFamily: 'Montserrat-Regural',

    fontSize: 18,
    textAlign: 'center',

    color: 'black',
  },
  textEvent: {
    fontSize: 18,
    fontWeight: '500',
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
    backgroundColor: '#fa2dd0',
    padding: 15,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 10,
    borderRadius: 15,
  },
});
