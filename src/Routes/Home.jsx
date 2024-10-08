import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';
import Loading from '../Components/Loading';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main className={state.theme === 'dark' ? 'dark' : 'light'} >
      <h1>Home</h1>
      {state.dentists ? 
        <div className='card-grid'>
          {/* Aqui deberias renderizar las cards */}
          {state?.dentists?.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))}
        </div>
        :
          <Loading />
      }

    </main>
  )
}

export default Home