import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <Link to='/signIn' className='link'>SignIn</Link>
        <Link to='/dashboard' className='link'>Dashboard</Link>
    </div>
  )
}

export default Navigation
