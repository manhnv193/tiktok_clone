import { useState } from "react";
import Content from './Content'

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()

// Hook: gắn vào
// HOC: bọc bên ngoài
// Render props: truyền vào

// Tác dụng memo: Tránh re-render component trong trường hợp không cần thiết


function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div style={{ padding: 20 }}>
      <Content count={count}/>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
