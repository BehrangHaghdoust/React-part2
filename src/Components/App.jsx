import React ,{ useReducer } from 'react';
import ComponentA from '../Components/ComponentA';

const intialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return intialState
    default:
      return state
  }
}


export const CountContext =React.createContext()

function App() {
  const [count, dispatch] = useReducer(reducer, intialState);
  return (
    <>
    <div className="App">
      <h1>using servarl useReducer</h1>
      <CountContext.Provider value={{countState:count , CountDispatch: dispatch}}>
      <ComponentA/>
      <h3>{count}</h3>
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('decrement')}>Decrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
      </CountContext.Provider>
    </div>

    </>
  );
}
export default App;

