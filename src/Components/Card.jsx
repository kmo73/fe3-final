import React from "react";
import { routes } from "./utils/routes";
import { Link } from 'react-router-dom'

const Card = ({ name, username, id }) => {

      const addFav = ()=>{
            // Aqui iria la logica para agregar la Card en el localStorage
      }

      

      return (
            <div className="card">
                  <Link to={'/dentist/' + id}> 
                        {/* En cada card deberan mostrar en name - username y el id */}
                        <img src="../../public/images/doctor.jpg" alt="" className="docImg"/>
                        <h3>{name}</h3>
                        <p>{username}</p>
                        <p>{id}</p>
                  </Link>
                  {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
                  <button onClick={addFav} className="favButton">Add fav</button>
            </div>
      );
};

export default Card;
