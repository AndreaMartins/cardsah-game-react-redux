import React from 'react';
import classes from './WhiteCardDet.css';
import { connect } from 'react-redux';


const whiteCardDet = (props) => {

  return(
    <div className="classes.WhiteCardDet">
        <div>
          <p>isdetailing</p>
          <p>isdetailing</p>
          <p>isdetailing</p>
        </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    isDetailing: state.isDetailing,
  }
};


export default connect(mapStateToProps)(whiteCardDet);
