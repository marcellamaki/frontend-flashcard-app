import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      allCards: []
    }
  }

  componentDidMount(){
    fetch('https://opentdb.com/api.php?amount=20&type=boolean')
      .then(res => res.json())
      .then(res => this.setState({allCards: res}))
  }

  render() {

    console.log(this.state.allCards)

    return (
      <div className="App">
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
