import { useState } from "react";

c

function App() {
  const [counter , setCounter] = useState(1);

  const handleIncrease = () => {
    // Truyen vao 1 gia tri moi cho counter
    setCounter(prevState => prevState + 1);
    setCounter(prevState => prevState + 1);
    setCounter(prevState => prevState + 1);
  }

  return (
    <div className="App">
      <h2>{counter}</h2>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
