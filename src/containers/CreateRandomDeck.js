import React from 'react';
import CardContainer from './CardContainer'
import Score from '../components/Score'


class CreateRandomDeck extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      allCards: []
    }

  }

  componentDidMount(){
    fetch('https://opentdb.com/api.php?amount=20&type=boolean')
      .then(res => res.json())
      .then(res => this.setState({allCards: res}))
    }

  render() {
    if(this.state.allCards.length === 0){
      return(<div></div>)
    } else {
        const triviaList = this.state.allCards.results.map((card, index) =>
          <CardContainer key={index} question={card.question} id={card.id} answer={card.answer} changeScore={this.props.changeScore} handleDeleteCard={this.props.handleDeleteCard} />)
        return(
          <div>
            <div>
              <Score score={this.props.score} />
            </div>
            <div className="link ui cards" >
              {triviaList}
            </div>
          </div>
        )
    }
  }
}

export default CreateRandomDeck;