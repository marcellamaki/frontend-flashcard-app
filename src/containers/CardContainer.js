import React from 'react';
import CardFront from '../components/CardFront';
import CardBack from '../components/CardBack';




class CardContainer extends React.Component {

    constructor(props){
      super(props);

      this.state = {
        flipped: false
      }
    }

    handleFlip = () => {
      this.setState({
        flipped: !this.state.flipped
      })
    }

    render() {
      return(
          <div className="card" onClick={this.handleFlip}>
            {!this.state.flipped ?
            <CardFront question={this.props.question}/>
              :
            <CardBack answer={this.props.answer}/>
            }
          </div>

      )
    }
}

export default CardContainer;
