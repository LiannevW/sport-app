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
  const { checkTest } = testContext;

  useEffect(() => {
    getPlayers();
    setTest({
      player: '',
      date: '',
      exercise0: '',
      exercise1: ''
    });
    setSubmit({
      submit: false
    })
    // eslint-disable-next-line
  }, []);

  const [test, setTest] = useState({
    player: '',
    date: '',
    exercise0: '',
    exercise1: ''
  });

  const [submit, setSubmit] = useState({
    submit: ''
  });

  const { player, date, exercise0, exercise1 } = test

  const idOfExercise = window.location.pathname.charAt(window.location.pathname.length - 1)

  const clearForm = () => {
    setSubmit({ submit: true })
    setTest({
      player: '',
      date: '',
      exercise0: '',
      exercise1: ''
    });
  }

  const onChange = e => {
    setTest({ ...test, [e.target.name]: e.target.value });
    setSubmit({ submit: false })
  }

  const onSubmit = e => {
    e.preventDefault();
    checkTest(test);
    clearForm();
  };

  return (
    <div>
      <div>
        {players !== null && !loading ? (
          <form onSubmit={onSubmit}>
            <h1>Select player and add score to this exercise</h1>
            {submit.submit === true ? <p>De gegevens zijn opgeslagen</p> : ''}
            <select value={player} name='player' onChange={onChange} onBlur={onChange} required>
              <option value='' disabled>Select a player</option>
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
              required
            />
            {idOfExercise === '0' ?
              <input
                type='number'
                placeholder={'vul hier de score in'}
                name='exercise0'
                value={exercise0}
                onChange={onChange}
                required
              />
              :
              ''}
            {idOfExercise === '1' ?
              <input
                type='number'
                placeholder={'vul hier de score in'}
                name='exercise1'
                value={exercise1}
                onChange={onChange}
                required
              />
              :
              ''}
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
    </div>
  );
};

export default TestForm;


