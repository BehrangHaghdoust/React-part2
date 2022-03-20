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

const intialState = {
  count: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state ,count : state.count + action.payload}
      case 'incrementFive':
        return {...state ,count : state.count + action.payload}
    case 'decrement':
      return {...state , count : state.count - action.payload}
    case 'reset':
      return intialState
    default:
      return
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div className="App">
      <h1>useReducer --part 2 using object</h1>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({type:'increment', payload:1})}>Increment</button>
      {/* <button onClick={() => dispatch('incrementFive')}>Increment 5</button> */}
      <button onClick={() => dispatch({type:'incrementFive', payload:5})}>Increment 5</button>
      <button onClick={() => dispatch({type:'decrement',payload:1})}>Decrement</button>
      <button onClick={() => dispatch({type:'reset'})}>Reset</button>
    </div>
  );
}
export default App;

