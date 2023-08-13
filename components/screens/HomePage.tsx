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
  FlatList,
  Dimensions,
  Image,
  Animated,
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
import {
  searchMovieList,
  MovieDetail,
  _test_function,
  popularMovieList,
  actionMovies,
  animationMovies,
  comedyMovies,
  crimeMovies,
  adventureMovies,
  horrorMovies,
} from '../actions/videos-actions';
import MovieWindow from '../templates/MovieWindow';
import Pagination from '../templates/Pagination';
interface Props {
  search: string;
  page: number;
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
const {width, height} = Dimensions.get('window');

class HomePage extends Component<any, Props> {
  constructor(props: {}) {
    super(props);
    this.state = {
      search: '',
      page: 1,
    };
    this.clearSearchField = this.clearSearchField.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount(): void {
    this.props.popularMovieList();
    this.props.actionMovies();
    this.props.animationMovies();
    this.props.comedyMovies();
    this.props.crimeMovies();
    this.props.adventureMovies();
    this.props.horrorMovies();
    console.log(this.props.results);
  }
  onSearch() {
    this.props.searchMovieList(this.state.search, this.state.page);
  }
  handleClick(e: any) {
    this.setState({search: e});
  }

  clearSearchField(e: any) {
    this.setState({search: '', page: 1});
  }
  // const [search, setSearch] = useState<string>('');
  // const [searchText, setSearchText] = useState<string>('');
  render() {
    const {width, height} = Dimensions.get('window');
    return (
      <SafeAreaView style={styles.fdf}>
        <StatusBar animated={true} backgroundColor={COLORS.black} />
        <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
            <Text style={styles.textEvent}>MyTube</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.inputBox}>
            <TextInput
              name="search"
              value={this.state.search}
              style={styles.textInput}
              placeholder="Search..."
              placeholderTextColor={COLORS.grey}
              onChangeText={this.handleClick}
            />
            <View style={styles.iconContainer}>
              <TouchableOpacity style={styles.searchIcon}>
                <AntDesign
                  name="search1"
                  color={COLORS.white}
                  size={SIZES.size_28}
                  onPress={this.onSearch}
                />
              </TouchableOpacity>
              {this.state.search == '' ? null : (
                <TouchableOpacity
                  activeOpacity={0.1}
                  style={styles.searchIcon}
                  onPress={this.clearSearchField}>
                  <AntDesign
                    name="closecircleo"
                    color={COLORS.red}
                    size={SIZES.size_22}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
          <Text style={styles.textTitle}>Popular Movies</Text>
          <FlatList
            data={this.props.moviePopularList.results}
            keyExtractor={(item: any) => item.id}
            bounces={false}
            snapToInterval={width - 100}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.containerGap32}
            decelerationRate={0}
            renderItem={({item, index}) => {
              // if (!item.original_title) {
              //   return (
              //     <View
              //       style={{
              //         width: (width - (width * 0.7 + SIZES.size_22 * 2)) / 2,
              //       }}></View>
              //   );
              // }
              return (
                <MovieWindow
                  key={item.id}
                  func={this.props.MovieDetail}
                  backdrop_path={item.backdrop_path}
                  id={item.id}
                  title={item.title}
                  popularity={item.popularity}
                  vote_average={item.vote_average}
                />
              );
            }}
          />

          <Text style={styles.textTitle}>Action</Text>
          <FlatList
            data={this.props.movieActionList.results}
            keyExtractor={(item: any) => item.id}
            bounces={false}
            snapToInterval={width - 100}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.containerGap32}
            decelerationRate={0}
            renderItem={({item, index}) => {
              // if (!item.original_title) {
              //   return (
              //     <View
              //       style={{
              //         width: (width - (width * 0.7 + SIZES.size_22 * 2)) / 2,
              //       }}></View>
              //   );
              // }
              return (
                <MovieWindow
                  key={item.id}
                  func={this.props.MovieDetail}
                  backdrop_path={item.backdrop_path}
                  id={item.id}
                  title={item.title}
                  popularity={item.popularity}
                  vote_average={item.vote_average}
                />
              );
            }}
          />
          <Text style={styles.textTitle}>Animations</Text>
          <FlatList
            data={this.props.movieAnimationList.results}
            keyExtractor={(item: any) => item.id}
            bounces={false}
            snapToInterval={width - 100}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.containerGap32}
            decelerationRate={0}
            renderItem={({item, index}) => {
              // if (!item.original_title) {
              //   return (
              //     <View
              //       style={{
              //         width: (width - (width * 0.7 + SIZES.size_22 * 2)) / 2,
              //       }}></View>
              //   );
              // }
              return (
                <MovieWindow
                  key={item.id}
                  func={this.props.MovieDetail}
                  backdrop_path={item.backdrop_path}
                  id={item.id}
                  title={item.title}
                  popularity={item.popularity}
                  vote_average={item.vote_average}
                />
              );
            }}
          />
          <Text style={styles.textTitle}>Comedy</Text>
          <FlatList
            data={this.props.movieComedyList.results}
            keyExtractor={(item: any) => item.id}
            bounces={false}
            snapToInterval={width - 100}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.containerGap32}
            decelerationRate={0}
            renderItem={({item, index}) => {
              // if (!item.original_title) {
              //   return (
              //     <View
              //       style={{
              //         width: (width - (width * 0.7 + SIZES.size_22 * 2)) / 2,
              //       }}></View>
              //   );
              // }
              return (
                <MovieWindow
                  key={item.id}
                  func={this.props.MovieDetail}
                  backdrop_path={item.backdrop_path}
                  id={item.id}
                  title={item.title}
                  popularity={item.popularity}
                  vote_average={item.vote_average}
                />
              );
            }}
          />
          <Text style={styles.textTitle}>Crime</Text>
          <FlatList
            data={this.props.movieCrimeList.results}
            keyExtractor={(item: any) => item.id}
            bounces={false}
            snapToInterval={width - 100}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.containerGap32}
            decelerationRate={0}
            renderItem={({item, index}) => {
              // if (!item.original_title) {
              //   return (
              //     <View
              //       style={{
              //         width: (width - (width * 0.7 + SIZES.size_22 * 2)) / 2,
              //       }}></View>
              //   );
              // }
              return (
                <MovieWindow
                  key={item.id}
                  func={this.props.MovieDetail}
                  backdrop_path={item.backdrop_path}
                  id={item.id}
                  title={item.title}
                  popularity={item.popularity}
                  vote_average={item.vote_average}
                />
              );
            }}
          />
          <Text style={styles.textTitle}>Adventure</Text>
          <FlatList
            data={this.props.movieAdventureList.results}
            keyExtractor={(item: any) => item.id}
            bounces={false}
            snapToInterval={width - 100}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.containerGap32}
            decelerationRate={0}
            renderItem={({item, index}) => {
              // if (!item.original_title) {
              //   return (
              //     <View
              //       style={{
              //         width: (width - (width * 0.7 + SIZES.size_22 * 2)) / 2,
              //       }}></View>
              //   );
              // }
              return (
                <MovieWindow
                  key={item.id}
                  func={this.props.MovieDetail}
                  backdrop_path={item.backdrop_path}
                  id={item.id}
                  title={item.title}
                  popularity={item.popularity}
                  vote_average={item.vote_average}
                />
              );
            }}
          />
          <Text style={styles.textTitle}>Horror</Text>
          <FlatList
            data={this.props.movieHorrorList.results}
            keyExtractor={(item: any) => item.id}
            bounces={false}
            snapToInterval={width - 100}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.containerGap32}
            decelerationRate={0}
            renderItem={({item, index}) => {
              // if (!item.original_title) {
              //   return (
              //     <View
              //       style={{
              //         width: (width - (width * 0.7 + SIZES.size_22 * 2)) / 2,
              //       }}></View>
              //   );
              // }
              return (
                <MovieWindow
                  key={item.id}
                  func={this.props.MovieDetail}
                  backdrop_path={item.backdrop_path}
                  id={item.id}
                  title={item.title}
                  popularity={item.popularity}
                  vote_average={item.vote_average}
                />
              );
            }}
          />
        </ScrollView>

        <Pagination currentPage={1} pages={10} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: any) => ({
  count: state.videos.count,
  movieSearchList: state.videos.movieSearchList,
  moviePopularList: state.videos.moviePopularList,
  // movies by genre
  movieActionList: state.videos.movieActionList,
  movieAnimationList: state.videos.movieAnimationList,
  movieComedyList: state.videos.movieComedyList,
  movieCrimeList: state.videos.movieCrimeList,
  movieAdventureList: state.videos.movieAdventureList,
  movieHorrorList: state.videos.movieHorrorList,
});

export default connect(mapStateToProps, {
  searchMovieList,
  MovieDetail,
  _test_function,
  popularMovieList,
  // movies by genre
  actionMovies,
  animationMovies,
  comedyMovies,
  crimeMovies,
  adventureMovies,
  horrorMovies,
})(HomePage);

const styles = StyleSheet.create({
  fdf: {
    backgroundColor: COLORS.black,
    height: '100%',
  },
  textEvent: {
    fontSize: SIZES.size_18,

    color: COLORS.white,
    fontFamily: FONTS.regular,
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
    paddingVertical: MARGIN_PADDING.mp_12,
    backgroundColor: COLORS.black,
  },

  textTitle: {
    fontSize: SIZES.size_22,
    color: COLORS.white,
    fontFamily: FONTS.light,
    marginVertical: MARGIN_PADDING.mp_8,
    marginHorizontal: MARGIN_PADDING.mp_18,
    marginTop: MARGIN_PADDING.mp_12,
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
  paginationContainer: {
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
    backgroundColor: COLORS.red,
    padding: MARGIN_PADDING.mp_12,
    marginLeft: MARGIN_PADDING.mp_12,
    marginRight: MARGIN_PADDING.mp_12,
    marginBottom: MARGIN_PADDING.mp_4,
    marginTop: MARGIN_PADDING.mp_4,
    borderRadius: BORDER_RADIUS.radius_10,
  },
  containerGap32: {
    // margin,
    // gap: MARGIN_PADDING.mp_10,
    paddingHorizontal: 50,
  },
});
