import { Link } from "react-router-dom";
import "./home.css"
import { Icon, IconButton, SvgIcon } from "@mui/material";
import React from 'react'
import ReactDOM from 'react-dom'

function Home(props) {
  var c = "CONTACT US AT:";
  return (
      <div className="Home">
        <div className="HomeTop">
          <div className="HomeTopIntro">
            Meet carpoolers, Save the World
          </div>
          <div className="HomeTopDescrip">
            Use this website to connect with other people and carpool, as well as learn how much gas ad our planet you save.
          </div>
          <div className="HomeTopGetStarted">
            <Link className="link" to="/PostForm">
              <img src="/images/button.png" alt="Click Here" className="button"/>
            </Link>
          </div>
        </div>
        <div className="HomeBottom">
          <li className="HomeBottomList">
            <ul className="homelistitemC">
                {c}
            </ul>
            <ul className="homelistitem">
              (805) 439-2239 <i class="fa-solid fa-phone"></i>
            </ul>
            <ul className="homelistitem">
              something@gmail.com <i className=""></i>
            </ul>
            <ul className="homelistitem1">
              Florida Jail City Department 
            </ul>
            <ul className="homelistitem1">
              1235, Florida, CA
            </ul>
          </li>
        </div>
      </div>
    )
}

export default Home;