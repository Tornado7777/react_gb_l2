import { CHEKBOXLABEL1, CHEKBOXLABEL2 } from "./types"

export function changeCheckBoxLable1 (inputChekBoxState) {   
    return {
        type: CHEKBOXLABEL1, 
        chekBoxState: inputChekBoxState,
    };
};

export function changeCheckBoxLable2 (inputChekBoxState) {   
    return {
        type: CHEKBOXLABEL2, 
        chekBoxState: inputChekBoxState,
    };
};



