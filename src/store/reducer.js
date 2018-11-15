import * as actionTypes from './actions';

const blackCardGroup =[
  { phrase: 'How did I lose my virginity?', id:'b1'},
  { phrase: 'Why can not sleep at night?', id:'b2'},
  { phrase: 'What is that smell', id:'b3'},
  { phrase: 'I got 99 problems but __ aint one', id:'b4'}
]

const whiteCardGroup =[
  { phrase: 'Being on fire', id:'w1'},
  { phrase: 'Racism', id:'w2'},
  { phrase: 'Old-people smell', id:'w3'},
  { phrase: 'A micropenis',id:'w4'},
  { phrase: 'Women in yogurt commercials', id:'w5'},
  { phrase: 'Classist undertones', id:'w6'}
]

const shuffleBlackCard = () => {
  let a = blackCardGroup[Math.floor(Math.random()*blackCardGroup.length)];
  return a
}

const shuffleWhiteCards = () =>{
  let shuffled = whiteCardGroup.sort(function(){return .5 - Math.random()});
  let selected = shuffled.slice(0,3);
  return selected
}

// initial state deberia ser una copia de un shuffle y quedarse asi
const initialState = {
    blackCardPicked: shuffleBlackCard(),
    whiteCardsPicked : shuffleWhiteCards(),
    pickedCard: '',
    detailedCard:'',
    editedCard: '',
    picked: false,
    isEditing: false,
    isAdding: false,
    isDetailing: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      const thePickedCard = {
        id:action.cardData.id,
        phrase:action.cardData.phrase
      }
      return {
        ...state,
        pickedCard: thePickedCard,
        picked: true
      };
    case actionTypes.OPEN_DETAIL:
      const theDetailedCard = {
        id:action.cardData.id,
        phrase:action.cardData.phrase
      }
      return {
        ...state,
        detailedCard:theDetailedCard,
        isDetailing: true,
      };
    case actionTypes.ADD_CARD:
      return {
        ...state,
        picked:true,
        isAdding: true,
      };
    case actionTypes.EDIT_CARD:
      return {
        ...state,
        picked:false,
        isEditing:true
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,

      }
    default:
      return state;
  }
};

export default reducer;
