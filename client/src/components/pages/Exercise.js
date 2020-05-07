import React, { useContext, useEffect, useState } from 'react';
import PreviousLink from '../layout/PreviousLink';
import TestForm from '../tests/TestForm';
import Spinner from '../layout/Spinner';

import ExerciseContext from '../../context/exercise/exerciseContext';

const Exercise = (props) => {
  const exerciseContext = useContext(ExerciseContext);

  const { currentExercise, getExercise } = exerciseContext;

  useEffect(() => {
    const id = props.match.params['id']
    getExercise(id)
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (currentExercise && currentExercise !== exercise) setExercise(currentExercise)
    // eslint-disable-next-line
  }, [currentExercise]);

  const [exercise, setExercise] = useState({
    description: '',
    id: '',
    name: '',
  });

  const { description, name } = exercise;

  return (
    <div>
      <PreviousLink link={'/test'} />
      {exercise.id !== '' ? (
        <div>
          <p>Naam van de exercise:<br />{name}</p>
          <p>Omschrijving van de exercise:<br /> {description}</p>
        </div>
      )
        : (
          <Spinner />
        )}
      <TestForm />
    </div>
  );
};

export default Exercise;
