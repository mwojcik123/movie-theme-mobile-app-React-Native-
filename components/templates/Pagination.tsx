import React, {useEffect, useState} from 'react';
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

interface Page {
  currentPage: number;
  pages: number;
}

const {width, height} = Dimensions.get('window');
const pagesInList = (pagesNumber: number, currentPageNumber: number) => {
  if (pagesNumber === 1) {
    return [{currentPage: currentPageNumber, page: 1}];
  } else {
    // Tu możesz dodać logikę dla innych przypadków
    // Na razie zwróci pustą tablicę dla prostego przykładu
    return [];
  }
};

export default function Pagination(props: Page) {
  const [pagesList, setPagesList] = useState([]);
  const navigation = useNavigation<any>();
  const visiblePages = [];

  return (
    <View style={styles.paginationContainer}>
      <TouchableOpacity
        style={styles.paginationButtonsCurrent}
        activeOpacity={0.5}>
        <Text style={styles.textEvent}>1</Text>
      </TouchableOpacity>

      {/* {visiblePages.map(page => (
        <TouchableOpacity key={page} onPress={() => console.log(page)}>
          {page}
        </TouchableOpacity>
      ))} */}
    </View>
  );
}

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  paginationButtons: {
    position: 'relative',
    maxWidth: '10%',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.grey,
    padding: MARGIN_PADDING.mp_12,
    marginLeft: MARGIN_PADDING.mp_4,
    marginRight: MARGIN_PADDING.mp_4,
    marginBottom: MARGIN_PADDING.mp_4,
    marginTop: MARGIN_PADDING.mp_4,
    borderRadius: BORDER_RADIUS.radius_10,
  },
  paginationButtonsCurrent: {
    position: 'relative',
    maxWidth: '30%',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.red,
    padding: MARGIN_PADDING.mp_12,
    marginLeft: MARGIN_PADDING.mp_4,
    marginRight: MARGIN_PADDING.mp_4,
    marginBottom: MARGIN_PADDING.mp_4,
    marginTop: MARGIN_PADDING.mp_4,
    borderRadius: BORDER_RADIUS.radius_10,
  },
  textEvent: {
    fontSize: SIZES.size_18,

    color: COLORS.white,
    fontFamily: FONTS.regular,
  },
});
