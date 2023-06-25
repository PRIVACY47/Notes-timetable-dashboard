import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Subject from "./Dashboard/Notes/UpdateSubject";
import NotesHome from "./Dashboard/Notes/Main";
import Main from './Dashboard/Timetable/Main';
import Update from './Dashboard/Timetable/Update';


import MainView from './UserView/MainView';
import Notes from './UserView/Notes';
import Home from './UserView/Home';
import Timetable from './UserView/TimeTable'
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<App/>}/> 
      <Route path="/dashboard/subject/:id" element={<Subject/>} />
      <Route path="/dashboard/notes" element={<NotesHome/>}/>
      <Route path="/dashboard/timetable" element={<Main/>} />
      <Route path="/dashboard/timetables/:id" element ={<Update/>}/>
      

      <Route path="/" element={<MainView/>}>
        <Route path="notes" element={<Notes/>}/>
        <Route path="timetable" element={<Timetable/>}/>
        <Route path="home" element={<Home/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);