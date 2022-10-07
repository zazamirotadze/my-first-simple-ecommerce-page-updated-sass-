import React from 'react'


const Cart = ({cartItems, removeItem}) => {
   
    const renderCartBooks = cartItems.map(book => (
        <div className='card' >
            <img src={book.img}/>
            <h4>{book.name}</h4>
            <p>{book.price} ₾</p>
            <button onClick={()=>removeItem(book)}  className="remove-btn">წაშლა</button>
        </div>
    ))
  return (
    <>{renderCartBooks}</>
      
    
  )
}

export default Cart
