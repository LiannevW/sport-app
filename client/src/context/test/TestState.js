import React, { useReducer } from 'react';
import axios from 'axios';

import TestContext from './testContext';
import TestReducer from './testReducer';
import {
  GET_TESTS,
  ADD_TEST,
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

  // Add tests
  const addTest = async test => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    try {
      const res = await axios.post('/api/tests', test, config);

      dispatch({
        type:  ADD_TEST,
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
        addTest
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};

export default TestState;

