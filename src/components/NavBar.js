import React, { Component } from 'react';

class NavBar extends React.Component {
  render(){
    return(
      <div className="ui inverted segment">
        <div className="ui inverted secondary menu">
          <a href="/"className="ui item">
            Home
          </a>
          <a href="/decks" className="ui item">
            My Decks
          </a>
          <div className="right menu">
            <a href="/signup" className="ui item">
              Sign Up
            </a>

            <a className="ui item">
              Logout
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;
