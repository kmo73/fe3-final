// Hola companiero de batalla Camilo, cambio esto para suprimir los warnings (saque del import las func. que no se usaban. Deje debajo la anterior)
import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { reducer } from "../utils/reducer.js";

export const initialState = {theme: "light", data: [], favsIndex: [], dentist: {}};
( localStorage.getItem('favs') === "[]") && localStorage.setItem( "favs", "[]" );


export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
      //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
      const [state, dispatch] = useReducer(reducer, initialState);
      const url = 'https://jsonplaceholder.typicode.com/users';

      // useMemo(() => {
      //       axios(url)
      //             .then(res => {dispatch({type: 'GET_LIST', payload: res.data})})
      // }, []);

      useEffect(
            () => {
                  axios(url)
                  .then(res => {dispatch({type: 'GET_LIST', payload: res.data})});
                  // Agregar:
                  // .catch()
            },
            []
      );
      console.log( "Context >:()" );
      return (
            <GlobalContext.Provider value={{state, dispatch}}>
                  {children}
            </GlobalContext.Provider>
      );
};

export default ContextProvider;

export const useGlobalContext = () => useContext(GlobalContext);
