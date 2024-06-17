import React from 'react';
import './navbar.css';
import imgs from '../../assets/burger.svg'

function Navbar() {

    function handleDropdown() {
        console.log('working');
        document.getElementById('dropmenu').classList.toggle('display');
    }

    return (
        <>
            <section className='navbar'>
                <div className="logo">
                    <img src="df" alt="logo" />
                </div>
                <div className="navitems">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="menu">
                    <button id='btn' onClick={handleDropdown}><img src={imgs} alt="" /></button>
                </div>
            </section>
            <section className="dropdown" id='dropmenu'>
                <div className="dropitem">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Navbar;
