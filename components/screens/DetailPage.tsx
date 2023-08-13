import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  StatusBar,
  Button,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  COLORS,
  SIZES,
  FONTS,
  BORDER_RADIUS,
  MARGIN_PADDING,
} from '../assets/style-theme';
import {connect} from 'react-redux';
import {searchMovieList} from '../actions/videos-actions';

interface Props {
  search: string;
}

interface Video {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<any>;
  original_title: string;
  popularity: number;
  vote_count: number;
  original_language: string;
  vote_average: number;
}

class HomePage extends Component<any, Props> {
  constructor(props: {}) {
    super(props);
    this.state = {
      search: '',
    };
    this.clearSearchField = this.clearSearchField.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount(): void {
    console.log(this.props.results);
  }
  onSearch() {
    this.props.searchMovieList(this.state.search);
  }
  handleClick(e: any) {
    this.setState({search: e});
  }

  clearSearchField(e: any) {
    this.setState({search: ''});
  }
  // const [search, setSearch] = useState<string>('');
  // const [searchText, setSearchText] = useState<string>('');
  render() {
    return (
      <SafeAreaView style={styles.fdf}>
        <StatusBar animated={true} backgroundColor={COLORS.black} />
        <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
            <Text style={styles.textEvent}>Details</Text>
          </View>
        </View>
        <ScrollView style={styles.headerTitle}>
          <Text style={styles.textEvent}>swsd</Text>
          <Text style={styles.textEvent}>
            sdas: {this.props.movieDetail.original_title}
          </Text>
        </ScrollView>
        <ScrollView style={styles.headerTitle}></ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: any) => ({
  count: state.videos.count,
  movieDetail: state.videos.movieDetail,
});

export default connect(mapStateToProps, {searchMovieList})(HomePage);

const styles = StyleSheet.create({
  fdf: {
    backgroundColor: COLORS.black,
    height: '100%',
  },
  textEvent: {
    fontSize: SIZES.size_18,

    color: COLORS.white,
    fontFamily: FONTS.light,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  appBarWrapper: {
    paddingHorizontal: MARGIN_PADDING.mp_18,
    paddingVertical: MARGIN_PADDING.mp_18,
    backgroundColor: COLORS.black,
  },
  headerTitle: {
    marginHorizontal: SIZES.size_18,
    marginVertical: SIZES.size_8,
  },
  textTitle: {
    fontSize: SIZES.size_50,
    fontWeight: '500',
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
  iconContainer: {
    width: '20%',
    direction: 'rtl',
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    display: 'flex',
    paddingVertical: MARGIN_PADDING.mp_2,
    paddingHorizontal: MARGIN_PADDING.mp_8,
    marginHorizontal: MARGIN_PADDING.mp_12,
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: BORDER_RADIUS.radius_25,
    flexDirection: 'row',
  },
  textInput: {
    width: '80%',
    color: COLORS.white,
  },
  searchIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: MARGIN_PADDING.mp_4,
  },
});
