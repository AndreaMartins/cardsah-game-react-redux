import * as actionTypes from './actions';

const blackCardGroup =[
  { phrase: 'How did I lose my virginity?'},
  { phrase: 'Why can not sleep at night?'},
  { phrase: 'What is that smell'},
  { phrase: 'I got 99 problems but __ aint one'}
]

const whiteCardGroup =[
  { phrase: 'Being on fire'},
  { phrase: 'Racism'},
  { phrase: 'Old-people smell'},
  { phrase: 'A micropenis'},
  { phrase: 'Women in yogurt commercials'},
  { phrase: 'Classist undertones'}
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

const initialState = {
    blackCardPicked: shuffleBlackCard(),
    whiteCardsPicked : shuffleWhiteCards()
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CARD:
      return {
        ...state,
        picked:true
      };
    case actionTypes.REMOVE_CARD:
      return {
        ...state,
        picked:false
      };
    case actionTypes.PICKED_CARD:
      return {
        ...state,
        picked:false
      };
    default:
      return state;
  }
};

export default reducer;
