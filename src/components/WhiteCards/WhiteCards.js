import React from 'react';
import classes from './WhiteCards.css';
import { connect } from 'react-redux';
import WhiteCard from './WhiteCard/WhiteCard';

const whiteCards = (props) => {

  let phrase = "Justin Bieber"

  return(
    <div className="classes.WhiteCard">
      <div>
        {props.whiteCardsPicked.map(
          (card,index) => (
            <WhiteCard
              key={card.id}
              id={card.id}
              phrase= {card.phrase}
              clicked={() =>props.onStoreResult(card.id, card.phrase)}
              // changed ={(event) => props.changed(event, card.id)}
            />
          )
        )}
        {props.picked ?
          <div>
            <p>{props.blackCardPicked.phrase}</p>
            {props.pickedCard ? props.pickedCard.phrase : null }
          </div> : null
        }
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    whiteCardsPicked : state.whiteCardsPicked,
    blackCardPicked: state.blackCardPicked,
    pickedCard: state.pickedCard,
    picked: state.picked
  }
};

const mapDispatchToProps = dispatch => {
  return{
    onOpenDetail: () => dispatch({type:'OPEN_DETAIL'}),
    onStoreResult: (id, phrase) => dispatch({type: 'STORE_RESULT', cardData:{id:id, phrase: phrase}})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(whiteCards);
