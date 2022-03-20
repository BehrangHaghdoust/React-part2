// import {useState} from 'react';
// function App() {
// const [count , setCount] = useState(0)
//   return (
//     <div className="App">
//       <h1>useReducer</h1>

//       <h3>{count}</h3>
//       <button onClick={()=> setCount(count + 1)}>Increment</button>
//       <button onClick={()=>setCount(count - 1)}>Decrement</button>
//       <button onClick={()=> setCount(0)}>Reset</button>
//     </div>
//   );
// }
// export default App;



import { useReducer } from 'react';

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

function App() {
  const [count, dispatch] = useReducer(reducer, intialState);
  const [count2, dispatch2] = useReducer(reducer, intialState);
  return (
    <div className="App">
      <h1>using servral useReducer</h1>
      <h3>{count}</h3>
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('decrement')}>Decrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
      <br />
      <h3>{count2}</h3>
      <button onClick={()=>dispatch2('increment')}>Increment</button>
      <button onClick={()=>dispatch2('decrement')}>Decrement</button>
      <button onClick={()=>dispatch2('reset')}>Reset</button>
      <br />
    </div>
  );
}
export default App;

