import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import user from '/images/doctor.jpg';
import { ContextGlobal } from './utils/global.context';

const Card = ({ dentist }) => {
  const { state, dispatch } = useContext(ContextGlobal);
  const isFav = state.favDentists.find((fav) => fav.id === dentist.id);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: isFav? 'REMOVE_FAV':'ADD_TO_FAVS', payload: dentist });
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      <img src={user} alt="dentist"/>
      <Link to={`/dentist/${dentist.id}`}>
        <h3>{dentist.name}</h3>
      </Link>
      <p>{dentist.username}</p>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
