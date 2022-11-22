import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({numberOfItems, fullSum, setNumberOfItems, setCartItems, setFullSum}) => {
    function sendPayment(){
        setNumberOfItems(0)
        setCartItems([])
        setFullSum(0)
    }
  return (
    <div className='nav'>
        <h1>შეიძინე წიგნები ჩვენთან</h1>
        <div className='nav__menu-div'>
           <div className='nav__books-btn-div'>
                <Link to="/" style={{width: "3em"}} ><button  className="nav__books-btn">წიგნები</button></Link>
            </div> 
        
            <div className='nav__cart-icon-div'>
                <Link to="/cart"  style={{width: "3.5em"}  }> 
                        <i className='fa fa-shopping-cart nav__cart-icon' />
                </Link>
                <div className='nav__numberOfItems'><p>{numberOfItems}</p></div>
            </div>
            <div className='nav__payment-div'>
                <p> გადასახდელი ჯამური თანხა: {fullSum} ₾</p>
                <button onClick={sendPayment} className="nav__payment-btn">გადახდა</button>
            </div>
        </div>
    </div>
  )
}

export default Nav