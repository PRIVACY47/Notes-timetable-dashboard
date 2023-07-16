import React from "react";
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.removeItem('token')
    navigate("/login")
  }
  return (
    <>
    <Link to="/dashboard/notes"><p>Notes</p></Link>
    <Link to="/dashboard/timetable"><p>timetable</p></Link>
    <button onClick={logout}> logout</button>
    </>
  ) 
}