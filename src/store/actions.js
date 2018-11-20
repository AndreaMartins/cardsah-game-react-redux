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
        .then(response =>{
          dispatch(setCards(response.data));
        })
        .catch(error =>{
          dispatch(fetchCardsFailed())
        });
  };
};
