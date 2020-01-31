import {
    GET_TESTS,
    ADD_TEST,
    TEST_ERROR
  } from '../types';

  export default (state, action) => {
    switch (action.type) {
      case GET_TESTS:
        return {
          ...state,
          tests: action.payload,
          loading: false
        };
      case ADD_TEST:
        return {
          ...state,
          tests: [action.payloads],
          loading: false
        };
      case TEST_ERROR:
        return {
          ...state,
          error: action.payload
        };
      default:
          return state;
    }
  };
