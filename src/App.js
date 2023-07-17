import React,{useEffect} from "react";


import Dashboard from "./Dashboard/Dashboard";
import Subject from "./Dashboard/Notes/UpdateSubject";
import NotesHome from "./Dashboard/Notes/Main";
import Main from './Dashboard/Timetable/Main';
import Update from './Dashboard/Timetable/Update';

import { createContext } from 'react';
import Protectedroute from "./Helpers/ProtectedRoute";

import { useLocation ,useNavigate,Routes, Route , BrowserRouter } from "react-router-dom"
import "./input.css"
import MainView from './UserView/MainView';
import Notes from './UserView/Notes';
import Home from './UserView/Home';
import Timetable from './UserView/TimeTable'
import Login from './UserView/login';

export const MyContext = createContext("");

export default function App() {


  const navigate = useNavigate()
  const location = useLocation()
  let token = localStorage.getItem('token')
   
    const isTokenExpired= ()  => {
      //Both undefined and null are falsy by default
    
              if ( ! token ) {
                // token does not exit
                
                return false
              }
              else {
                
                const decode = JSON.parse(atob(token.split('.')[1]))
              
                if (decode.exp * 1000 < new Date().getTime()) {
                 
                  localStorage.clear()
                  // token expired 
                  
                return navigate("/login")
              }
              }
        }
        
    useEffect(()=>isTokenExpired ,[location])

  return (
  
   
    <MyContext.Provider value={localStorage.getItem('token')} >
    <Routes>
      <Route path="/dashboard" element={<Protectedroute><Dashboard/></Protectedroute>}/>
      <Route path="/dashboard/subject/:id" element={<Subject/>} />
      <Route path="/dashboard/notes" element={<NotesHome/>}/>
      <Route path="/dashboard/timetable" element={<Main/>} />
      <Route path="/dashboard/timetables/:id" element ={<Update/>}/>
      

      <Route path="/" element={<MainView/>}>
        <Route index element={<Home/>}/>
        <Route path="notes" element={<Notes/>}/>
        <Route path="timetable" element={<Timetable/>}/>
        <Route path="login" element={<Login/>}/>

      </Route>
    </Routes>
    </MyContext.Provider>
    
   
  ) 
}