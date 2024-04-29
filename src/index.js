import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Appold';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import CreateSession from './components/CreateSession';
import ShowActiveSession from './components/ShowActiveSession';
import TerminateActiveSession from './components/TerminateActiveSession';
import ShowAllUsers from './components/ShowAllUsers';
import ShowSessionUser from './components/ShowSessionUser';
import AddUser from './components/AddUser';
import AddRestaurant from './components/AddRestaurant';
import ShowSelectedRestaurant from './components/ShowSelectedRestaurant';
import Error from './components/Error';
import { createRoot } from 'react-dom/client';
import JoinSession from './components/JoinSession';
const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
  <React.StrictMode>
       <Router>
      <Header/>
      <Routes>      
        <Route path="/" element={<ShowAllUsers />}></Route>  
        <Route path="/createSession" element={<CreateSession />}></Route>
        <Route path="/showActiveSession" element={<ShowActiveSession />}></Route>
        <Route path="/joinSession" element={<JoinSession />}></Route>
        <Route path="/terminateActiveSession" element={<TerminateActiveSession />}></Route>   
        <Route path="/showAllUsers" element={<ShowAllUsers />}></Route>   
        <Route path="/showSessionUser" element={<ShowSessionUser />}></Route>   
        <Route path="/addUser" element={<AddUser />}></Route>   
        <Route path="/addRestaurant" element={<AddRestaurant />}></Route>   
        <Route path="/showSelectedRestaurant" element={<ShowSelectedRestaurant />}></Route>   
        <Route path="/error" element={<Error />}></Route>   
      </Routes>
    </Router>
  </React.StrictMode>
);