import React from 'react'
import reactLogo from '../../../assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <>
    <nav className='shadow-md w-full p-2 flex justify-between items-center px-14'>
        <div>
            <img src={reactLogo} alt="" width={25} />
        </div>
        <div className='flex gap-5 link'>
            <Link><small>Scholarship</small></Link>
            <Link to="/user"><small>Portal</small></Link>
            <Link><small>About</small></Link>
            <Link><small>FAQ</small></Link>
            
        </div>
    </nav>
    </>
  )
}

export default Nav