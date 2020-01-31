import React, { useEffect, useContext, useState } from 'react';

// context
import PlayerContext from '../../context/player/playerContext';
import TestContext from '../../context/test/testContext';

// components
import Spinner from '../layout/Spinner';

// Form to select player and add score
const TestForm = () => {
    const playerContext = useContext(PlayerContext);
    const testContext = useContext(TestContext);

    const { players, getPlayers, loading } = playerContext;
    const { addTest } = testContext;

    useEffect(() => {
      getPlayers();
      setTest({
        player: '',
        date: '',
        exercise0: '',
        exercise1: '',
        exercise2: ''
      });
      // eslint-disable-next-line
    }, []);

    const [test, setTest] = useState({
      player: '',
      date: '',
      exercise0: '',
      exercise1: '',
      exercise2: ''
    });

    const { player, date, exercise0, exercise1, exercise2 }  = test

    const onChange = e => {
      setTest({ ...test, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
      e.preventDefault();
      addTest(test);
      // TODO add clearForm
    };

    // TODO refactor to get param from path
    const getExerciseName = 'exercise' + window.location.pathname.charAt(window.location.pathname.length-1);

  return (
    <div>
      {players !== null && !loading ? (
        <form onSubmit={onSubmit}>
          <h1>Select player and add score to this exercise</h1>
          <select name='player' onChange={onChange}>
            {players.map(player => (
              <option key={player._id} value={player._id}>{player.name}</option>
            ))}
          </select>
          <input
            type='date'
            placeholder='date'
            name='date'
            value={date}
            onChange={onChange}
          />
          <input
            type='number'
            placeholder={getExerciseName}
            name={getExerciseName}
            onChange={onChange}
          />
          <div>
            <input
              type='submit'
              value={'Add Test'}
              className='btn btn-primary btn-block'
            />
          </div>
        </form>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TestForm;


