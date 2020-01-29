import React, { useContext, useEffect } from 'react';

import ScoreContext from '../../context/score/scoreContext';
import Spinner from '../layout/Spinner';

const FitScore = () => {
    const scoreContext = useContext(ScoreContext);

    const { fitScore, getFitscores } = scoreContext;


    useEffect(() => {
        getFitscores();
        // eslint-disable-next-line
    }, []);

  return (
    <div>
      {fitScore !== null ? (
        <table>
          <tbody>
              <tr>
                  <th>Player</th>
                  <th>Fit score</th>
              </tr>
              { fitScore.map(player => (
                <tr key={player.name+player.fitscore}>
                  <td>{player.name}</td>
                  <td>{player.fitscore}</td>
                </tr> ))}
          </tbody>
        </table>
      )
      : (
        <Spinner />
      )}
    </div>
  );
};

export default FitScore;

