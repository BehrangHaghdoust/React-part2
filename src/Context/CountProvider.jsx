import { useReducer } from "react";
import CountContext  from "./CountContext";
import countReducer from '../Context/countReducer'


const intialState = 0;

const CountProvider = (props) => {
    const [count, dispatch] = useReducer(countReducer, intialState);

    return (
        <CountContext.Provider  value={{countState:count , CountDispatch: dispatch}}>
            {props.children}
        </CountContext.Provider>
    )
}

export default CountProvider ;