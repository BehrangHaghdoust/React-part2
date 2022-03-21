import {useState,useMemo} from 'react';

function Counter() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

const incrementCountOne = () => {
  setCountOne(countOne + 1)
}
const incrementCountTwo =() => {
  setCountTwo(countTwo + 1)

}
{/* useMemo catch our data and give that to us when we click on btn 1 */}
const isEven =useMemo(()=> {
    let i = 0 ;
    while(i<900000000) i++
    return countOne % 2 === 0 ;
}, [countOne]
)
  return (
    <>
   <button onClick={incrementCountOne}>Count One - {countOne} </button>
   <span>{isEven ? 'Even' : "Odd"}</span>
   <br/>
   <button onClick={incrementCountTwo}>Count Two - {countTwo} </button>
    </>
  );
}
export default Counter;