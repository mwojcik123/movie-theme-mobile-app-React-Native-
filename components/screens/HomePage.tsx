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
// const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

export default function HomePage() {
  return (
    <SafeAreaView style={tw`h-full`}>
      <StatusBar hidden={false} />
      <Text>asdasdasdasdas</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
});
