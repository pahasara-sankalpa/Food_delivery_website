import React from 'react'
import './Header.css'

const Header = ({children}) => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Order your food here</h2>
        <p>Delicious meals delivered to your doorstep, fresh and fast</p>
        {children}
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
