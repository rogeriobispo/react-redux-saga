
function addReserveRequest(id){
  return {
    type: 'ADD_RESERVE_REQUEST',
    id,
  }
}

function addReserveSuccess(trip){
  return {
    type: 'ADD_RESERVE_SUCCESS',
    trip,
  }
}


function removeReserve(reserveId) {
  return {
    type: 'REMOVE_RESERVE',
    reserveId,
  }
}

function removeReserveItem(reserveId) {
  return {
    type: 'REMOVE_RESERVE_ITEM',
    reserveId,
  }
}


function addReserveItemRequest(reserveId) {
  return {
    type: 'ADD_RESERVE_ITEM_REQUEST',
    reserveId,
  }
}

function addReserveItemSuccess(reserveId) {
  return {
    type: 'ADD_RESERVE_ITEM_SUCCESS',
    reserveId,
  }
}

export {
  addReserveRequest,
  addReserveSuccess,
  removeReserveItem,
  addReserveItemRequest,
  addReserveItemSuccess,
  removeReserve
}