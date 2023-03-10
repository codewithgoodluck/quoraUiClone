import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcons from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar, Button, Input } from "@material-ui/core";
import '../styles/Navbar.css'


function Navbarq() {
  return (
    <div className="qheader">
      <div className="qHeader__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
          alt=""
        />
      </div>
      <div className="qHeader__icons">
        <div className="active qHeader__icon">
          <HomeIcon />
        </div>
        <div className="qHeader__icon">
          <FeaturedPlayListOutlinedIcon />
        </div>
        <div className="qHeader__icon">
          <AssignmentTurnedInOutlinedIcon />
        </div>
        <div className="qHeader__icon">
          <PeopleAltOutlinedIcon />
        </div>
        <div className="qHeader__icon">
          <NotificationsOutlinedIcons />
        </div>
        <div className="qHeader__input">
          <SearchIcon></SearchIcon>
          <input type="teext" placeholder="Search Quora" />
        </div>
        <div className="qHdeader__rem">
          <div className="qHeader__avater">
            <Avatar />
          </div>
      
            <LanguageIcon />
        
          <Button>Add Question</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbarq;
