import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({numberOfItems, fullSum, setNumberOfItems, setCartItems, setFullSum}) => {
    function sendPayment(){
        setNumberOfItems(0)
        setCartItems([])
        setFullSum(0)
    }
  return (
    <div className='nav-component'>
        <h1>შეიძინე წიგნები ჩვენთან</h1>
        <div className='menu-div'>
        <Link to="/" style={{width: "3em"}} ><button  className="books-btn">წიგნები</button></Link>
        
        <Link to="/cart"  style={{width: "3.5em"}  }> 
            <div className='clss-for-cart'>
                <i className='fa fa-shopping-cart' style={{fontSize: "2em"}}/>
                <span className='numberOfItems'>{numberOfItems}</span>
            </div>
        </Link>
       
            <p> გადასახდელი ჯამური თანხა: {fullSum} ₾</p>
            <button onClick={sendPayment} className="payment-btn">გადახდა</button>
        </div>
    </div>
  )
}

export default Nav