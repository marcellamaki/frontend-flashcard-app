import React from 'react';
import CardFront from '../components/CardFront';
import CardBack from '../components/CardBack';




class CardContainer extends React.Component {

    constructor(props){
      super(props);
    }

    render() {
      return(
          <div className="card">
            <CardFront question={this.props.question}/>
            <CardBack answer={this.props.answer}/>
          </div>

      )
    }
}

export default CardContainer;
