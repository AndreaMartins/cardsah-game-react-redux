import React from 'react';
import classes from './WhiteCard.css';
import WhiteCardDet from './WhiteCardDet/WhiteCardDet'

const whiteCard = (props) => {

  return(
    <div className="WhiteCard" onClick ={props.clicked}>
      <p>{props.phrase}</p>
      <div className="hover__WhiteCard" >
        <p>Select this card</p>
      </div>
    </div>
  )
};


export default whiteCard;
