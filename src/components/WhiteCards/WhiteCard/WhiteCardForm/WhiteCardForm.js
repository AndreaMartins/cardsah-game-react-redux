import React, { Component } from 'react';
import classes from './WhiteCardForm.css';
import { connect } from 'react-redux';

class whiteCardForm extends Component {

  state = {
    cardData:{
      id:this.props.editedCard.id,
      phrase:this.props.editedCard.phrase,
    }
  }

 inputChangedHandler = (event) => {
    this.setState({cardData:{phrase:event.target.value}});
  }

  render() {
    return(
      <div>
        <div>
          <p>this is editing </p>
          <p>{this.state.value}</p>
          <input placeholder={this.props.editedCard.phrase}
                 onChange ={this.inputChangedHandler}
          />
        </div>
        <button onClick ={() => this.props.onCloseEdit()}>close modal</button>
        <button onClick ={(id, phrase) => this.props.onUpdateEdit(this.state.cardData.id, this.state.cardData.phrase)}>update card</button>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    isEditing: state.isEditing,
    editedCard: state.editedCard
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onCloseEdit: () => dispatch({type:'CLOSE_EDIT'}),
    onUpdateEdit: (id, phrase) => dispatch({type:'UPDATE_EDIT', cardData:{id:id, phrase:phrase}})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(whiteCardForm);
