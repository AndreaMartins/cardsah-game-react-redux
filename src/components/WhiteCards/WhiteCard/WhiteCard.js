import React from 'react';
import classes from './WhiteCard.css';
import WhiteCardDet from './WhiteCardDet/WhiteCardDet'

const whiteCard = (props) => {

  return(
    <div className="classes.WhiteCard" onClick ={props.clicked}>
      <div>
        <button>{props.phrase}</button>
      </div>
    </div>
  )
};


export default whiteCard;
