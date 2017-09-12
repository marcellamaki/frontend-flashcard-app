import React from 'react'

class DeckForm extends React.Component {

  constructor() {
    super()

    this.state = {
      name: ''
    }

  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="field" onChange={this.handleChange}>
              <label>Deck Name:</label>
              <input type="text" name="name" placeholder="Deck Name" />
            </div>
            <button className="ui button" type="submit">Submit</button>
        </form>    
      </div>
    )
  }
}

export default DeckForm