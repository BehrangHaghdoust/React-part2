
import '../style/App.css'
import {useState} from 'react';






function App() {
 const [items , setItems] = useState(['hamid', 'navid' , 'behrang']);

 const [name , setName]= useState('');

const handleClick = () => {
  setItems([...items, name])
}

  return (
    <div className="App">
      <h1>useState with Array</h1>

<ul>
<input type="text" onChange={(e)=>setName(e.target.value)} />
<button onClick={handleClick}>Add Name</button>
  {items.map(item => {
    return <li>{item}</li>
  } )}
</ul>

    </div>
  );
}

export default App;
