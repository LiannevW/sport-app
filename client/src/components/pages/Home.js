import React from 'react';
import { Link } from 'react-router-dom';

// import FitScore from '../results/FitScore';

const Home = () => {
  return (
    <div>
      <div>
        <Link className='btn btn-primary btn-block' to='/test'>Start test</Link>
        <Link className='btn btn-primary btn-block' to='/results'>View test results</Link>
        <Link className='btn btn-primary btn-block' to='/manage-players'>Add and edit players</Link>
      </div>
      <div>
        {/* <FitScore /> */}
      </div>
    </div>
  );
};

export default Home;
