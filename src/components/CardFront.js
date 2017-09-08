import React from 'react'

const CardFront = (props) => {
	return(
			<div className="content">
  			<div className="description">
  				Question: {props.question.replace(/&quot;/g, '\"').replace(/&#039;/g, '\'')}
  			</div>
        <div className="extra content">
          <div className="ui two buttons" onClick={props.handleGuess}>
              <div className="ui positive button" data-value="True">True</div>
              <div className="ui negative button" data-value="False">False</div>
          </div>
        </div>
			</div>
	)
}

export default CardFront
