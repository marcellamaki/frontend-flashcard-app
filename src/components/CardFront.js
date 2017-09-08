import React from 'react'

const CardFront = (props) => {
	return(
		<li key={props.key}>Question: {props.question.replace(/&quot;/g, '\"').replace(/&#039;/g, '\'')}</li>
	)
}

export default CardFront
