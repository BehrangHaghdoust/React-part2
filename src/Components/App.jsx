
import '../style/App.css'
import {useState} from 'react';






function App() {
  const [count , setCount] = useState(0)

const fiveIncrease = ()=>{
  for(let i = 0 ; i<5 ; i++){
    setCount((prevState)=> prevState + 1)
  }
}
  return (
    <div className="App">
      <h1>start part 2</h1>
      <button onClick={()=> setCount (count + 1)}>Increase</button>
      <button onClick={fiveIncrease}>Increase 5 Number</button>
      <h1>{count}</h1>
      <button onClick={()=> setCount (count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
