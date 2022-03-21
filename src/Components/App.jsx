
import {useState} from 'react';
import Count from './Count'
import Button from './Button'
import Title from './Title'

function App() {

  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

const incrementCountOne = () => {
  setCountOne(countOne + 1)
}
const incrementCountTwo = () => {
  setCountTwo(countTwo + 1)

}

  return (
    <>
   <Title/>
   <Count text="count one" count={countOne} />
   <Button handleClick={incrementCountOne}>Increment Count One</Button>

   <Count text="count Two" count={countTwo} />
   <Button handleClick={incrementCountTwo}>Increment Count Two</Button>
    </>
  );
}
export default App;

