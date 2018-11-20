import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions'

import BlackCard from '../../../components/BlackCard/BlackCard';

class BlackBlock extends Component {


  render () {
    return (
      <div>
        <BlackCard/>
      </div>
    )
  };
};


export default BlackBlock;
