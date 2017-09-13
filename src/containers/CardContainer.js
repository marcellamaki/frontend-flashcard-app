import React from 'react';
import CardFront from '../components/CardFront';
import CardBack from '../components/CardBack';




class CardContainer extends React.Component {

    constructor(props){
      super(props);

      this.state = {
        flipped: false,
        answer: this.props.answer,
        correctGuess: false
      }
    }

    handleGuess = (event) => {
      const guess = (event.target.dataset.value === "True")
      const isCorrect = this.props.answer === guess
      this.setState({
        flipped: !this.state.flipped,
        correctGuess: isCorrect
      })
      this.props.changeScore(isCorrect)
    }

    render() {
      return(
          <div className="ui centered card">

            {!this.state.flipped ?
            <CardFront question={this.props.question} handleGuess={this.handleGuess}/>
              :
            <CardBack answer={this.props.answer} correctGuess={this.state.correctGuess}/>
            }
            <div className="extra content">
              <span className="right floated icon" onClick={() =>this.props.handleDeleteCard(this.props.id)}>
                <i className="remove red icon"></i>
                Delete Card
              </span>
            </div>
          </div>

      )
    }
}

export default CardContainer;
