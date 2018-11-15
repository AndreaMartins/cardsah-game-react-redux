import React from 'react';
import classes from './BlackCard.css';
import { connect } from 'react-redux';

const blackCard = (props) => {

  return(
    <div className="container__BlackCard">
      <div className="BlackCard">
        <p>{props.blackCardPicked}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    blackCardPicked: state.blackCardPicked.phrase
  }
}

export default connect(mapStateToProps)(blackCard);
