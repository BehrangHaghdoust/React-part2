
import '../style/App.css'
import {useState, useEffect} from 'react';






function App() {

const [size , setSize] = useState(window.innerWidth);

const checkSize = ()=> {
   setSize ((window.innerWidth));

}

useEffect(()=> {
   window.addEventListener('resize' , checkSize);

   return ()=>{
    window.removeEventListener('resize' , checkSize);
    //after return we try cleanup useEffect in order to prevent rerender
    // here we can use [] , in order to do that also
  }
})

  return (
    <div className="App">
      <h1>cleanUp in useEffect</h1>

      <h3>window : {size} px </h3>



    </div>
  );
}

export default App;
