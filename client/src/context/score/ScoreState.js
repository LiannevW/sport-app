// import React, { useReducer } from 'react';
// import axios from 'axios';

// import ScoreContext from './scoreContext';
// import ScoreReducer from './scoreReducer';
// import {
//   GET_FITSCORE,
//   FITSCORE_ERROR
// } from '../types'

// const ScoreState = props => {
//     const initialState = {
//         fitScore: null,
//     };

//   const [state, dispatch] = useReducer(ScoreReducer, initialState);

//     // Get players
//     const getFitscores = async () => {
//         try {
//         const res = await axios.get('/api/scores');

//         dispatch({
//             type: GET_FITSCORE,
//             payload: res.data
//         });
//         } catch (err) {
//         dispatch({
//             type: FITSCORE_ERROR,
//             payload: err.response.msg
//         });
//         }
//     };

//   return (
//     <ScoreContext.Provider
//       value={{
//         fitScore: state.fitScore,
//         getFitscores
//       }}
//     >
//       {props.children}
//     </ScoreContext.Provider>
//   );
// };

// export default ScoreState;
