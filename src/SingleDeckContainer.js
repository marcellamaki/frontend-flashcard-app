import React from 'react';
import CardContainer from './containers/CardContainer'
import Score from './components/Score'


class SingleDeckContainer extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    if(this.props.allCards === undefined){
      return(<div></div>)
    } else {
    	  const triviaList = this.props.allCards.map((card, index) =>
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


export default SingleDeckContainer;
