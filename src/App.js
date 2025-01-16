import { useState, useMemo, useRef } from "react";


function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {
    setProducts([...products, { name, price: +price }]);
    setName('');
    setPrice('');
    inputRef.current.focus();
  }

  const inputRef = useRef(null);

  const total = useMemo(() => {
    const result = products.reduce((acc, product) => {
    
      console.log('Tính toán lại total');
      
      return acc + product.price;
    }, 0)

    return result;
  }, [products]);

  return (
    <div style={{ padding: '10px 20px' }}>
      <input
        ref={inputRef}
        type='text'
        placeholder="Enter name ..."
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      <br />
      <input
        type='text'
        placeholder="Enter price ..."
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <h2>Total: {total}</h2>
      <h2>Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))}  
      </ul> 
    </div>
  );
}

export default App;
