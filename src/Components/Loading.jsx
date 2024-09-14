import React from "react";
import loading from '/images/loading.gif'

const Loading = () => {
  return (
    <div  className='loading'>
      <img src={loading} alt="cargando..." />
    </div>
  );
};

export default Loading;