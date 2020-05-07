import React, { useReducer } from 'react';
import axios from 'axios';

import ExerciseContext from './exerciseContext';
import ExerciseReducer from './exerciseReducer';
import {
  GET_EXERCISES,
  SET_CURRENT_EXERCISE,
  EXERCISES_ERROR
} from '../types'

const ExerciseState = props => {
  const initialState = {
    exercises: null,
  };

  const [state, dispatch] = useReducer(ExerciseReducer, initialState);

  // Get exercises
  const getExercises = async () => {
    try {
      const res = await axios.get('/api/exercises');

      dispatch({
        type: GET_EXERCISES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: EXERCISES_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Get one exercise by id
  const getExercise = async (id) => {
    try {
      const res = await axios.get(`/api/exercises/${id}`);
      dispatch({
        type: SET_CURRENT_EXERCISE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: EXERCISES_ERROR,
        payload: err.response.msg
      });
    }
  };

  return (
    <ExerciseContext.Provider
      value={{
        exercises: state.exercises,
        currentExercise: state.currentExercise,
        getExercises,
        getExercise
      }}
    >
      {props.children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseState;
