import React, {useState} from 'react';
import './App.css';
import Grid from './grid/Grid.jsx';
import Cart from './cart/Cart.jsx';


function App() {

  const [desserts, setDesserts] = useState([]);


  function handleAddedDessert(newDessert) {
      setDesserts(d => [...d, newDessert]);
    }

  function addToCart(dessert, price) {
    handleAddedDessert(
      {
        dessertType: dessert,
        dessertPrice: price
      }
    );
  }

  function handleRemoveAllDesserts(removeDessert) {
    setDesserts(desserts.filter((d, _) => d.dessertType !== removeDessert));
  }

  function handleRemoveDessert(removeDessert) {
    let toBeRemoved = desserts.find((d) => d.dessertType === removeDessert);
    setDesserts(desserts.filter((d, _) => d !== toBeRemoved));

  }

  function removeAllFromCart(dessert) {
    handleRemoveAllDesserts(dessert);
  }

  function removeFromCart(dessert) {
    handleRemoveDessert(dessert);
  }

  function countDessert(dessert) {
    let i = 0;
    desserts.forEach(d => d.dessertType === dessert ? i++ : null);
    return i;
  }

  function containsDessert(obj, list) {
    for(let i = 0; i < list.length; i++) {
        if(obj.dessertType === list[i].dessertType) {
            return true;
        };
    };
    return false;
}
  
  return (
    <div className="App">
      < Grid funcAddCart={addToCart} funcRemoveCart={removeFromCart} funcCountDes={countDessert}/>
      < Cart desserts={desserts} funcCountDes={countDessert} funcContainDes={containsDessert} funcRemoveAllCart={removeAllFromCart}/>
    </div>
  );
}

export default App;
