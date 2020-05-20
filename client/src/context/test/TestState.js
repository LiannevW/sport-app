import React, { useReducer } from 'react';
import axios from 'axios';

import TestContext from './testContext';
import TestReducer from './testReducer';
import {
  GET_TESTS,
  CHECK_TEST,
  TEST_ERROR
} from '../types'

const TestState = props => {
  const initialState = {
    tests: null,
  };

  const [state, dispatch] = useReducer(TestReducer, initialState);

  // Get tests
  const getTests = async () => {
    try {
      const res = await axios.get('/api/tests');

      dispatch({
        type: GET_TESTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: TEST_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add or update test
  const checkTest = async test => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    // put endpoint needs a id, thus addad a one. TODO refactor.
    try {
      const res = await axios.put(
        `/api/tests/1`,
        test,
        config
      );

      dispatch({
        type: CHECK_TEST,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: TEST_ERROR,
        payload: err.respons.msg
      });
    }
  }

  return (
    <TestContext.Provider
      value={{
        tests: state.tests,
        getTests,
        checkTest
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};

export default TestState;

