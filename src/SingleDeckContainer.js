import React from 'react';
import CardContainer from './containers/CardContainer'
import {Route} from 'react-router-dom'
import Score from './components/Score'


class SingleDeckContainer extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.props.score)

    if(this.props.allCards === undefined){
      return(<div></div>)
    } else {
    	  const triviaList = this.props.allCards.map((card, index) =>
    	  	<CardContainer key={index} question={card.question} answer={card.correct_answer} changeScore={this.props.changeScore} />)
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
