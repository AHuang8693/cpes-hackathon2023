// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar'
import React, {useState} from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Page from "./pages/Page";
import Info from "./pages/info/info";
import Contacts from './pages/Contacts/contacts';
import Settings from './pages/Settings/settings';
import PostForm from './pages/PostForm/PostForm';


function App() {

  return (
    <Router>
    <div className="App">
    <NavBar/>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/Page' element={< Page />}></Route>
        <Route exact path='/Info' element={< Info />}></Route>
        <Route exact path='/PostForm' element={< PostForm/>}></Route> 
        {/* <Route exact path='/Contacts' element={<Contacts/>}></Route> */}
        {/* <Route exact path='/Settings' element={<Settings/>}></Route> */}
      </Routes>
    </div>
  </Router>
  );
}

export default App;