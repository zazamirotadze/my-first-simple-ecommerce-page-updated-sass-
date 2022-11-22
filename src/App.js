import Data from "./Data";
import Card from "./Card";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [cartItems, setCartItems] = useState([])
  const [numberOfItems, setNumberOfItems] = useState(0)
  const [fullSum, setFullSum] = useState(0)


  function getData(book){
    const newId =  uuidv4()
    setCartItems(prevItems => {return [...prevItems, {...book, id: newId}]})
    setNumberOfItems(cartItems.length+1)
    setFullSum(prevsum => prevsum + book.price)
  }



  function removeItem(book){
    setCartItems(prevItems => prevItems.filter(item=> item.id !== book.id))
    setNumberOfItems(cartItems.length-1)
    setFullSum(prevsum => prevsum - book.price)
  }
  


  
  return (
    <>
    <Nav 
      numberOfItems={numberOfItems} 
      fullSum={fullSum} 
      setNumberOfItems={setNumberOfItems} 
      setCartItems={setCartItems}
      setFullSum={setFullSum}
    />
    <Routes>
      <Route path="/" element={
        <div className="card-conteiner">
          {Data.map(book => <Card book={book} key={book.id} handleClick = {getData} />)}
        </div>
      }/>
      <Route path="/Cart" element={<div className="card-conteiner"><Cart cartItems={cartItems} removeItem = {removeItem}/></div>}/>
    </Routes>
    </>
  );
}

export default App;
