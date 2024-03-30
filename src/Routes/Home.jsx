import React, { useEffect, useState } from 'react'
// Comento para suprimir warnings
// import React, { useEffect } from 'react'

import { useGlobalContext } from '../Components/utils/global.context'

import Card from '../Components/Card'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {

      const {state} = useGlobalContext();
      const {data} = state
      const [Loading, setLoading] = useState(true)

      useEffect(() => {
            setTimeout(() => {
                  setLoading(false)
            }, 1000);
      }, [])
            //Tengo que usar un estado para recibir data?
      //

      

      if( state.error === "" ){
            return (
                  <div className="home" >
                        <h1>Home</h1>
                        <div className='card-grid'>
                              {data.map(item => <Card key={item.id} itemProps={item}/> )}
                        </div>
                  </div>
            )
      }
      return (
            <div className="" >
                  <h3>{state.error}</h3>
            </div>
      )

}

export default Home
