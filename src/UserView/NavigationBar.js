import React from 'react'
import {Link } from 'react-router-dom';
function NavigationBar() {
  return (
    <>
    <Link to="home">home</Link>
    <Link to="timetable">timetable</Link>
    <Link to="notes">notes</Link>
    </>
  )
}

export default NavigationBar