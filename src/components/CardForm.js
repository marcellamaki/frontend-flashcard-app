import React from 'react';
import DeckDropdown from './DeckDropdown'

class CardForm extends React.Component {

  constructor() {
    super()

    this.state = {
      question: '',
      answer: true,
      deck_id: 0,
    }

  }


  handleChange = (event) => {
    this.setState({
      question: event.target.value
    })
  }

  checkValue = (event) => {
    const answer = (event.target.value === 'true')
    this.setState({
      answer: answer
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      question: this.state.question,
      answer: this.state.answer,
      deck_id: this.state.deck_id
    }

    fetch('http://localhost:3000/api/v1/cards', {
      method: 'POST',
      body: JSON.stringify({data}),
      headers: {
        'Content-Type':'application/json'
      }
    })
    this.setState({
      question: '',
      answer: true,
      deck_id: 0,
    })
  }

  updateDeckId = (event) => {
    this.setState({
      deck_id: parseInt(event.target.value)
    })
  }

  render() {
    if (this.props.currentDeckNames.length === 0) {
      return <div></div>
    } else {
      const currentDecks = this.props.currentDeckNames.map(deck =>
        <DeckDropdown deck={deck} />)
      return (
        <div>
          <div className="ui form">
            <div className="field">
                <label>Add Card to Existing Deck</label>
                <select className="ui search dropdown" onChange={this.updateDeckId}>
                  <option value="">Current Decks</option>
                  {currentDecks}
                </select>
            </div>
            <div className="field" onChange={this.handleChange}>
              <label>Question:</label>
              <textarea></textarea>
            </div>
            <div className="field">
              <label>Answer:</label>
              <div className="ui radio checkbox">
                  <input type="radio" name="answer" tabIndex="0" value={true} onClick={this.checkValue}/>
                  <label>True</label>
              </div>
                <div className="ui radio checkbox">
                    <input type="radio" name="answer" tabIndex="0" value={false} onClick={this.checkValue}/>
                    <label>False</label>
                </div>
            </div>
            <button className="ui button" type="submit" onClick={this.handleSubmit}>Add Card</button>
          </div>
      </div>
      )
    }
  }
}

export default CardForm;
