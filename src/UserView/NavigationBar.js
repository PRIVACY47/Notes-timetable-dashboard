import React from 'react'
import {Link } from 'react-router-dom';
import { useContext } from 'react';
import {MyContext} from '../App'
 function NavigationBar() {
  const token = useContext(MyContext)
  return (
    <>
    <div>
    <Link to="/">home</Link>
    <Link to="timetable">timetable</Link>
    <Link to="notes">notes</Link>
    {token ?<Link to="/dashboard"> dashboard </Link>:<Link to="login">login</Link>}
    </div>
    </>
  )
}

export default NavigationBar