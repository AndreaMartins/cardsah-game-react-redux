import React from 'react';
import BlackBlock from './BlackBlock/BlackBlock';
import WhiteBlock from './WhiteBlock/WhiteBlock';

const GameBlock = (props) => {

  return (
    <div>
      <BlackBlock/>
      <WhiteBlock/>
    </div>
  );
};

export default GameBlock;
