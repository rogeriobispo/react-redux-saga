import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdFlightTakeoff } from 'react-icons/md';
import api from '../../services/api';
import { addReserveRequest } from '../../store/modules/reserves/action';

import './style.css';
function Home(){
  const dispatch = useDispatch();

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadTrips() {
      const response = await api.get('/trips');
      setTrips(response.data);
    }

    loadTrips();
  }, []);

  function hanndleTrip(id){
    dispatch(addReserveRequest(id))
  }
  return(
    <div>
      <div className='box'>
        
          {trips.map(trip => (
            <li key={trip.id}>
              <img src={trip.image} alt={trip.title}/>
              <strong>{trip.title}</strong>
              <span>{trip.status ? 'Disponivel' : 'Indisponivel'}</span>
              <button
                type='button'
                onClick={() => hanndleTrip(trip.id)}
              >
                <div>
                  <MdFlightTakeoff size={16} color='#fff' />
                </div>
                <span>Solicitar Reserva</span>
              </button>
            </li>

          ))}
        
      </div>

    </div>
  )
}

export default Home;