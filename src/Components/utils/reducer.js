import { json } from "react-router-dom";

export const reducer = (state, action) => {
      switch(action.type){
            case 'GET_LIST':
                  // Array booleano de favoritos ( del tamanio de elementos retornados por la api )
                  const initFavsIndex = new Array(action.payload.length).fill(0);
                  
                  return {...state, data: action.payload}
                  // case 'GET_RECIPE':
                  //       return {...state, recipeSelected: action.payload}
            case 'ADD_FAV':
                  // Print Local Storage
                  // console.log( localStorage.getItem( "favs" ) );

                  let jsonObject = JSON.parse( localStorage.getItem( "favs" ) );
                  // Print jsonObject array
                  // console.log( jsonObject );

                  jsonObject.push( action.payload );
                  // Print array
                  // console.log( jsonObject );

                  localStorage.setItem( "favs", JSON.stringify( jsonObject ) );
                  // Print Local Storage
                  // console.log( localStorage.getItem( "favs" ) );

                  // const actFavsIndex = state.favsIndex
                  // actFavsIndex[action.payload.id] = 1;
                  
                  return { ...state};

            case 'DEL_FAV':
                  // Print Local Storage
                  // console.log( localStorage.getItem( "favs" ) );

                  let jsonObject2 = JSON.parse( localStorage.getItem( "favs" ) );
                  // Print jsonObject array
                  // console.log( jsonObject );

                  let i = 0, found = false, toDelete = 0;

                  while ( found === false && i < jsonObject2.length ) {
                        if( action.payload === jsonObject2[i].id ){
                              found = true;
                              toDelete = i;
                        }
                        i++
                  }


                  // Elimino del array el elemento de la posicion encontrada (toDelete)
                  jsonObject2.splice( toDelete, 1 );

                  // Guardo nuevamente el array en localStorage
                  localStorage.setItem( "favs", JSON.stringify( jsonObject2 ) );

                  // const actFavsIndexDel = state.favsIndex;
                  // actFavsIndexDel[action.payload] = 0;
                  
                  return { ...state, };
                  
            case 'GET_DENTIST':
                  return {...state, dentist: action.payload}     

            case 'GET_ERROR':
                  let errorMsg;
                  switch( action.payload ){
                        case "API_LOAD_ERROR":
                              errorMsg = "Ups! Hubo un error externo al cargar el listado de Dentistas.";
                  };

                  return {...state, error: errorMsg};     
            case 'TOGGLE_THEME':
                  return {...state, theme: action.payload}
      }
}
