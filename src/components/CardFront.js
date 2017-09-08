import React from 'react'

const CardFront = (props) => {
	return(
		<div key={props.key}>
			<div className="content">
			<div className="description">
				Question: {props.question.replace(/&quot;/g, '\"').replace(/&#039;/g, '\'')}
			</div>
			</div>
		</div>
	)
}

export default CardFront
