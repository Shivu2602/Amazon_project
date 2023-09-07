import React from 'react'
import Banner from './Banner'
import './mainpage.css'
import Product from './Product'


const Mainindex = () => {
  return (
    <div className='home_section'>
      <div className='banner'>
        <Banner />
      </div>
      <div className='slide_part'>
        <div className='left_slide'>
          <Product title="Deal of the Day" />
        </div>
        <div className='right_slide'>
          <h4>Festive latest launches</h4>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg" />
          <a href="#">see more</a>
        </div>
      </div>

      <Product title="Today's Deals" />
      <div className='imag_banner'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/June/week24/1500-X-300--header-BHP-Final-Updated.jpg" alt='banner'/>
      </div>
      <Product title="Best Seller" />
      <Product title="80% off" />
      {/* {<Product />} */}
    </div>
  )
}

export default Mainindex