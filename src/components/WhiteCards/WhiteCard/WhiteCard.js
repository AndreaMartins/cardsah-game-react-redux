import React from 'react';
import classes from './WhiteCard.css';

const whiteCard = (props) => {

  return(
    <div className="classes.WhiteCard">
      <div>
        <p>{props.phrase}</p>
      </div>
    </div>
  )

};

export default whiteCard;
