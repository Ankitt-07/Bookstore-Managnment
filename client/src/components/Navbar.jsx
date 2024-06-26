import React from 'react'
import { Link} from 'react-router-dom'
import '../css/Navbar.css'

const navbar = ({role}) => {
  return (
    <nav className ='navbar'>
    <div className='navbar-left'>
        <Link to ="/" className='Navbar-brand'>Book store</Link>
    </div>
    <div className="navbar-right">

        <Link to="/Books" className="navbar-Link">Books</Link>
        
        <Link to ="/AddBooks" className="navbar-Link">Add Books</Link>
        <Link to ="/AddStudent" className="navbar-Link">Add Student</Link>
        <Link to ="/Dashboard" className="navbar-Link">Dashboard</Link>
        
        
        <Link to ="/login" className="navbar-Link">Login</Link>
          {/* <Link to ="/logout" className="navbar-Link">Logout</Link> */}
          
    </div>


    
</nav>
  )
}

export default navbar


