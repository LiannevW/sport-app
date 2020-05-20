import React from 'react';

const ExerciseInput = ({ name, onChange }) => {

    return (
        <div>
            <input
                type='number'
                placeholder={'vul hier de score in'}
                name={name}
                onChange={onChange}
                required
            />
        </div>
    );
};

export default ExerciseInput;
