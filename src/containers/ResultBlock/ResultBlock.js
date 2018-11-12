import React from 'react';
import { connect } from 'react-redux';

const ResultBlock = (props) => {

  return (
    <div>
      {props.picked ?
        <div>
          <p>{props.blackCardPicked.phrase}</p>
          {props.pickedCard ? props.pickedCard.phrase : null }
        </div> : null
      }
    </div>
  );
};

const mapStateToProps = state => {
  return{
    whiteCardsPicked : state.whiteCardsPicked,
    blackCardPicked: state.blackCardPicked,
    pickedCard: state.pickedCard,
    picked: state.picked
  }
};

export default connect (mapStateToProps)(ResultBlock);
