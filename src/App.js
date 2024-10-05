import React, {useState} from 'react';
import './App.css';
import Grid from './grid/Grid.jsx';
import Cart from './cart/Cart.jsx';

function App() {

  const [desserts, setDesserts] = useState([]);

    function handleAddedDessert(newDessert) {
        setDesserts(d => [...d, newDessert]);
    }

  function addToCart(dessert) {
    handleAddedDessert(dessert);
  }

  function handleRemoveDessert(RemoevDessert) {
    const index = desserts.indexOf(RemoevDessert);
    setDesserts(desserts.filter((_, i) => i !== index));
  }

  function removeFromCart(dessert) {
    handleRemoveDessert(dessert);
  }

  
  return (
    <div className="App">
      < Grid funcAddCart={addToCart} funcRemoveCart={removeFromCart}/>
      < Cart desserts={desserts}/>
    </div>
  );
}

export default App;
