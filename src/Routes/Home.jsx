import React from 'react'

import { useGlobalContext } from '../Components/utils/global.context'

import Card from '../Components/Card'

// En el proximo paso el siguiente import sera movido a "Context" (estado global de neustra aplicacion)
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
//


const Home = () => {
      const {state} = useGlobalContext();
      // setTimeout(
      //       () => {
      //       },
      //       5000
      // )
      console.log( state );

      return (
            <main className="" >
                  <h1>Home</h1>
                  <div className='card-grid'>
                        {
                              state.data.map(
                                    (item) =>
                                    {
                                          <Card key={item.id} name={item.name} username={item.username}/>
                                    }
                              )
                        }
                  <h3>{state.data[0].name}</h3>
                  </div>
            </main>
      )
}

export default Home
