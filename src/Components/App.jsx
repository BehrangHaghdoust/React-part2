
import '../style/App.css'
import {useState} from 'react';






function App() {
 const [person ,setPerson] = useState({name : '' ,age:''});
//  console.log({...person, gender :'Male'});
  return (
    <div className="App">
      <h1>useState with object</h1>
    <input onChange={(e) => setPerson({...person,name : e.target.value})} />
      <h2>Name : {person.name}</h2>
    <input onChange={(e) => setPerson({...person,age : e.target.value})} type="number" />

      <h2>Age : {person.age}</h2>
      <h2>{JSON.stringify(person)}</h2>

    </div>
  );
}

export default App;
