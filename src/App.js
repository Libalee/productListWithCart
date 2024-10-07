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

  function countDessert(dessert) {
    let i = 0;
    desserts.forEach(d => d === dessert ? i++ : null);
    return i;
  }
  
  return (
    <div className="App">
      < Grid funcAddCart={addToCart} funcRemoveCart={removeFromCart} funcCountDes={countDessert}/>
      < Cart desserts={desserts} funcCountDes={countDessert}/>
    </div>
  );
}

export default App;
