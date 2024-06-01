import {useState} from "react";
import './App.css';



function App() {

  const[cnt , setcnt] = useState(0);
  function decHandler(){
    setcnt(cnt - 1);
  }
  function incHandler(){
    setcnt(cnt + 1);
  }
  function resetHandler(){
    setcnt(0);
  }

  return (
    <div className="wrapper">

      <div className='text'>Increment & Decrement</div>

      <div className='operator'>
        <button onClick={decHandler} className="minus">
          -
        </button >
        <div >
          {cnt}
        </div>
        <button onClick={incHandler} className="plus" >
          +
        </button>
      </div>
      <button className="reset" onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
}

export default App;

