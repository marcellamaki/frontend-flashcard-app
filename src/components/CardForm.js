import React from 'react';

class CardForm extends React.Component {

  constructor() {
    super()

    this.state = {
      question: '',
      answer: true,
    }

  }

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
  }

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
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
