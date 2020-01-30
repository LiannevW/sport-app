import React, { useContext, useEffect } from 'react';
import PreviousLink from '../layout/PreviousLink';
import TestForm from '../../components/tests/TestForm';
import Spinner from '../layout/Spinner';

import ExerciseContext from '../../context/exercise/exerciseContext';

const Test = (props) => {
  const exerciseContext = useContext(ExerciseContext);

  const { currentExercise, getExercise } = exerciseContext;

  useEffect(() => {
    getExercise();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <PreviousLink link={'/tests'}/>
      {currentExercise !== null ? (
        <div>
          <p>Naam van de test</p>
          <p>Omschrijving van de test:</p>
          <p>Score invullen. Welke speler? Welke score?</p>
        </div>
       )
      : (
        <Spinner />
      )}
      <TestForm />
    </div>
  );
};

export default Test;

// {currentExercise !== null ? (
//   <div>
//     <p>Naam van de test</p>
//     <p>Omschrijving van de test:</p>
//     <p>Score invullen. Welke speler? Welke score?</p>
//   </div>
//  )
// : (
//   <Spinner />
// )}
