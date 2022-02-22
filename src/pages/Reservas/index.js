import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md'
import { removeReserve, addReserveItemRequest, removeReserveItem } from '../../store/modules/reserves/action'

import './style.css';

function Reservas(){
  const dispatch = useDispatch();
  const reserve = useSelector(state => state.reserves);

  function handleDelete(reserveId){
    dispatch(removeReserve(reserveId))
  }

  function handleDeleteItem(reserveId) {
    dispatch(removeReserveItem(reserveId))
  }

  function handleAddItemm(reserveId) {
    dispatch(addReserveItemRequest(reserveId))
  }
  return(
    <>
      <h1 className='title'>Você solicitou {reserve.length} reserva</h1>
      {reserve.map(reserve => (
        <div className='reservas' key={reserve.id}>
          <img src={reserve.image} alt={reserve.title}/>
          <strong>{reserve.title}</strong>
          <div id="amount">
            <button type='button' onClick={() => handleDeleteItem(reserve.id)}>
              <MdRemoveCircle size={25} color='#191919' />
            </button>
            <span>Quantidade {reserve.amount}</span>
            <button type='button' onClick={() => handleAddItemm(reserve.id)}>
              <MdAddCircle size={25} color='#191919' />
            </button>
          </div>
          
          <button
            type='button'
            onClick={() => handleDelete(reserve.id)}
          >
            <MdDelete size={20} color='#191919'/>
          </button>
        </div>
      ))}

      <footer>
        <button type='button'>Solicitar reservas</button>
      </footer>
    </>
  )
}

export default Reservas;