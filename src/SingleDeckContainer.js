import React from 'react';
import CardContainer from './containers/CardContainer'


class SingleDeckContainer extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
	  console.log(this.props.allCards)
	  const triviaList = this.props.allCards.map((card, index) =>
	  	<CardContainer key={index} question={card.question} answer={card.correct_answer} />)

    return(
      <div className="ui cards">
      	{triviaList}
      </div>
    )
  }
}


export default SingleDeckContainer;
