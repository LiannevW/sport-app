import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ExerciseContext from '../../context/exercise/exerciseContext';

// components
import PreviousLink from '../layout/PreviousLink';
import Spinner from '../layout/Spinner';

const Tests = () => {
  const exerciseContext = useContext(ExerciseContext);

  const { exercises, getExercises } = exerciseContext;

  const getRoute = (id) => {
    // TODO: add relative route
    return 'tests/' + id
  }

  useEffect(() => {
    getExercises();
      // eslint-disable-next-line
  }, []);

  return (
    <div>
      <PreviousLink link={'/'}/>
      <h1>On this page: all tests + Enter scores </h1>

      <div>
        {exercises !== null ? (
          exercises.map((exercise) => (
            <Link key={exercise.id} className='btn btn-primary btn-block' to={getRoute(exercise.id)}>{exercise.name}</Link>
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Tests;
