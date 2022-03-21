import useCounter from "../Hooks/useCounter";
function App() {

const {count,increment,decrement,reset}= useCounter(100)
  return (
    <>
<h1>working with custom hooks</h1>
<h3>Count ={count}</h3>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
<button onClick={reset}>Reset</button>
    </>
  );
}
export default App;

