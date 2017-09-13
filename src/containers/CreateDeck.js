import React from 'react';
import { Route, Link } from 'react-router-dom';
import CardForm from '../components/CardForm';
import DeckForm from '../components/DeckForm'

class CreateDeck extends React.Component {

  constructor() {
    super()

    this.state = {
      deckName: '',
      allDecks: []
    }

  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/decks', {
      headers : {
        method: "GET",
        'Content-Type': 'application/json'
       }
    })
      .then(res => res.json())
      .then(res => this.setState({
        allDecks: res
      }))
  }


  handleSubmit = (event) => {
  	event.preventDefault()

  	const data = {
  		name: this.state.deckName
  	}

  	fetch('http://localhost:3000/api/v1/decks', {
  		method: 'POST',
  		body: JSON.stringify({data}),
  		headers: {
  			"Content-Type": "application/json"
  		}
  	}).then(res => res.json())
  	.then(res => this.setState({
      allDecks: res
    }))
  }

  handleChange = (event) => {
    this.setState({
      deckName: event.target.value
    })
  }


  render() {
    return(
      <div>
        <DeckForm name={this.state.deckName} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <br></br>
        <CardForm currentDeckNames={this.state.allDecks} />
      </div>
    )
  }
}

export default CreateDeck;
