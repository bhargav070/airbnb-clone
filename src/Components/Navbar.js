import React from 'react'
import {FcSearch} from 'react-icons/fc'
import {FiGlobe} from 'react-icons/fi'
import {AiOutlineBars} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'


export default function Navbar() {
  return (
    <div>
    <nav className='container-fluid'>
        <img src= {require("./images/logo.png")} />

        <div className = "central-nav">
          <span className='nav-p'>Anywhere</span>
          <span className='nav-p'>Any Week</span>
          <span><input type="text" placeholder="add guest" className='nav-input'></input></span>
          <FcSearch/>
        </div>


        <div className = "right-nav">
          <span className='nav-r'>Airbnb your Home</span>
          <FiGlobe/>
          <div className='profile'>
            <AiOutlineBars/>
            <CgProfile/>
          </div>
        </div>

        
    </nav>
      <div className='main-container'>
        <img className='photo-grid' src= {require("./images/photo-grid.png")} alt='photo-grid'/>
        <h2 className='display'>Online Experiences</h2>
        <p>Join unique interactive activities led <br></br>by one-of-a-kind hosts-all without leaving home</p>
      </div>
    </div>
  )
}
