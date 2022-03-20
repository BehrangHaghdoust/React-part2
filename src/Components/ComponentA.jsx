import {useContext} from 'react'
import ComponentB from '../Components/ComponentB';
import CountContext from '../Context/CountContext'

const ComponentA = () => {
    const countContext = useContext(CountContext)
    return (

        <>
        <h2>this is component A </h2>
        <h3>{countContext.countState}</h3>
      <button onClick={()=>countContext.CountDispatch('increment')}>componnet A , Increment</button>
      <button onClick={()=>countContext.CountDispatch('decrement')}>componnet A , Decrement</button>
      <button onClick={()=>countContext.CountDispatch('reset')}>componnet A , Reset</button>


        <ComponentB/>
        </>
    )
}


export default ComponentA;