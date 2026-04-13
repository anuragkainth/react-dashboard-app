import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Home } from "lucide-react";
import MainLayout from './layout/MainLayout';

// function App() {
//   const [count, setCount] = useState(0);
//   const handleIncrement = () => {
//     setCount(count + 1);
//   }
//   return (
//     <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-3xl font-bold text-blue-600">
//         Dashboard Setup Done 🚀
//       </h1>
//       <Button count={count} handleIncrement={handleIncrement} />
//       <Button count={count} handleIncrement={handleIncrement} />
//       <Button count={count} handleIncrement={handleIncrement} />
//     </div>
//   );
// }

// function Button({ count, handleIncrement}){
//   return (
//     <button onClick={handleIncrement}
//     className="bg-blue-500 text-white p-2 rounded-md">
//       Clicked {count} times
//     </button>
//   );
// }

function App() {
  return (
    <MainLayout />
  );
}


export default App
