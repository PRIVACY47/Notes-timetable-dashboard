import React from "react";
import {Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <>
    <Link to="/dashboard/notes"><p>Notes</p></Link>
    <Link to="/dashboard/timetable"><p>timetable</p></Link>
    </>
  ) 
}