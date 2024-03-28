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

      let bodyRender;

      console.log( state.error );
      
      // if( state.error === "" ){
      //       bodyRender = <div className='card-grid'>
      //             {data.map(item => <Card key={item.id} itemProps={item}/> )}
      //       </div>;
      // } else {
      //       bodyRender = <h3>{state.error}</h3>;
      // }

      return (
            
            <div className="" >
                  <h1>Home</h1>
                  {
                        state.error === "" && (
                                    <div className='card-grid'>
                                          {data.map(item => <Card key={item.id} itemProps={item}/> )}
                                    </div>
                        )
                  }
                   
                  { state.error !== "" && (<h3>{state.error}</h3>)
            </div>
      )

}

export default Home
