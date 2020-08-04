import React from 'react'
import Card from './Card'
import {Link} from 'react-router-dom'


function Nav() {
  return (
    <div className='nav'>
      <Link to="/">
        <Card className='a'>Home</Card> 
      </Link>
      <Link to="/about">
        <Card className='a'>About</Card> 
      </Link>
      <Link to="/project">
        <Card className='a'>Project</Card> 
      </Link>
      <Link to="/contact">
        <Card className='a'>Contact</Card> 
      </Link>
      
   
      
     
    </div>
  )
}

export default Nav
