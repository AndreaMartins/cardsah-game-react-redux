import * as actionTypes from './actions';

const initialBlackCard = { phrase: 'shuffling', id:'b1'};

const initialWhiteCards =[
  { phrase: 'shuffling', id:'w1'},
  { phrase: 'shuffling', id:'w2'},
  { phrase: 'shuffling', id:'w3'},
]

// initial state deberia ser una copia de un shuffle y quedarse asi
const initialState = {
    cards:'',
    whiteCardGroup:'',
    blackCardGroup:'',
    blackCardPicked: initialBlackCard,
    whiteCardsPicked : initialWhiteCards,
    pickedCard: '',
    detailedCard:'',
    editedCard: '',
    addedCard:'',
    picked: false,
    isEditing: false,
    isAdding: false,
    isDetailing: false,
    error: false
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

    case actionTypes.SET_CARDS:
      return {
        ...state,
        cards: action.cards,
        blackCardGroup:action.cards.blackCardGroup,
        whiteCardGroup:action.cards.whiteCardGroup,
        blackCardPicked: action.cards.blackCardGroup[Math.floor(Math.random()*action.cards.blackCardGroup.length)],
        whiteCardsPicked:action.cards.whiteCardGroup.sort(function(){return .5 - Math.random()}).slice(0,3)
      };
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true
      }

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
    case actionTypes.CLOSE_DETAIL:
      return {
        ...state,
        detailedCard:'',
        isDetailing:false
      }
    case actionTypes.OPEN_EDIT:
      const theEditedCard = {
        id:action.cardData.id,
        phrase:action.cardData.phrase
      }
      return {
        ...state,
        editedCard: theEditedCard,
        isEditing: true,
      }
    case actionTypes.UPDATE_EDIT:
      const theUpdatedCard = {
        id:action.cardData.id,
        phrase:action.cardData.phrase
      }

      return{
        ...state,
        whiteCardsPicked :
        state.whiteCardsPicked.map((e)=> {
            if (e.id == state.editedCard.id){
              return theUpdatedCard
            }
            return e
          }),
        isEditing: true
      }
    case actionTypes.CLOSE_EDIT:
      return{
        ...state,
        editedCard:'',
        isEditing:false
      }
    case actionTypes.OPEN_ADD:
      return {
        ...state,
        isAdding: true,
      };
    case actionTypes.ADD_CARD:
      const theAddedCard = {
        id:action.cardData.id,
        phrase:action.cardData.phrase
      }
      return{
        ...state,
        whiteCardsPicked:state.whiteCardsPicked.concat(theAddedCard),
        addedCard:'',
        isAdding: true
      }
    case actionTypes.CLOSE_ADD:
      return {
        ...state,
        isAdding:false,
      }
    default:
      return state;
  }
};

export default reducer;
