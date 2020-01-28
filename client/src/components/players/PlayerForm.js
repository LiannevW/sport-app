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
        email: ''
      });
    }
  }, [playerContext, current]);

  const [player, setPlayer] = useState({
    name: '',
    email: ''
  });

  const { name, email } = player;

  const onChange = e =>
    setPlayer({ ...player, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      console.log('add player, ', player)
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
