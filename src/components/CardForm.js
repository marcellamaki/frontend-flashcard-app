import React from 'react';

class CardForm extends React.Component {

  constructor() {
    super()

    this.state = {
      question: '',
      answer: true,
      deck_id: 0,
      current_deck_names: ''
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
    .then(res => {
      const DeckNames = res.map((res, index) => ('<div class="item" data-value={index}>{res.name}</div>')).join('')
      })
  }


// const DeckNames = res.map((result => <div class="item">{result.name}</div>))
// console.log(DeckNames)

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
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
                <label>Deck Name:</label>
                <div className="ui selection dropdown">
                    <input name="deck-name"/>
                    <i className="dropdown icon"></i>
                    <div className="default text">Deck Name</div>
                    <div className="menu">
                        {this.state.DeckNames}
                    </div>
                </div>
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
            <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default CardForm;
