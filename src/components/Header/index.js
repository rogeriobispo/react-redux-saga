import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './styles.css';

function Header() {
  const reserveSize = useSelector(state => state.reserves.length);
 return (
   <header className='container'>
     <Link to="/">
        <img className="logo" src={Logo} alt="logo"  />
     </Link> 

     <Link className='reservas' to="/reservas">
        <div>
          <strong>Minha Reservas</strong>
          <span>{reserveSize} Reservas</span>
        </div>
      </Link>
   </header>
 );
}


export default Header;