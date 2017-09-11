import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom'

class NavBar extends React.Component {
  render(){
    return(
      <div className="ui secondary  menu">
        <a className="active item">
          <Link to="/">Home</Link>
        </a>
        <a className="item">
          <Link to="/decks">My Decks</Link>
        </a>
        <div className="right menu">
          <a className="ui item">
            <Link to="/signup">Sign Up</Link>
          </a>

          <a className="ui item">
            Logout
          </a>
        </div>
      </div>
    )
  }
}

export default NavBar;
