
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar'
import React, {useState} from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Page from "./Page";


function App() {

  return (
    <Router>
    <div className="App">
    <NavBar/>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Page">Page</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/Page' element={< Page />}></Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
