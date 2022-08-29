import { useSelector, useDispatch } from "react-redux";
import { FormGroup, FormControlLabel, Checkbox} from "@mui/material";
import { increment, decrement } from "../store/counter";
import { changeCheckBoxLable1, changeCheckBoxLable2} from "../store/profile-chek-box";
import { useCallback } from "react";

export const ProfilePage = () => {
    const data = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log("data: ",data);
    const changeBox1 = useCallback((sateChekBox) => {
        if (sateChekBox === true){
            dispatch(changeCheckBoxLable1(false));
        }
        else dispatch(changeCheckBoxLable1(true));
        
    },[data.profileChekBox1.chekBoxState]);
    const changeBox2 = useCallback((sateChekBox) => {
        if (sateChekBox === true){
            dispatch(changeCheckBoxLable2(false));
        }
        else dispatch(changeCheckBoxLable2(true));
    },[data.profileChekBox2.chekBoxState]);
  
    return <div>
        {data.counter.count}

        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        
        <FormGroup>
            <FormControlLabel control={
            <Checkbox Checked={data.profileChekBox1.chekBoxState} 
            onChange={changeBox1(data.profileChekBox1.chekBoxState)}/>} 
            label="checkBoxLable1" 
            />
            <FormControlLabel control={
            <Checkbox Checked={data.profileChekBox2.chekBoxState} 
            onChange={changeBox2(data.profileChekBox2.chekBoxState)}/>} 
            label="checkBoxLable2" 
            />
        </FormGroup>


        
    </div>
}
/**         <div><h1> {data.profileChekBox1.chekBoxState}</h1></div>
        <div><h1> {data.profileChekBox2.chekBoxState}</h1></div> */