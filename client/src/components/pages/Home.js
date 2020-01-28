import React, {useContext, useEffect} from 'react';

// players
import Players from '../players/Players';
import PlayerForm from '../players/PlayerForm';
import PlayerFilter from '../players/PlayerFilter';

// context
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <div>
         <PlayerForm></PlayerForm>
       </div>
       <div>
         <PlayerFilter></PlayerFilter>
         <Players></Players>
       </div>
    </div>
  );
};

export default Home;
