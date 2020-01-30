import React from 'react';
import { Link } from 'react-router-dom';

const PreviousLink = ({link}) => {

  return (
    <div>
       {(() => {
          switch(link) {
            case '/':
              return <Link className="fas fa-angle-left" to={link}> Home</Link>
            case '/tests':
              return <Link className="fas fa-angle-left" to={link}> Tests</Link>
            default:
              return console.log('back to home!');
          }
        })()}
    </div>
  );
};

export default PreviousLink;

