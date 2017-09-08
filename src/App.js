import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SingleDeckContainer from './SingleDeckContainer';


class App extends Component {

  constructor(){
    super();

    this.state = {
      allCards: ""
    }
  }

  componentDidMount(){
    fetch('https://opentdb.com/api.php?amount=20&type=boolean')
      .then(res => res.json())
      .then(res => this.setState({allCards: res}))
    }

  render() {

    // console.log(this.state.allCards)
    if (this.state.allCards === "") {
      return <div></div>
    } else {
      return (
        <div> <SingleDeckContainer allCards={this.state.allCards.results}/> </div>

      );
    }
  }
}

export default App;
