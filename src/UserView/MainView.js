import React from 'react'
import NavigationBar from './NavigationBar'
import {Outlet} from 'react-router-dom'
function MainView() {
  return (
    <div >
      <NavigationBar/>
      <Outlet />
    </div>
  )
}

export default MainView