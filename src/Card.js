import React from 'react'

const Card = ({book, handleClick}) => {

  return (
    <div className='card' onClick={() => handleClick(book)} style={{cursor:"pointer"}} >
        <img src={book.img}/>
        <h4>{book.name}</h4>
        <p>{book.price} ₾</p>
    </div>
  )
}

export default Card

//