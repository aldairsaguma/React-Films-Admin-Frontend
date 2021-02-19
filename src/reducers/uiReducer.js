import { types } from "../types/types"

const initialState = {
    openModal : false,
    closeModal : false
}

export const uiReducer = ( state = initialState, action ) => {
   
    switch (action.type) {
        
        case types.uiOpenModal :
            return {
                ...state,
                openModal : true
            }

        case types.uiCloseModal :
            return {
                ...state,
                closeModal : true
            }
    
        default:
            return state;
    }

}