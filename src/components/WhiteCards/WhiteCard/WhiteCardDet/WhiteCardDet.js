import React from 'react';
import classes from './WhiteCardDet.css';
import { connect } from 'react-redux';


const whiteCardDet = (props) => {

  return(
    <div className="classes.WhiteCardDet">
        <div>
          <p>{props.detailedCard.phrase}</p>
          <p>{props.detailedCard.phrase}</p>
          <p>{props.detailedCard.phrase}</p>
        </div>
        <button onClick ={() => props.onCloseDetail()}>close modal</button>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    isDetailing: state.isDetailing,
    detailedCard: state.detailedCard
  }
};

const mapDispatchToProps = dispatch => {
  return{
    onCloseDetail: () => dispatch({type:'CLOSE_DETAIL'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(whiteCardDet);
