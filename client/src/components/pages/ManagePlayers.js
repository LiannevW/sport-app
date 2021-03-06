import React, {useContext, useEffect} from 'react';

// layout
import PreviousLink from '../layout/PreviousLink';

// players
import Players from '../players/Players';
import PlayerForm from '../players/PlayerForm';
import PlayerFilter from '../players/PlayerFilter';

// context
import AuthContext from '../../context/auth/authContext';

const ManagePlayers = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <PreviousLink link={'/'} />
      <div className='grid-2'>
        <div>
          <PlayerForm></PlayerForm>
        </div>
        <div>
          <PlayerFilter></PlayerFilter>
          <Players></Players>
        </div>
      </div>
    </div>
  );
};

export default ManagePlayers;
