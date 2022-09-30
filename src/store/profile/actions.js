import { TOOGGLE_VISIBLE_PROFILE, UPDATE_PROFILE } from "./types"

export function changeCheckBoxLable1 (inputChekBoxState) {   
    return {
        type: TOOGGLE_VISIBLE_PROFILE, 
        chekBoxState: inputChekBoxState,
    };
};

export function changeCheckBoxLable2 (inputChekBoxState) {   
    return {
        type: UPDATE_PROFILE, 
        chekBoxState: inputChekBoxState,
    };
};



