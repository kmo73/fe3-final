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

      console.log( state );

      return (
            <div className="home" >
                  <h1>Home</h1>
                  { Loading  ? <p>Loading...</p> :
                  <div className='card-grid'>
                        {data.map(item => <Card key={item.id} itemProps={item}/> )}
                        {/* Cambie el orden del pasaje de props para que tuviera mas sentido arrancar pasando el ID */}
                  </div>}
            </div>
      )

}

export default Home
