import React from 'react'

function Hero() {
  return (
    <div>
       <div id='first'>
        <div className = "hero-content">
        <h1 id="hero">YOUR FEET <br /> DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE 
            HERE TO HELP YOU WITH OUR SHOES.</p>
        </div>
        <div >
            <img className="hero-image" src="https://cdn.pixabay.com/photo/2023/05/03/22/43/tennis-7968714_640.png" alt="shoe image" />
        </div>
        </div>
        <section>
        <div className="hero-btn">
            <button>Shop Now</button>
            <button>Category</button>
        </div>
        <div className="shopping">
            <p>Available On</p>
        </div>
        <div className='brand-icons'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png" alt="amazon" />
            <img src="https://dherbal.in/wp-content/uploads/2018/02/Flipkart-logo.png" alt="flipkart" />
        </div>
        </section>
    
    </div>
   
  )
}

export default Hero
