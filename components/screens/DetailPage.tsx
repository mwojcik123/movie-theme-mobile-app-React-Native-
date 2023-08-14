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
  ActivityIndicator,
} from 'react-native';
import BackButton from '../templates/BackButton';
import tw from 'tailwind-react-native-classnames';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  COLORS,
  SIZES,
  FONTS,
  BORDER_RADIUS,
  MARGIN_PADDING,
} from '../assets/style-theme';
import {connect} from 'react-redux';

import {MovieDetail, _test_function} from '../actions/videos-actions';
import MovieWindow from '../templates/MovieWindow';
import Spiner from '../templates/Spiner';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

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

class HomePage extends Component<any> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }
  static propTypes = {
    movieDetail: PropTypes.object.isRequired,
  };
  componentDidMount(): void {
    // const {movieDetail, isLoadingDetailGuestMovies} = this.props;
    // this.props.detailGuestMovies(movieDetail.id, movieDetail.genres[0].id);
  }

  // const [search, setSearch] = useState<string>('');
  // const [searchText, setSearchText] = useState<string>('');
  render() {
    const {movieDetail, isLoadingDetailGuestMovies, isLoadingDetail} =
      this.props;
    const backDropImage = `https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`;
    const posterImage = `https://image.tmdb.org/t/p/original${movieDetail.poster_path}`;

    return (
      <View style={styles.window}>
        {!isLoadingDetail ? (
          <ScrollView
            style={styles.container}
            bounces={false}
            showsVerticalScrollIndicator={false}>
            {/* <StatusBar hidden /> */}
            <View>
              <ImageBackground
                style={styles.imageBG}
                source={{uri: backDropImage}}>
                <LinearGradient
                  colors={[COLORS.black, '#00000000', COLORS.black]}
                  style={{height: '100%', width: '100%'}}>
                  <BackButton />
                </LinearGradient>
              </ImageBackground>
              {/* <View style={styles.imageBG}></View> */}

              <View style={styles.imageBG}>
                <Image source={{uri: posterImage}} style={styles.cardImage} />
              </View>
            </View>
            <View style={styles.descriptionContent}>
              <View>
                <Text style={styles.textTitle}>{movieDetail.title}</Text>
                <Text style={styles.textTagline}>{movieDetail.tagline}</Text>
              </View>
              <View style={styles.rowContent}>
                <View style={styles.popularityContainer}>
                  <AntDesign name="star" color={COLORS.gold} size={16} />
                  <Text style={styles.popularityText}>
                    ({movieDetail.vote_average}/10)
                  </Text>
                </View>
                <View style={styles.popularityContainer}>
                  <Text style={styles.popularityText}>
                    {movieDetail.popularity}
                  </Text>
                </View>
              </View>
              <Text style={styles.textGenre}>
                Genre:
                {movieDetail.genres
                  .slice(1, 4)
                  .map((item: any) => ' ' + item.name + ',')}
              </Text>
              <Text style={styles.textOverview}>{movieDetail.overview}</Text>
              <Text
                style={[styles.textGenre, {marginTop: MARGIN_PADDING.mp_4}]}>
                Country Production:
                {movieDetail.production_companies
                  .slice(1, 4)
                  .map(
                    (item: any) => ' ' + item.origin_country + `(${item.name})`,
                  )}
              </Text>
              {movieDetail.release_date ? (
                <Text
                  style={[
                    styles.textGenre,
                    {color: COLORS.grey, fontFamily: FONTS.regular},
                  ]}>
                  Relased Date: {movieDetail.release_date}
                </Text>
              ) : null}
              <View style={styles.guesstMovies}>
                {!isLoadingDetailGuestMovies ? (
                  <View>
                    <Text style={styles.textGuesst}>Similar Movies</Text>

                    <FlatList
                      data={this.props.detailMovieGuest}
                      keyExtractor={(item: any) => item.id}
                      bounces={false}
                      snapToInterval={width - 100}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={styles.containerGap32}
                      decelerationRate={0}
                      renderItem={({item, index}) => {
                        return (
                          <MovieWindow
                            key={item.id}
                            func={this.props.MovieDetail}
                            poster_path={item.poster_path}
                            id={item.id}
                            title={item.title}
                            popularity={item.popularity}
                            vote_average={item.vote_average}
                          />
                        );
                      }}
                    />
                  </View> // <ActivityIndicator size="large" />
                ) : null}
              </View>
            </View>
          </ScrollView>
        ) : (
          <View style={styles.window}>
            <BackButton />
            <Text style={styles.textLoading}>Loading...</Text>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  movieDetail: state.videos.movieDetail,
  detailMovieGuest: state.videos.detailMovieGuest,
  isLoadingDetail: state.videos.isLoadingDetail,
  isLoadingDetailGuestMovies: state.videos.isLoadingDetailGuestMovies,
});

export default connect(mapStateToProps, {MovieDetail})(HomePage);

const styles = StyleSheet.create({
  window: {
    backgroundColor: COLORS.black,
    height: '100%',
  },
  windowLoading: {
    backgroundColor: COLORS.black,
    height: '100%',
  },
  rowContent: {
    alignItems: 'flex-start',
    // justifyContent: 'center',
    flexDirection: 'row',
    marginTop: MARGIN_PADDING.mp_4,
  },
  guesstMovies: {
    marginVertical: MARGIN_PADDING.mp_40,
  },
  backButton: {
    top: 20,
    left: 20,
  },
  descriptionContent: {
    // alignItems: 'center',
    // justifyContent: 'center',
    marginHorizontal: MARGIN_PADDING.mp_18,
    marginTop: MARGIN_PADDING.mp_4,
  },
  popularityText: {
    alignItems: 'center',
    fontFamily: FONTS.regular,
    fontSize: SIZES.size_12,
    color: COLORS.white,
  },
  popularityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: MARGIN_PADDING.mp_4,
  },
  textGuesst: {
    fontFamily: FONTS.normal,
    fontSize: SIZES.size_22,
    color: COLORS.grey,
    textAlign: 'center',
  },
  textLoading: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.size_50,
    color: COLORS.grey,
    textAlign: 'center',
  },
  textTitle: {
    fontFamily: FONTS.light,
    fontSize: SIZES.size_22,
    color: COLORS.white,
    textAlign: 'center',
  },
  textOverview: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.size_16,
    color: COLORS.white,
    textAlign: 'justify',
  },
  textGenre: {
    fontFamily: FONTS.thin,
    fontSize: SIZES.size_16,
    color: COLORS.white,
    textAlign: 'left',
  },
  appBarHorizontial: {
    marginHorizontal: MARGIN_PADDING.mp_24,
    marginTop: MARGIN_PADDING.mp_18,
  },
  textTagline: {
    textAlign: 'center',
    fontSize: SIZES.size_16,
    color: COLORS.white,
    fontFamily: FONTS.thin,
    marginVertical: MARGIN_PADDING.mp_8,
    marginHorizontal: MARGIN_PADDING.mp_18,
    marginTop: MARGIN_PADDING.mp_12,
  },
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.black,
  },
  image: {
    height: 222,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },

  imageBG: {
    width: '100%',
    aspectRatio: 20 / 11,
  },
  cardImage: {
    width: '60%',
    // height: 222,
    aspectRatio: 190 / 285,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  containerGap32: {
    // margin,
    // gap: MARGIN_PADDING.mp_10,
    paddingHorizontal: 50,
  },
});
