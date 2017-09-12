import React from 'react';
import DeckDropdown from './DeckDropdown'

class CardForm extends React.Component {

  constructor() {
    super()

    this.state = {
      question: '',
      answer: true,
      deck_id: 0,
      current_deck_names: undefined
    }

  }

  componentWillMount() {
    fetch('http://localhost:3000/api/v1/decks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => this.setState({
      current_deck_names: res
    })
  )}


  handleChange = (event) => {
    this.setState({
      question: event.target.value
    })
  }

  checkValue = (event) => {
    this.setState({
      answer: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    console.log(this.state.current_deck_names)
  }

  render() {
    if (this.state.current_deck_names === undefined) {
      return <div></div>
    } else {
      const currentDecks = this.state.current_deck_names.map(deck =>
        <DeckDropdown deck={deck} />)
      return (
        <div>
          <div className="ui form">
            <div className="field">
                <label>Current Decks:</label>
                <select className="ui search dropdown">
                  {currentDecks}
                </select>
          </div>
          </div>
        </div>
      )
    }
  }
}

export default CardForm;
