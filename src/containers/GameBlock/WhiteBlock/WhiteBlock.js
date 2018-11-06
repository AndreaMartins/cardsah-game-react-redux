import React, { Component } from 'react';
import { connect } from 'react-redux';

import WhiteCards from '../../../components/WhiteCards/WhiteCards';

class WhiteBlock extends Component {

  render () {
    return (
      <div>
        <WhiteCards/>
      </div>
    )
  };
};

export default WhiteBlock;
