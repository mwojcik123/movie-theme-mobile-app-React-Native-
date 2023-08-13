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
} from '../actions/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { As } from 'react-native';
// import { AsyncStorage } from "react-native";
// const sotre = await SecureStore.getItemAsync("token");

interface Action {
  type: string;
  payload: object;
}

interface MovieList {
  page: number;
  results: Array<any>;
  total_pages: number;
  total_results: number;
}

interface InitialState {
  movieSearchList: MovieList;
  moviePopularList: MovieList;
  movieActionList: MovieList;
  movieAnimationList: MovieList;
  movieComedyList: MovieList;
  movieCrimeList: MovieList;
  movieAdventureList: MovieList;
  movieHorrorList: MovieList;
  movieDetail: object;
}

const initialState: InitialState = {
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
        movieSearchList: action.payload,
      };
    case MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
      };
    case MOVIES_POPULAR:
      return {
        ...state,
        moviePopularList: action.payload,
      };
    case MOVIES_ACTION:
      return {
        ...state,
        movieActionList: action.payload,
      };
    case MOVIES_ADVENTURE:
      return {
        ...state,
        movieAdventureList: action.payload,
      };
    case MOVIES_ANIMATION:
      return {
        ...state,
        movieAnimationList: action.payload,
      };
    case MOVIES_COMEDY:
      return {
        ...state,
        movieComedyList: action.payload,
      };
    case MOVIES_CRIME:
      return {
        ...state,
        movieCrimeList: action.payload,
      };
    case MOVIES_HORROR:
      return {
        ...state,
        movieHorrorList: action.payload,
      };
    default:
      return state;
  }
}
