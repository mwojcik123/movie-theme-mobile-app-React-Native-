import {
  YES,
  IS_SHOW,
  SEARCH_MOVIES,
  MOVIE_DETAIL,
  MOVIES_POPULAR,
  MOVIES_ACTION,
  MOVIES_ADVENTURE,
  MOVIES_ANIMATION,
  MOVIES_COMEDY,
  MOVIES_CRIME,
  MOVIES_DOCUMENTARY,
  MOVIES_DRAMA,
  MOVIES_FAMILY,
  MOVIES_FANTASY,
  MOVIES_HISTORY,
  MOVIES_HORROR,
  MOVIES_MUSIC,
  MOVIES_MYSTERY,
  MOVIES_ROMANCE,
  MOVIES_SCIENCE_FICTION,
  MOVIES_TV_MOVIE,
  MOVIES_THRILLER,
  MOVIES_WAR,
  MOVIES_WESTERN,
  SEARCH_MOVIES_MORE,
  CLEAR_SEARCH_MOVIES,
  LOADING_MOVIE_DETAIL,
  DETAIL_GUEST_MOVIES,
  IS_LOADING_DETAIL_GUEST_MOVIES,
  CLEAR_DETAIL_MOVIE,
  MOVIE_DETAIL_ERROR,
  SEARCHING_MOVIES,
} from '../actions/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { As } from 'react-native';
// import { AsyncStorage } from "react-native";
// const sotre = await SecureStore.getItemAsync("token");

interface Action {
  type: string;
  payload: any;
}

interface MovieList {
  page: number;
  results: Array<any>;
  total_pages: number;
  total_results: number;
}

interface InitialState {
  isSearch: boolean;
  isLoadingDetailGuestMovies: boolean;
  isLoadingDetail: boolean;
  isSearchingMovies: boolean;
  isLoadingmoviePopularList: boolean;
  isLoadingmovieActionList: boolean;
  isLoadingmovieAnimationList: boolean;
  isLoadingmovieComedyList: boolean;
  isLoadingmovieCrimeList: boolean;
  isLoadingmovieAdventureList: boolean;
  isLoadingmovieHorrorList: boolean;
  movieSearchList: MovieList;
  moviePopularList: MovieList;
  movieActionList: MovieList;
  movieAnimationList: MovieList;
  movieComedyList: MovieList;
  movieCrimeList: MovieList;
  movieAdventureList: MovieList;
  movieHorrorList: MovieList;
  detailMovieGuest: Array<any>;
  movieDetail: object;
}

const initialState: InitialState = {
  isSearch: false,
  isSearchingMovies: false,
  isLoadingDetail: false,
  isLoadingDetailGuestMovies: false,
  isLoadingmoviePopularList: true,
  isLoadingmovieActionList: true,
  isLoadingmovieAnimationList: true,
  isLoadingmovieComedyList: true,
  isLoadingmovieCrimeList: true,
  isLoadingmovieAdventureList: true,
  isLoadingmovieHorrorList: true,
  movieSearchList: {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0,
  },
  moviePopularList: {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0,
  },
  detailMovieGuest: [],
  //by genre
  movieActionList: {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0,
  },
  movieAnimationList: {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0,
  },
  movieComedyList: {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0,
  },
  movieCrimeList: {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0,
  },
  movieAdventureList: {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0,
  },
  movieHorrorList: {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0,
  },
  movieDetail: {},
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        isSearch: true,
        isSearchingMovies: false,
        movieSearchList: action.payload,
      };
    case SEARCHING_MOVIES:
      return {
        ...state,
        isSearchingMovies: true,
        isSearch: false,
      };
    case CLEAR_SEARCH_MOVIES:
      return {
        ...state,
        isSearch: false,
        isSearchingMovies: false,
        movieSearchList: {
          page: 1,
          results: [],
          total_pages: 1,
          total_results: 0,
        },
      };
    case SEARCH_MOVIES_MORE:
      const result: any = action.payload;
      return {
        ...state,
        isSearch: true,

        movieSearchList: {
          ...state.movieSearchList,
          results: [...state.movieSearchList.results, ...result.results],
        },
      };
    case MOVIE_DETAIL_ERROR:
    case LOADING_MOVIE_DETAIL:
      return {
        ...state,
        isLoadingDetail: true,
      };
    case CLEAR_DETAIL_MOVIE:
      return {
        ...state,
        isLoadingDetail: false,
        movieDetail: {},
      };
    case DETAIL_GUEST_MOVIES:
      return {
        ...state,
        isLoadingDetailGuestMovies: false,
        detailMovieGuest: action.payload,
      };
    case IS_LOADING_DETAIL_GUEST_MOVIES:
      return {
        ...state,
        isLoadingDetailGuestMovies: true,
      };
    case MOVIE_DETAIL:
      return {
        ...state,
        isLoadingDetail: false,
        movieDetail: action.payload,
      };
    case MOVIES_POPULAR:
      return {
        ...state,
        isLoadingmoviePopularList: false,
        moviePopularList: action.payload,
      };
    case MOVIES_ACTION:
      return {
        ...state,
        isLoadingmovieActionList: false,
        movieActionList: action.payload,
      };
    case MOVIES_ADVENTURE:
      return {
        ...state,
        isLoadingmovieAdventureList: false,
        movieAdventureList: action.payload,
      };
    case MOVIES_ANIMATION:
      return {
        ...state,
        isLoadingmovieAnimationList: false,
        movieAnimationList: action.payload,
      };
    case MOVIES_COMEDY:
      return {
        ...state,
        isLoadingmovieComedyList: false,
        movieComedyList: action.payload,
      };
    case MOVIES_CRIME:
      return {
        ...state,
        isLoadingmovieCrimeList: false,
        movieCrimeList: action.payload,
      };
    case MOVIES_HORROR:
      return {
        ...state,
        isLoadingmovieHorrorList: false,
        movieHorrorList: action.payload,
      };
    default:
      return state;
  }
}
