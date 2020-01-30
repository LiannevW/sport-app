import React, { useEffect } from 'react';

// Form to select player and add score
const TestForm = () => {

    useEffect(() => {
      // eslint-disable-next-line
    }, []);

    const onSubmit = e => {
      e.preventDefault();
    };

  return (
    <form onSubmit={onSubmit}>
      <h1>Select player and add score to this exercise</h1>
      <div>
        <select>
          <option value={"a"}>a</option>
          <option value={"b"}>b</option>
          <option value={"c"}>c</option>
          <option value={"d"}>d</option>
        </select>
      </div>
      <div>
        <input
          type='submit'
          value='?'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default TestForm;

