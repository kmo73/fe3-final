import { createContext, useContext, useEffect, useReducer, useState} from "react";
import axios from "axios";
import { reducer } from "../utils/reducer.js";

export const initialState = {theme: "", data: []}

export const GlobalContext = createContext();

export const Context = ({ children }) => {
      //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo


      const [state, dispatch] = useReducer(reducer, initialState);

      const url = 'https://jsonplaceholder.typicode.com/users';

      useEffect(() => {
            //Llamado a la API 
            axios(url)
                  .then(
                        res => 
                        {
                              dispatch({type: 'GET_LIST', payload: res.data});
                              console.log( "context" );
                              console.log( state );
                        }
                  ) //res.data.recipes
      }, [])

      return (
            <GlobalContext.Provider value={{state, dispatch}}>
                  {children}
            </GlobalContext.Provider>
      );
};

export default Context

export const useGlobalContext = () => useContext(GlobalContext);
