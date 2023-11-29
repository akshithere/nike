import React from 'react'

function Navbar() {
  return (
    <div>
      <nav id='navbar'>
      <div className='logo'>
        <img id="logo" src="https://pngimg.com/d/nike_PNG19.png" alt="logo" />
        </div>
      <ul > 

        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
       
      </ul>
      <button id='button'>Login</button>
    </nav>
    </div>
  )
}

export default Navbar


