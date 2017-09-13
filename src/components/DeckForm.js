import React from 'react'

const DeckForm = (props) => {

    return (
      <div>
        <form className="ui form" onSubmit={props.handleSubmit}>
            <div className="field" onChange={props.handleChange}>
              <label>Add Card to a New Deck</label>
              <input type="text" name="name" placeholder="Deck Name" />
            </div>
            <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    )
  }

export default DeckForm
