import React from "react";
import { useGlobalContext } from '../Components/utils/global.context'
import { routes } from "./utils/routes";
import { Link } from 'react-router-dom'
import style from '../styles/styles.module.css'

const Card = ({itemProps}) => { // Cambie el orden para que tenga mas logica
      const { id, name, username } = itemProps;
      const {state, dispatch} = useGlobalContext();

      let favsList = JSON.parse( localStorage.getItem( "favs" ) );
      // Print jsonObject array
      // console.log( favsList );

      let i = 0, found = false;

      while ( found === false && i < favsList.length && favsList.length > 0) {
            // console.log( favsList[i] );
            if( id === favsList[i].id ){
                  found = true;
            }
            i++
      }

      const addFav = (e)=>{
            e.preventDefault();

            let selectedCard = {
                  id: id,
                  name: name,
                  username: username,
            };
            // console.log( selectedCard );

            dispatch({type: 'ADD_FAV', payload: selectedCard});
      }

      const delFav = (e)=>{
            e.preventDefault();

            dispatch({type: 'DEL_FAV', payload: id});
      }

      return (
            <div className="card">
                  <Link to={'/dentist/' + id}> 
                        {/* En cada card deberan mostrar en name - username y el id */}
                        <img src="../../public/images/doctor.JPG" alt="" className="docImg"/>
                        <h3 className={style.name}>{name}</h3>
                        <p>{username}</p>
                  </Link>
                  {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

                  {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
                  { 
                        !found // Soy favorito?
                        ? <button onClick={addFav} className="favButton">Add fav</button>
                        : <button onClick={delFav} className="favButton unselectedFav" >Remove fav</button>
                  }
            </div>
      );
};

export default Card;
