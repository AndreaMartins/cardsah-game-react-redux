import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions'

import WhiteCards from '../../../components/WhiteCards/WhiteCards';

class WhiteBlock extends Component {

  componentDidMount() {
    this.props.onInitCards();
  }

  render () {
    return (
      <div>
        {this.props.whiteCardsPicked.length > 0 ?
          <WhiteCards/> : null
        }

      </div>
    )
  };
};

const mapStateToProps =state => {
  return{
    whiteCardsPicked : state.whiteCardsPicked,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitCards:()=> dispatch(actions.initCards()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WhiteBlock);
