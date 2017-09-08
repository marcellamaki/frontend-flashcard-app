import React from 'react';
import CardContainer from './containers/CardContainer'


class SingleDeckContainer extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
	  const triviaList = this.props.allCards.map((card, index) =>
	  	<CardContainer key={index} question={card.question} answer={card.correct_answer} changeScore={this.props.changeScore} />)

    return(
      <div className="link ui cards" >
      	{triviaList}
      </div>
    )
  }
}


export default SingleDeckContainer;
