
import '../style/App.css'
import {useState, useEffect} from 'react';






function App() {

const [count , setCount] = useState(0);
const [name ,setName] =useState('default name ')


useEffect(()=> {
  console.log("trigger use effect");
},[count])
// we put a empty array as a argumet to useEffect in order to our state be render just for one time
// if we put a item in array our useEffect be rerender for just that item
  return (
    <div className="App">
      <h1>useEfect in Rect</h1>

<button onClick={()=> setCount(count + 1)}>InCrease : {count}</button>
<input type="text" onChange={(e)=> setName(e.target.value)} />
<h3>{name}</h3>



    </div>
  );
}

export default App;
