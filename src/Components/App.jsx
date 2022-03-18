
import '../style/App.css'
import {useState} from 'react';






function App() {
  const [count , setCount] = useState(0)

  const AddCount = ()=>{
    setCount (count + 1)
  }
  return (
    <div className="App">
      <h1>start part 2</h1>
      <button onClick={()=>AddCount()}>Count : {count}</button>
    </div>
  );
}

export default App;
