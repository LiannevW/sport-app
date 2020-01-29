import React, { useState, useContext, useEffect } from 'react';
import PlayerContext from '../../context/player/playerContext'

const PlayerForm = () => {
  const playerContext = useContext(PlayerContext);

  const { addPlayer, updatePlayer, clearCurrent, current } = playerContext;

  useEffect(() => {
    if (current !== null) {
      setPlayer(current);
    } else {
      setPlayer({
        name: '',
        email: '',
        fitscore: '',
        dateOfBirth: '',
        length: '',
        weight: '',
        gender: '',
        league: '',
        position: ''
      });
    }
  }, [playerContext, current]);

  const [player, setPlayer] = useState({
    name: '',
    email: '',
    fitscore: '',
    dateOfBirth: '',
    length: '',
    weight: '',
    gender: '',
    league: '',
    position: ''
  });

  const { name, email, fitscore, dateOfBirth, length, weight, gender, league, position } = player;

  const onChange = e =>
    setPlayer({ ...player, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addPlayer(player);
    } else {
      updatePlayer(player);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit player' : 'Add player'}
      </h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='date'
        placeholder='geboorte datum'
        name='dateOfBirth'
        value={dateOfBirth}
        onChange={onChange}
      />
      <input
        type='number'
        placeholder='length in cm'
        name='length'
        value={length}
        onChange={onChange}
      />
      <input
        type='number'
        placeholder='weight in kg'
        name='weight'
        value={weight}
        onChange={onChange}
      />
      <input
        type='string'
        placeholder='gender'
        name='gender'
        value={gender}
        onChange={onChange}
      />
      <input
        type='string'
        placeholder='league'
        name='league'
        value={league}
        onChange={onChange}
      />
      <input
        type='string'
        placeholder='position'
        name='position'
        value={position}
        onChange={onChange}
      />
      <input
        type='number'
        placeholder='FITSCORE (remove and calculate)'
        name='fitscore'
        value={fitscore}
        onChange={onChange}
      />
      <div>
        <input
          type='submit'
          value={current ? 'Update Player' : 'Add Player'}
          className='btn btn-primary btn-block'
        />
      </div>
      { current && <div>
        <button className='btn btn-light btn-block' onClick={clearAll}>Clear</button>
      </div>}
    </form>
  );
};

export default PlayerForm;
