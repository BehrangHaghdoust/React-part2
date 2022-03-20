import ComponentA from '../Components/ComponentA';
import CountProvider from '../Context/CountProvider';


function App() {
  return (
    <>
    <div className="App">
      <h1>clean code and separate sevral part of a component</h1>
      <CountProvider >
      <ComponentA/>
      </CountProvider>
    </div>

    </>
  );
}
export default App;

