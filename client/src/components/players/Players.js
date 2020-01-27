import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PlayerItem from './PlayerItem';
import PlayerContext from '../../context/player/playerContext'

const Players = () => {
  const playerContext = useContext(PlayerContext);

  const { players, filtered } = playerContext;

  if(players.length === 0) {
    return <h4>Please add a player</h4>
  }

  return (
    <Fragment>
      <TransitionGroup>
          {filtered !== null
            ? filtered.map(player => (
                <CSSTransition
                  key={player.id}
                  timeout={500}
                  classNames='item'
                >
                  <PlayerItem player={player} />
                </CSSTransition>
              ))
            : players.map(player => (
                <CSSTransition
                  key={player.id}
                  timeout={500}
                  classNames='item'
                >
                  <PlayerItem player={player} />
                </CSSTransition>
              ))}
        </TransitionGroup>
    </Fragment>
  );
};

export default Players;
