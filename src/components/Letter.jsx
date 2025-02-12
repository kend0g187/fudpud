import React, { useContext } from 'react';
import { AppContext } from '../App';

function Letter({letterPos, attemptVal}) {
  const {board} = useContext(AppContext);
  const ltter = board[attemptVal][letterPos];
  return <div className='letter'>{ltter}</div>;
}

export default Letter;