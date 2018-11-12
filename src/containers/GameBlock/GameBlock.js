import React from 'react';
import BlackBlock from './BlackBlock/BlackBlock';
import WhiteBlock from './WhiteBlock/WhiteBlock';
import ResultBlock from '../ResultBlock/ResultBlock';

const GameBlock = (props) => {

  return (
    <div>
      <BlackBlock/>
      <WhiteBlock/>
      <ResultBlock/>
    </div>
  );
};

export default GameBlock;
