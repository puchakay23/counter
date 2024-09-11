import { useState } from "react";
import "./App.css";

function App() {
  
  const [count,setCount] = useState(0);
  function decreaseHandler(){
    setCount(count-1);
  }
  function increaseHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
    <div className=" w-[100vw] h-[100vh] flex justify-center items-center flex-col bg-[#344151] gap-10">
      <div className=" text-2xl font-bold text-blue-400">Increment & Decrement</div>
      <div className=" flex bg-white justify-center items-center gap-12 py-2">
        <button onClick={decreaseHandler} className=" border-r-2 text-center w-20 text-5xl border-[#bfbfbf]">
          -
        </button>
        <div className=" font-semibold text-3xl gap-11">
            {count}
        </div>
        <button onClick={increaseHandler} className=" border-l-2 text-center w-20 text-5xl border-[#bfbfbf]">
          +
        </button>
      </div>
      <button onClick={resetHandler} className=" bg-[#0398d4] rounded-sm px-3 py-1 text-white text-lg">
        Reset
      </button>
    </div>
  );
}

export default App;
