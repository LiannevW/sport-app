import React, { useReducer } from 'react';
import uuid from 'uuid';
import PlayerContext from './playerContext';
import PlayerReducer from './playerReducer';
import {
    ADD_PLAYER,
    DELETE_PLAYER,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_PLAYER,
    FILTER_PLAYERS,
    CLEAR_FILTER
} from '../types'

const PlayerState = props => {
    const initialState = {
        players: [
            {
                id: 1,
                name: 'Harry White',
                email: 'harry@gmail.com'
            }, {
                id: 2,
                name: 'Betty B',
                email: 'betty@gmail.com'
            }
        ],
        current: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(PlayerReducer, initialState);

    // Add player
    const addPlayer = player => {
        player.id = uuid.v4();
        dispatch({ type:  ADD_PLAYER, payload: player })
    }

    // Delete player
    const deletePlayer = id => {
        dispatch({ type:  DELETE_PLAYER, payload: id })
    }

    // Set current player
    const setCurrent = player => {
        dispatch({ type: SET_CURRENT, payload: player })
    }

    // Clear current player
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }

    // Update player
    const updatePlayer = player => {
        dispatch({ type: UPDATE_PLAYER, payload: player })
    }

    // Filter players
    const filterPlayers = text => {
        dispatch({ type: FILTER_PLAYERS, payload: text })
    }

    // Clear filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER})
    }

    return (
        <PlayerContext.Provider
        value={{
            players: state.players,
            current: state.current,
            filtered: state.filtered,
            addPlayer,
            deletePlayer,
            setCurrent,
            clearCurrent,
            updatePlayer,
            filterPlayers,
            clearFilter
        }}>
            { props.children }
        </PlayerContext.Provider>
    )
};

export default PlayerState
