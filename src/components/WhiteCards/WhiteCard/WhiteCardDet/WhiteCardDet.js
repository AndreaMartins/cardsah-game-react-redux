import React from 'react';
import classes from './WhiteCardDet.css';

const whiteCardDet = (props) => {

  return(
    <div className="classes.WhiteCardDet">
      <div>
        <p>{props.phrase}</p>
      </div>
    </div>
  )
};

export default whiteCardDet;
