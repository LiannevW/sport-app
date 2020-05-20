import {
  GET_TESTS,
  ADD_TEST,
  CHECK_TEST,
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
    case CHECK_TEST:
      return {
        ...state,
        submitted: true
      }
    case TEST_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
