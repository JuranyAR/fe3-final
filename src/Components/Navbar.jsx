import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
import light from '/images/light.png';
import dark from '/images/dark.png';
import dentisLogo from '/images/logo-dentist.png';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { dispatch, state } = useContext(ContextGlobal);
  const themeIco = state.theme === 'light'? light : dark;


  return (
    <nav className={state.theme === 'dark' ? 'dark' : 'light'}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className="logo">
        <img src={dentisLogo} alt="logo" />
        <b><span className='red'>D</span>h Odonto</b>
      </div>
      <div className="menu">
        <Link to="/"><b>Home</b></Link>
        <Link to="/contact"><b>Contact</b></Link>
        <Link to="/favs"><b>Favs</b></Link>
        <button className="button-nav" type='button' onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
          <img src={themeIco} alt="theme" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar