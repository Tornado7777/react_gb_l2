import { CHEKBOXLABEL1, CHEKBOXLABEL2 } from "./types";

const initialState = { 
    chekBoxState: false,
}



export const profileChekBoxReducer1 =  (state = initialState, action) => {
    switch (action.type) {
        case CHEKBOXLABEL1:
            return { ...state, chekBoxState: !state.chekBoxState };
        
        default:
            return state;
    }
};

export const profileChekBoxReducer2 = (state = initialState, action)=> {
    switch (action.type) {
        case CHEKBOXLABEL2:
            return { ...state, chekBoxState: !state.chekBoxState };
        
        default:
            return state;
    }
};