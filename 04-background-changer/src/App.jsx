import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('white');

  // const changeBackground = (color) => {
  //   setColor(color);
  // };

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          {/* <button onClick={() => changeBackground('red')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Red</button>
          <button onClick={() => changeBackground('blue')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Blue</button>
          <button onClick={() => changeBackground('green')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Green</button> */}
          <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-red-500'>Red</button>
          <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-blue-500'>Blue</button>
          <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-green-500'>Green</button>
          <button onClick={() => setColor('white')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-gray-500'>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
