import React, { useEffect } from 'react'

import { useGlobalContext } from '../Components/utils/global.context'

import Card from '../Components/Card'

// En el proximo paso el siguiente import sera movido a "Context" (estado global de neustra aplicacion)


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
//


const Home = () => {

      const {state} = useGlobalContext();

      return (
            <div className="" >
                  <h1>Home</h1>
                  <div className='card-grid'>
                        {state.data.map(item => <Card key={item.id} name={item.name} username={item.username} id={item.id}/> )}
                  </div>
            </div>
      )
}

export default Home
