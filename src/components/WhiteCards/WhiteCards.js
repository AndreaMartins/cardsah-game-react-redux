import React from 'react';
import classes from './WhiteCards.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import WhiteCard from './WhiteCard/WhiteCard';
import WhiteCardDet from './WhiteCard/WhiteCardDet/WhiteCardDet';

const whiteCards = (props) => {

  let phrase = "Justin Bieber"

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
      <div>{props.isDetailing ? <WhiteCardDet/> : null }</div>
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
    onOpenEdit: (id, phrase) => dispatch({type:'EDIT_CARD', cardData:{id:id, phrase: phrase}}),
    onOpenAddCard: () => dispatch({type:'ADD_CARD'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(whiteCards);
