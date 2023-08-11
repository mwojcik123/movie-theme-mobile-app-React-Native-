import {ONE_MORE, ONE_LESS} from '../actions/types';

// import { AsyncStorage } from "react-native";
// const sotre = await SecureStore.getItemAsync("token");
interface Action {
  type: string;
  payload: object;
}

const initialState = {
  count: 1,
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case ONE_MORE:
      return {
        ...state,
        count: state.count + 1,
      };
    case ONE_LESS:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
