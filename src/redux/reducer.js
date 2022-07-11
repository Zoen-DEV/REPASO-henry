import { GET_CHARACTERS } from "./actions";

const initialState = {
    characters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characters: action.payload
            }
        // recibir las acciones aqui
        
        default:
            return state;
    }
}

export default reducer