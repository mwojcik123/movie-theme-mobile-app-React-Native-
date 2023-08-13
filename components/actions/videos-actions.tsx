import axios from 'axios';
import {
  SEARCH_MOVIES,
  LOADING_MOVIE_DETAIL,
  CLEAR_SEARCH_MOVIES,
  MOVIE_DETAIL,
  MOVIES_POPULAR,
  MOVIES_ACTION,
  MOVIES_ADVENTURE,
  IS_SHOW,
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
  YES,
  SEARCH_MOVIES_MORE,
} from './types';
import {API_KEY} from './api-keys';
import {Dispatch} from 'redux';
export const _test_function =
  () => (dispatch: Dispatch, getState: () => any) => {
    console.log('siema');
  };

// genre: "name: id"
// interface GenreList {
//   MOVIES_ACTION: number;
//   MOVIES_ADVENTURE: number;
//   MOVIES_ANIMATION: number;
//   MOVIES_COMEDY: number;
//   MOVIES_CRIME: number;
//   MOVIES_DOCUMENTARY: number;
//   MOVIES_DRAMA: number;
//   MOVIES_FAMILY: number;
//   MOVIES_FANTASY: number;
//   MOVIES_HISTORY: number;
//   MOVIES_HORROR: number;
//   MOVIES_MUSIC: number;
//   MOVIES_MYSTERY: number;
//   MOVIES_ROMANCE: number;
//   MOVIES_SCIENCE_FICTION: number;
//   MOVIES_TV_MOVIE: number;
//   MOVIES_THRILLER: number;
//   MOVIES_WAR: number;
//   MOVIES_WESTERN: number;
// }

// const GENRES: GenreList = {
//   MOVIES_ACTION: 28,
//   MOVIES_ADVENTURE: 12,
//   MOVIES_ANIMATION: 16,
//   MOVIES_COMEDY: 35,
//   MOVIES_CRIME: 80,
//   MOVIES_DOCUMENTARY: 99,
//   MOVIES_DRAMA: 18,
//   MOVIES_FAMILY: 10751,
//   MOVIES_FANTASY: 14,
//   MOVIES_HISTORY: 36,
//   MOVIES_HORROR: 27,
//   MOVIES_MUSIC: 10402,
//   MOVIES_MYSTERY: 9648,
//   MOVIES_ROMANCE: 10749,
//   MOVIES_SCIENCE_FICTION: 878,
//   MOVIES_TV_MOVIE: 10770,
//   MOVIES_THRILLER: 53,
//   MOVIES_WAR: 10752,
//   MOVIES_WESTERN: 37,
// };

export const yes = () => (dispatch: Dispatch, getState: () => any) => {
  dispatch({
    type: YES,
  });
};

export const isShow = () => (dispatch: Dispatch, getState: () => any) => {
  dispatch({
    type: IS_SHOW,
  });
};
export const popularMovieList =
  () => (dispatch: Dispatch, getState: () => any) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data);
        dispatch({
          type: MOVIES_POPULAR,
          payload: res.data,
        });
      });
  };

export const actionMovies = () => (dispatch: Dispatch, getState: () => any) => {
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${28}`,
    )
    .then(res => {
      console.log(res.data);
      dispatch({
        type: MOVIES_ACTION,
        payload: res.data,
      });
    });
};

export const adventureMovies =
  () => (dispatch: Dispatch, getState: () => any) => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${12}`,
      )
      .then(res => {
        console.log(res.data);
        dispatch({
          type: MOVIES_ADVENTURE,
          payload: res.data,
        });
      });
  };

export const animationMovies =
  () => (dispatch: Dispatch, getState: () => any) => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${16}`,
      )
      .then(res => {
        console.log(res.data);
        dispatch({
          type: MOVIES_ANIMATION,
          payload: res.data,
        });
      });
  };

export const comedyMovies = () => (dispatch: Dispatch, getState: () => any) => {
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${35}`,
    )
    .then(res => {
      console.log(res.data);
      dispatch({
        type: MOVIES_COMEDY,
        payload: res.data,
      });
    });
};

export const crimeMovies = () => (dispatch: Dispatch, getState: () => any) => {
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${80}`,
    )
    .then(res => {
      console.log(res.data);
      dispatch({
        type: MOVIES_CRIME,
        payload: res.data,
      });
    });
};

export const horrorMovies = () => (dispatch: Dispatch, getState: () => any) => {
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${27}`,
    )
    .then(res => {
      console.log(res.data);
      dispatch({
        type: MOVIES_HORROR,
        payload: res.data,
      });
    });
};

export const searchMovieList =
  (keyword: string, page: number) =>
  (dispatch: Dispatch, getState: () => any) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}`,
      )
      .then(res => {
        console.log(res.data);
        dispatch({
          type: SEARCH_MOVIES,
          payload: res.data,
        });
      });
  };

export const searchMovieListMore =
  (keyword: string, page: number) =>
  (dispatch: Dispatch, getState: () => any) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}&page=${page}`,
      )
      .then(res => {
        console.log(res.data);
        dispatch({
          type: SEARCH_MOVIES_MORE,
          payload: res.data,
        });
      });
  };

export const clearSearch = () => (dispatch: Dispatch, getState: () => any) => {
  dispatch({
    type: CLEAR_SEARCH_MOVIES,
  });
};

export const MovieDetail =
  (id: number) => (dispatch: Dispatch, getState: () => any) => {
    dispatch({type: LOADING_MOVIE_DETAIL});
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data);
        dispatch({
          type: MOVIE_DETAIL,
          payload: res.data,
        });
      });
  };
