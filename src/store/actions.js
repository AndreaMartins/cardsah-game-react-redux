import axios from '../axios-orders';

export const SET_CARDS = 'SET_CARDS';
export const FETCH_INGREDIENTS_FAILED = 'FETCH_INGREDIENTS_FAILED';


export const STORE_RESULT = 'STORE_RESULT';

export const OPEN_DETAIL = 'OPEN_DETAIL';
export const CLOSE_DETAIL = 'CLOSE_DETAIL';

export const OPEN_EDIT = 'OPEN_EDIT';
export const UPDATE_EDIT = 'UPDATE_EDIT';
export const CLOSE_EDIT = 'CLOSE_EDIT';

export const OPEN_ADD = 'OPEN_ADD';
export const ADD_CARD = 'ADD_CARD';

export const SUBMIT_CARD = 'SUBMIT_CARD';
export const SUBMIT_CARD_FAILED = 'SUBMIT_CARD_FAILED';

export const CLOSE_ADD = 'CLOSE_ADD';


export const fetchCardsFailed = () => {
  return{
    type: FETCH_INGREDIENTS_FAILED
  }
};

export const setCards = (cards) => {
  return {
    type: SET_CARDS,
    cards: cards
  };
};

export const initCards = () => {
  return dispatch => {
      axios.get('https://cards-ah.firebaseio.com/cards.json')
        .then(res=>{
          const cards ={
            fetchedWhiteCards: [],
            fetchedBlackCards:[]
          }

          for (let key in res.data.whiteCardGroup){
            cards.fetchedWhiteCards.push ({
              ...res.data.whiteCardGroup[key]
            });
          }
          for (let key in res.data.blackCardGroup){
            cards.fetchedBlackCards.push ({
              ...res.data.blackCardGroup[key]
            });
          }
          dispatch(setCards(cards));
        })
        .catch(error =>{
          dispatch(fetchCardsFailed())
        });
  };
};

export const submitCard = (card) => {
    return {
      type: SUBMIT_CARD,
      card: card
    };
}

export const submitCardFailed = () => {
    return{
      type: SUBMIT_CARD_FAILED
    }
}

export const addCard = (cardId, cardPhrase) => {
  return dispatch => {
     let card = {
       id: cardId,
       phrase: cardPhrase,
     }
    axios.post('cards/whiteCardGroup.json', card)
      .then(response => {
        dispatch(submitCard(card));
      })
      .catch(error =>{
        dispatch(submitCardFailed(error));
      });
  };
}
