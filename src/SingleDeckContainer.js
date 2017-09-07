import React from 'react';
import CardFront from './components/CardFront'


class SingleDeckContainer extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
	  
	  const triviaList = this.props.allCards.map((card, index) => 
	  	<CardFront key={index} category={card.category}/>)

    return(
      <div>
      	<ul>{triviaList}</ul>
      </div>
    )
  }
}


export default SingleDeckContainer;
