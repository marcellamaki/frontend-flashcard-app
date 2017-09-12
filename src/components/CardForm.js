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

  //     const DeckNames = res.map((res, index) => ('<div class="item" data-value={index}>{res.name}</div>')).join('')
  //     })
  // }


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
        <div className="ui form">
          <div className="field">
              <label>Country</label>
              <select className="ui search dropdown">
                { if (this.state.current_deck_names) { this.state.current_deck_names.map(deck => <DeckDropdown deck={deck} /> )
              		} else {
              			return <div>Deck Dropdown</div>
              		}
                }
                <DeckDropdown deck={this.state.current_deck_names} />
              </select>
        </div>
        </div>
      </div>
    )
  }
}

export default CardForm;
