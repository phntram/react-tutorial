// import { useState } from 'react';
import './App.css';
import Card from './components/Card';
// import './index.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='text-3xl bg-green-400 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card userName='Tram Pham' />
      <Card post='Staff Eng.' />
      <Card />
    </>
  );
}

export default App;
