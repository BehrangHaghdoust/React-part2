
import {useCallback,useState} from 'react';
import Count from './Count'
import Button from './Button'
import Title from './Title'


{/* we use useCallback in order to prevent rerender 2 buttens put in a stracture */}


function App() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

const incrementCountOne = useCallback(() => {
  setCountOne(countOne + 1)
},[countOne])
const incrementCountTwo =useCallback(() => {
  setCountTwo(countTwo + 1)

}, [countTwo])

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

