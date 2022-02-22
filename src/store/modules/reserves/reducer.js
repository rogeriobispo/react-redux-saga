import producer from 'immer';

function reserve(state = [] , action) {
  switch(action.type) {
    case 'ADD_RESERVE_SUCCESS':
      return producer(state, draft => {
        draft.push(action.trip);
      })
    case 'REMOVE_RESERVE':
      return producer(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.reserveId);
        if(tripIndex >= 0) {
          draft.splice(tripIndex, 1);
        }
      })
    case 'REMOVE_RESERVE_ITEM':
      return producer(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.reserveId);
        if(tripIndex >= 0) {
          draft[tripIndex].amount -= 1;
          if(draft[tripIndex].amount === 0) {
            draft.splice(tripIndex, 1);
          }
        }
      })
    case 'ADD_RESERVE_ITEM_SUCCESS': 
    return producer(state, draft => {
      const tripIndex = draft.findIndex(trip => trip.id === action.reserveId);
      if(tripIndex >= 0) {
        draft[tripIndex].amount += 1;
        if(draft[tripIndex].amount === 0) {
          draft.splice(tripIndex, 1);
        }
      }
    })
    default:
      return state;
  }
}


export default reserve
