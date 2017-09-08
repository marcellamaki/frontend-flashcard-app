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
      // console.log(this.state.answer)
      // console.log(event.target.dataset.value)
      const isCorrect = this.props.answer === event.target.dataset.value
      this.setState({
        flipped: !this.state.flipped,
        correctGuess: isCorrect
      })
      this.props.changeScore(isCorrect)
    }

    render() {
      return(
          <div className="card">
            {!this.state.flipped ?
            <CardFront question={this.props.question} handleGuess={this.handleGuess}/>
              :
            <CardBack answer={this.props.answer} correctGuess={this.state.correctGuess}/>
            }
          </div>

      )
    }
}

export default CardContainer;
