import React from 'react';
import './subnavbar.css';
import subnavimg from './subnav.jpg';
import { NavLink } from 'react-router-dom';//Page linked but without reloading the page

const SubNav = () => {
    return (
        <div className='new_nav'>
            <div className="nav_data">
                <div className="left_data">
                    <NavLink to=""><p>All</p></NavLink>
                    <NavLink to=""><p>Mobile</p></NavLink>
                    <NavLink to=""><p>Bestseller</p></NavLink>
                    <NavLink to=""><p>Fashion</p></NavLink>
                    <NavLink to=""><p>Customer Services</p></NavLink>
                    <NavLink to=""><p>Electronics</p></NavLink>
                    <NavLink to=""><p>Prime</p></NavLink>
                    <NavLink to=""><p>Today's deal</p></NavLink>
                    <NavLink to=""><p>Amazon Pay</p></NavLink>
                    <NavLink to="/Cart">Cart</NavLink>
                </div>
                <div className="right_data">
                    <a href=''><img src={subnavimg} alt="Offers" /></a>
                </div>
            </div>
        </div>
    )
}

export default SubNav;