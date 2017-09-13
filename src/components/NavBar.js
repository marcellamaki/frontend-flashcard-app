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
           <a href="/decks/new" className="ui item">
            Create New Card
          </a>
          <div className="right menu">
            <a href="/signup" className="ui item">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;
