import React, { Component } from 'react';
import './App.css';
import SingleDeckContainer from './SingleDeckContainer';
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'
import Score from './components/Score'
import CardForm from './components/CardForm'
import AllDecksContainer from './containers/AllDecksContainer'
import { withRouter } from 'react-router'
import CreateRandomDeck from './containers/CreateRandomDeck'


class App extends Component {

  constructor(){
    super();

    this.state = {
      allCards: [],
      score: 0,
      filteredCards: []
    }
  }

  handleScoreChange = (isCorrect) => {
    if (isCorrect) {
      this.setState({score: (this.state.score + 1)})
    }
  }

  handleDeleteCard = (id) => {
    const data = {
      id: id
    }

    fetch(`http:\/\/localhost:3000/api/v1/cards/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => this.setState({
        allCards: res,
        filteredCards: res
      })).then(console.log("I WORKED SOMEHOW"))
  }

  handleFetchDeckCards = (id) => {
    const filteredCards = this.state.allCards.filter(function(card) {
      return card.deck_id === id
    })
    this.setState({
      filteredCards: filteredCards
    })
    this.props.history.push("/flashcards")
  }

  //   return <SingleDeckContainer allCards={this.state.filteredCards}/>

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/cards', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => this.setState({
        allCards: res,
        filteredCards: res
      }))
    }

  render() {
    // console.log(this.state.allCards)
    if (this.state.allCards.length === 0) {
      return <div></div>
    } else {
      return (
        <div >
          <NavBar />
          <div className="ui cards" style={{margin: "auto"}}>
            <Route path='/flashcards' render={() =>
              <SingleDeckContainer allCards={this.state.filteredCards} changeScore={this.handleScoreChange} score={this.state.score} handleDeleteCard={this.handleDeleteCard}/>
              }/>
          </div>
          <div className="ui cards" style={{margin: "auto"}}>
            <Route exact path='/decks' render={() =>
              <AllDecksContainer handleFetchDeckCards={this.handleFetchDeckCards}/>
              }/>
            </div>
          <div className="ui cards" style={{margin: "auto"}}>
            <Route path='/decks/random' render={() =>
              <CreateRandomDeck changeScore={this.handleScoreChange} score={this.state.score} handleDeleteCard={this.handleDeleteCard}/>
              }/>
          </div>
        </div>

      );
    }
  }
}

export default withRouter(App);
