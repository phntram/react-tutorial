import { useState } from 'react';
import './App.css';

function App() {
  // let counter = 15;
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    // counter = counter + 1;
    // console.log(counter);

    // setCounter(counter + 1);

    // this will not add 4 to counter because React is
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // to do that:
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    // counter = counter - 1;
    // console.log(counter);

    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React counter with hitesh {counter}</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
