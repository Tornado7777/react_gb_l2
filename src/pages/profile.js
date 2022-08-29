import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counter";

export const ProfilePage = () =>{
    const data = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return <div>
        {data.count}

        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
}