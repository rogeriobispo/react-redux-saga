import { call, all, put, takeLatest, select } from 'redux-saga/effects';
import api from '../../../services/api'
import history from '../../../services/history'
import { addReserveItemSuccess, addReserveSuccess } from './action'

function* addToReserve({ id }){
  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount
  
  const tripExists = yield select(
    state => state.reserves.find(trip => trip.id === id)
  );

  const currentStock = tripExists ? tripExists.amount : 0; 
  
  if(currentStock >= stockAmount){
    alert('Não temos essa quantidade disponivel no estoque')
    return
  }

  if(tripExists){
    yield put(addReserveItemSuccess(id))
  } else {
    const response = yield call(api.get, `trips/${id}`)
    
    const data = {
      ...response.data,
      amount: 1
    }
    yield put(addReserveSuccess(data))
    history.push('/reserve')
  }
}

function* addReservedItemRequest({ reserveId: id }) {
  const tripExists = yield select(
    state => state.reserves.find(trip => trip.id === id)
  );

  
  if(tripExists) {
    const stock = yield call(api.get, `/stock/${id}`);
    
    console.log(stock.data.amount)
    const stockAmount = stock.data.amount
    
  
    const amount = tripExists.amount + 1;

    if(amount > stockAmount){
      alert('Não temos essa quantidade disponivel no estoque')
      return
    }
    yield put(addReserveItemSuccess(id))

  }


}

export default all([
  takeLatest('ADD_RESERVE_REQUEST', addToReserve),
  takeLatest('ADD_RESERVE_ITEM_REQUEST', addReservedItemRequest)
])

