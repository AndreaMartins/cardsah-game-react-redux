import React, { Component } from 'react';
import classes from './WhiteCardAdd.css';
import { connect } from 'react-redux';

class whiteCardAdd extends Component {
  state ={
    cardData :{
      id:'w7',
      phrase:''
    }
  }

  inputChangedHandler = (event) => {
    this.setState({cardData:{phrase:event.target.value}});
  }


  render(){
    return(
      <div>
        <div>
          <p>this is adding</p>
          <input placeholder= 'write a phrase here'
                 onChange={this.inputChangedHandler}
          />
        </div>
        <button onClick ={(id, phrase)=>this.props.onAddCard(this.state.cardData.id, this.state.cardData.phrase)}>add card</button>
        <button onClick = {() => this.props.onCloseAdd()}> close </button>
      </div>
    )
  }


}

const mapStateToProps = state => {
  return {
    isAdding: state.isAdding,
    addedCard: state.addedCard
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddCard: (id, phrase) => dispatch({type:'ADD_CARD', cardData:{id:id, phrase:phrase}}),
    onCloseAdd: () => dispatch({type:'CLOSE_ADD'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(whiteCardAdd);
