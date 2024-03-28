export const reducer = (state, action) => {
      switch(action.type){
            case 'GET_LIST':
                  return {...state, data: action.payload}
            case 'GET_DENTIST':
                   return {...state, dentist: action.payload}
            // case 'ADD_FAV':
            //       return {...state, favs: [...state.favs, action.payload]}
            // case 'DELETE_FAV':
            //       // Realizar una operación utilizando .filter()
            //       return {}
      }
}
