import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

const PublicRoute = ({ children, ...routeProps }) => {
    const profile = false
    if(profile){
        <Link to='/'/>
    }
  return (
    <div>
      <Route {...routeProps}>{children}</Route>
    </div>
  )
}

export default PublicRoute
