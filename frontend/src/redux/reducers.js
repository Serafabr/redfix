import { combineReducers } from "redux";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  QUERY_REQUEST,
  QUERY_SUCCESS,
  QUERY_FAILURE,
  QUERY_RESET,
  SAVE_SEARCH_RESULT_ENERGY,
  SAVE_SEARCH_RESULT_WATER,
  CLEAN_CACHE
} from "./actions";

function auth(
  state = {
    email: false,
    isFetching: false,
    loginError: false
  },
  action
) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        loginError: false
      });

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        email: action.email,
        isFetching: false,
        loginError: false
      });

    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        loginError: true
      });

    case LOGOUT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        logoutError: false
      });

    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        email: null,
        isFetching: false,
        logoutError: false
      });

    case LOGOUT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        logoutError: true
      });

    default:
      return state;
  }
}

function energy(
  state = {
    resultObject: {},
    isFetching: false,
    queryError: false,
    errorMessage: "",
    showResult: false
  },
  action
) {
  switch (action.type) {
    case QUERY_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        queryError: false,
        message: "Consultando banco de dados...",
        showResult: false
      });
    case QUERY_SUCCESS:
      return Object.assign({}, state, {
        resultObject: action.resultObject,
        isFetching: false,
        queryError: false,
        message: "",
        showResult: true
      });
    case QUERY_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        queryError: true,
        message: action.message,
        showResult: false
      });
    case QUERY_RESET:
      return Object.assign({}, state, {
        resultObject: {},
        isFetching: false,
        queryError: false,
        message: "",
        showResult: false
      });
    default:
      return state;
  }
}

function consumptionMonitorCache(
  state = {
    energy: false,
    water: false
  },
  action
) {
  switch (action.type) {
    case SAVE_SEARCH_RESULT_ENERGY:
      return Object.assign({}, state, {
        energy: action.energy
      });
    case SAVE_SEARCH_RESULT_WATER:
      return Object.assign({}, state, {
        water: action.water
      });
    case CLEAN_CACHE:
      return Object.assign({}, state, {
        energy: false,
        water: false
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  auth,
  consumptionMonitorCache
});

export default rootReducer;
