import { useRef, useState, useEffect } from "react";
import Content from './Content'

// Lưu các giá trị  cảu một tham chiếu bên ngoài
// function component


function App() {
  const [count, setCount] = useState(60);
  


  const timerId = useRef()

  const preCount = useRef()

  const h1Ref = useRef()

  console.log('h1Ref -> ', h1Ref.current)
  
  useEffect(() => {
    preCount.current = count;
  }, [count])

  const handleStart = () =>{
    timerId.current = setInterval(() => {
      setCount(count => count - 1);
    }, 1000)

    console.log('Start -> ',timerId.current)
  }

  const handleStop = () =>{
    clearInterval(timerId.current)

    console.log('Stop -> ',timerId.current)
  }

  console.log('preCount -> ', preCount.current)

  return (
    <div style={{ padding: 20 }}>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
