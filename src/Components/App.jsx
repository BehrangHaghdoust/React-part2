
import '../style/App.css';
import React from 'react';
import CompoA  from './CompoA';




{/* here we want to send data from App to Compo B */}

export const userContext = React.createContext();

function App() {
  return (
    <userContext.Provider value={'Behrang Haghdoust'}>

    <div className="App">
      <h1>useContext</h1>
      <CompoA/>
    </div>
    </userContext.Provider>
  );
}

export default App;
