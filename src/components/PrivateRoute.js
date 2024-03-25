import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

const PrivateRoute = ({ children, ...routeProps }) => {
    const profile = false
    if(!profile){
        return <Link to='signIn'/>
    }
  return (
    <Route {...routeProps}>{children}</Route>
  )
}

export default PrivateRoute
