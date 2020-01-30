import {
    GET_EXERCISES,
    EXERCISES_ERROR,
    SET_CURRENT_EXERCISE
  } from '../types';

  export default (state, action) => {
    switch (action.type) {
      case GET_EXERCISES:
        return {
          ...state,
          exercises: action.payload,
          loading: false
        };
      case SET_CURRENT_EXERCISE:
        return {
          ...state,
          currentExercise: action.payload,
          loading: false
        };
      case EXERCISES_ERROR:
        return {
            ...state,
            error: action.payload
        };
      default:
        return state;
    }
  };
