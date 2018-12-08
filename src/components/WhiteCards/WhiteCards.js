import React from 'react';
import classes from './WhiteCards.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import WhiteCard from './WhiteCard/WhiteCard';
import WhiteCardDet from './WhiteCard/WhiteCardDet/WhiteCardDet';
import WhiteCardForm from './WhiteCard/WhiteCardForm/WhiteCardForm';
import WhiteCardAdd from './WhiteCard/WhiteCardAdd/WhiteCardAdd';
import Modal from '../../UI/Modal/Modal';

const whiteCards = (props) => {
  console.log(props.whiteCardsPicked)
  return(
    <div>
      <div className="container__WhiteCard">
        {props.whiteCardsPicked.map(
          (card,index) => (
          <div key={card.id}>
            <Link to= "/result">
              <WhiteCard
                key={card.id}
                id={card.id}
                phrase= {card.phrase}
                clicked={() =>props.onStoreResult(card.id, card.phrase)}
              />
            </Link>
            <div className="options__WhiteCard">
              <a onClick={() =>props.onOpenDetail(card.id, card.phrase)}> Detail </a>
              <a onClick={() =>props.onOpenEdit(card.id, card.phrase)}> Edit </a>
            </div>
          </div>
          )
        )}
      </div>
       <Modal show={props.isDetailing}><WhiteCardDet/></Modal>
      {/* <div>{props.isDetailing ? <Modal show={props.isDetailing}><WhiteCardDet/></Modal> : null }</div> */}
      {/* <div>{props.isEditing ? <WhiteCardForm/> : null }</div> */}
      <div>{props.isAdding ? <WhiteCardAdd/> : null }</div>
      <div className="add__WhiteCard">
        <button onClick={() =>props.onOpenAddCard()}> + </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    whiteCardsPicked : state.whiteCardsPicked,
    blackCardPicked: state.blackCardPicked,
    pickedCard: state.pickedCard,
    picked: state.picked,
    isEditing: state.isEditing,
    isAdding: state.isAdding,
    isDetailing: state.isDetailing
  }
};

const mapDispatchToProps = dispatch => {
  return{
    onStoreResult: (id, phrase) => dispatch({type: 'STORE_RESULT', cardData:{id:id, phrase: phrase}}),
    onOpenDetail: (id, phrase) => dispatch({type:'OPEN_DETAIL', cardData:{id:id, phrase: phrase}}),
    onOpenEdit: (id, phrase) => dispatch({type:'OPEN_EDIT', cardData:{id:id, phrase: phrase}}),
    onOpenAddCard: () => dispatch({type:'OPEN_ADD'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(whiteCards);
