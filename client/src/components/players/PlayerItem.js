import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PlayerContext from '../../context/player/playerContext';

const PlayerItem = ({ player }) => {
  const playerContext = useContext(PlayerContext);
  const { deletePlayer, setCurrent, clearCurrent } = playerContext;

  const { _id, name, email } = player;

  const onDelete = () => {
    deletePlayer(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open' /> {email}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(player)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

PlayerItem.propTypes = {
  player: PropTypes.object.isRequired
};

export default PlayerItem;
