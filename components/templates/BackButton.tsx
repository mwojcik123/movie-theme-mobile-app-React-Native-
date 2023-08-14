import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  COLORS,
  SIZES,
  FONTS,
  BORDER_RADIUS,
  MARGIN_PADDING,
} from '../assets/style-theme';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import store from '../store';
import {CLEAR_DETAIL_MOVIE} from '../actions/types';
export default function BackButton() {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity>
      <AntDesign
        style={styles.backButton}
        name="leftcircle"
        color={COLORS.red}
        size={SIZES.size_32}
        onPress={() => {
          navigation.navigate('HomePage');
          store.dispatch({type: CLEAR_DETAIL_MOVIE});
        }}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  backButton: {
    top: 20,
    left: 20,
  },
});
