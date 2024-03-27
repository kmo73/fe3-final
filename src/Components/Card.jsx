import React, { useState } from "react";
import { useGlobalContext } from '../Components/utils/global.context'

const Card = ({itemProps}) => { // Cambie el orden para que tenga mas logica
      const { id, name, username } = itemProps;
      const {state, dispatch} = useGlobalContext();

      const [ isFav, setIsFav ] = useState( false );

      const addFav = (e)=>{
            e.preventDefault();

            let selectedCard = {
                  id: id,
                  name: name,
                  username: username,
            };
            console.log( selectedCard );

            dispatch({type: 'ADD_FAV', payload: selectedCard});
      }

      const delFav = (e)=>{
            e.preventDefault();

            dispatch({type: 'DEL_FAV', payload: id});
      }

      console.log( state.favsIndex );

      return (
            <div className="card">
                  <a href="">
                        <img src="../../public/images/doctor.jpg" alt="" className="docImg"/>
                        <h3>{name}</h3>
                        <p>{username}</p>
                  </a>
                  {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

                  {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
                  { 
                        state.favsIndex[id] === 0
                        ? <button onClick={addFav} className="favButton">Add favorite</button>
                        : <button onClick={delFav} className="favButton unselectedFav" >Remove Favorite</button>
                  }
            </div>
      );
};

export default Card;
