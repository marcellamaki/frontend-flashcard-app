import React from 'react';

class CardForm extends React.Component {

  checkValue = (event) => {
    console.log(event.target.value)
  }

  render() {
    return (
      <div className="ui form">
          <div className="field">
            <label>Question:</label>
            <textarea></textarea>
          </div>
            <label>Answer</label>
            <div className="ui radio checkbox">
                <input type="radio" name="answer" tabIndex="0" value="true" onClick={this.checkValue}/>
                <label>True</label>
            </div>
              <div className="ui radio checkbox">
                  <input type="radio" name="answer" tabIndex="0" value="false" onClick={this.checkValue}/>
                  <label>False</label>
              </div>
      </div>
    )
  }
}

export default CardForm;
