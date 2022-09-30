import { useSelector, useDispatch } from "react-redux";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { increment, decrement } from "../store/counter";
import { changeCheckBoxLable1, changeCheckBoxLable2 } from "../store/profile-chek-box";
import { toggleVisibleProfile } from "../store/profile";
import { ProfileForm } from "../components";

export const ProfilePage = () => {
    const data = useSelector((state) => state);
    const profile = useSelector((state) => state.profile)
    const dispatch = useDispatch();
    console.log("data: ", data);

    const changeBox1 = (sateChekBox) => {
        if (sateChekBox === true) {
            dispatch(changeCheckBoxLable1(false));
        }
        else dispatch(changeCheckBoxLable1(true));

    };

    const changeBox2 = (sateChekBox) => {
        if (sateChekBox === true) {
            dispatch(changeCheckBoxLable2(false));
        }
        else dispatch(changeCheckBoxLable2(true));

    };

    const boolTostring = (bool) => {
        if (bool === true) {
            return "true";
        }
        else return "false";
    }


    return <div>

        <hr />
        <h1>PROFILE PAGE</h1>
        <hr />
        <div>
            <h1>Counter</h1>
            {data.counter.count}
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
        <div>
            <hr />
            <h1>Profile chek box:</h1>
            <div><h1>State chek box 1: {boolTostring(data.profileChekBox1.chekBoxState)}</h1></div>
            <div><h1>State chek box 2: {boolTostring(data.profileChekBox2.chekBoxState)}</h1></div>

            <FormGroup>
                <FormControlLabel control={
                    <Checkbox onChange={() => { changeBox1(data.profileChekBox1.chekBoxState) }} />}
                    label="checkBoxLable1"
                />
                <FormControlLabel control={
                    <Checkbox onChange={() => { changeBox2(data.profileChekBox2.chekBoxState) }} />}
                    label="checkBoxLable2"
                />
            </FormGroup>

            <hr />
        </div>
        <div>
          
        {profile.isVisibleProfile && (
          <>
            <h3>firstName: {profile.firstName}</h3>
            <h3>lastName: {profile.lastName}</h3>
            <h3>phone: {profile.phone}</h3>
          </>
        )}

        <button onClick={() => dispatch(toggleVisibleProfile())}>toggle</button>
        <hr />

        <ProfileForm {...profile} />
        <hr /> 
        </div>
    </div>
} 
