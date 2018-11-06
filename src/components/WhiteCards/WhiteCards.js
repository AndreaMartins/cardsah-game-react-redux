import React from 'react';
import classes from './WhiteCards.css';
import { connect } from 'react-redux';

const whiteCards = (props) => {

  let phrase = "Justin Bieber"

  return(
    <div className="classes.WhiteCard">
      <div>
        {props.whiteCardsPicked.map(
          card => (
            <p>{card.phrase}</p>
          )
        )}
        <p>{props.whiteCardsPicked[0].phrase}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    whiteCardsPicked : state.whiteCardsPicked
  }
}

export default connect(mapStateToProps)(whiteCards);
