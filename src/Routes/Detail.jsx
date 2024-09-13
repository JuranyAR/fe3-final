import React, { useContext, useState, useEffect  } from 'react'
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const dentistDetail = state.dentists.find(dentist => dentist.id === parseInt(id));
    if (dentistDetail) {
      setDentist(dentistDetail);
    } else {
      // Si el dentista no se encuentra, hacer una llamada a la API
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => setDentist(data))
        .catch(error => console.error('Error al obtener los detalles del dentista:', error));
    }
  }, [id, state.dentists]);

  if (!dentist) {
    return <p>Cargando detalles del dentista...</p>;
  }

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <tbody>
          <tr>
            <th>Nombre</th>
            <td>{dentist.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{dentist.email}</td>
          </tr>
          <tr>
            <th>Teléfono</th>
            <td>{dentist.phone}</td>
          </tr>
          <tr>
            <th>Sitio Web</th>
            <td>
              <a href={`https://${dentist.website}`} target="_blank" rel="noopener noreferrer">
                {dentist.website}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Detail