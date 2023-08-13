import React from 'react';
import {
  COLORS,
  SIZES,
  FONTS,
  BORDER_RADIUS,
  MARGIN_PADDING,
} from '../assets/style-theme';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

export default function MovieWindow(video: any, func: Function) {
  const navigation = useNavigation<any>();

  const image = `https://image.tmdb.org/t/p/w500${video.backdrop_path}`;

  return (
    <View style={styles.window} key={video.id}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DetailPage'), video.func(video.id);
        }}>
        <Image
          style={styles.cardImage}
          source={{
            uri: image,
          }}
        />

        <Text style={styles.textTitle}>{video.title}</Text>
        <View style={styles.popularityContainer}>
          <AntDesign name="eye" color={COLORS.grey} size={16} />
          <Text style={styles.popularityText}>{video.popularity}</Text>
        </View>
        <View style={styles.popularityContainer}>
          <AntDesign name="star" color={COLORS.gold} size={16} />
          <Text style={styles.popularityText}>({video.vote_average}/10)</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  window: {
    padding: MARGIN_PADDING.mp_8,
    // height: 310,

    width: width / 2,
  },
  cardImage: {
    aspectRatio: 3 / 2,
    borderRadius: BORDER_RADIUS.radius_20,
    backgroundColor: COLORS.grey,
  },
  textTitle: {
    fontFamily: FONTS.light,
    fontSize: SIZES.size_16,
    color: COLORS.white,
    textAlign: 'center',
  },
  appBarHorizontial: {
    marginHorizontal: MARGIN_PADDING.mp_24,
    marginTop: MARGIN_PADDING.mp_18,
  },
  textHeader: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.size_50,
    textAlign: 'center',
    color: COLORS.white,
  },
  popularityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  popularityText: {
    alignItems: 'center',
    fontFamily: FONTS.regular,
    fontSize: SIZES.size_12,
    color: COLORS.white,
  },
  button: {
    position: 'relative',
    width: 100,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.red,
    // padding: MARGIN_PADDING.mp_12,
    // marginLeft: MARGIN_PADDING.mp_24,
    // marginRight: MARGIN_PADDING.mp_24,
    // marginBottom: MARGIN_PADDING.mp_10,
    // borderRadius: BORDER_RADIUS.radius_10,
  },
});
