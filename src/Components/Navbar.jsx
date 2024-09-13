import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { dispatch } = useContext(ContextGlobal);

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to="/">Home</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/favs">Destacados</Link>
      <button type='button' onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
        Cambiar Tema
      </button>
    </nav>
  );
}

export default Navbar