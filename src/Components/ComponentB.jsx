import {useContext} from 'react';
import CountContext from '../Context/CountContext';

const ComponentB =()=> {
   const countContext = useContext(CountContext)
    return (
        <div>
        <h2>this is component B </h2>
        <h3>{countContext.countState}</h3>
      <button onClick={()=>countContext.CountDispatch('increment')}>Increment</button>
      <button onClick={()=>countContext.CountDispatch('decrement')}>Decrement</button>
      <button onClick={()=>countContext.CountDispatch('reset')}>Reset</button>

        </div>

    )
}


export default ComponentB;