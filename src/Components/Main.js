import React from 'react'

function Main() {
  return (
    <div className='main container'>
        <img className='photo-grid' src= {require("./images/photo-grid.png")} alt='phtot-grid'/>
        <h2 className='display'>Online Experiences</h2>
        <p>Join unique interactive activities led <br></br>by one-of-a-kind hosts-all without leaving home</p>
    </div>
  )
}

export default Main